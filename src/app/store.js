import { configureStore } from '@reduxjs/toolkit';
import inspirationalImagesReducer from '../features/inspirationalImage/InspirationalImagesSlice';

export const store = configureStore({
  reducer: {
    inspirationalImages: inspirationalImagesReducer,
  },
});
