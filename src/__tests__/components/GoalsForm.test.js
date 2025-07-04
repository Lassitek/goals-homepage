// GoalsForm.test.js

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../../features/goals/GoalsSlice';
import { GoalsForm } from '../../components/goalsForm/GoalsForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Helper to render with Redux store
const renderWithStore = (ui, { preloadedState, store = configureStore({ reducer: { goals: goalsReducer }, preloadedState }) } = {}) => {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    }
};

describe('GoalsForm Component', () => {

    test('should not add an empty goal', () => {
        const { store } = renderWithStore(<GoalsForm />);

        const form = screen.getByRole('form', { name: /goal form/i });

        // Submit with empty input
        fireEvent.submit(form);

        const goals = store.getState().goals;
        expect(goals).toHaveLength(3); // initialState has 3
    });

    test('should not allow adding more than 10 goals', () => {
        const preloadedGoals = Array.from({ length: 10 }, (_, i) => ({
            id: String(i + 1),
            name: `Goal ${i + 1}`,
            isComplete: false
        }));

        const { store } = renderWithStore(<GoalsForm />, {
            preloadedState: { goals: preloadedGoals }
        });

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form', { name: /goal form/i });

        fireEvent.change(input, { target: { value: 'Extra Goal' } });
        fireEvent.submit(form);

        const goals = store.getState().goals;
        expect(goals).toHaveLength(10); // Should not increase beyond 10
        expect(goals.find(goal => goal.name === 'Extra Goal')).toBeUndefined();
    });

    test('shows toast when submitting empty goal', async () => {
        renderWithStore(<GoalsForm />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: '   ' } });
        fireEvent.submit(input.closest('form'));

        await waitFor(() => {
            expect(screen.getByText(/Goals cannot be empty/i)).toBeInTheDocument();
        });
    });

    test('shows toast when submitting goal under 3 characters', async () => {
        renderWithStore(<GoalsForm />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'hi' } });
        fireEvent.submit(input.closest('form'));

        await waitFor(() => {
            expect(screen.getByText(/Goals must be at least 3 characters/i)).toBeInTheDocument();
        });
    });

    test('disables input and shows toast when user reaches 10 goals', async () => {
        const tenGoals = Array.from({ length: 9 }, (_, i) => ({
            id: String(i + 1),
            name: `Goal ${i + 1}`,
            isComplete: false,
        }));

        const { store } = renderWithStore(<GoalsForm />, {
            preloadedState: { goals: tenGoals }
        });

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form', { name: /goal form/i });

        fireEvent.change(input, { target: { value: 'Extra Goal' } });
        fireEvent.submit(form);

        await waitFor(() => {
            expect(input).toBeDisabled();
            expect(screen.getByText(/You have reached the maximum number of goals/i)).toBeInTheDocument();
        });
    });

    test('should not add goal if under 3 characters', async () => {
        const { store } = renderWithStore(<GoalsForm />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form', { name: /goal form/i });

        fireEvent.change(input, { target: { value: 'ok' } }); // 2 characters
        fireEvent.submit(form);

        await waitFor(() => {
            const goals = store.getState().goals;
            expect(goals).toHaveLength(3); // Should not add
            expect(goals.find(goal => goal.name === 'ok')).toBeUndefined();
        });
    });

});
