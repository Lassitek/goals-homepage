import { configureStore } from '@reduxjs/toolkit';
import inspirationalImagesReducer from '../features/inspirationalImage/InspirationalImagesSlice';
import weatherReducer from '../features/weather/WeatherSlice';
import goalsReducer from '../features/goals/GoalsSlice';
import inspirationalQuoteReducer from '../features/inspirationalQuote/InspirationalQuoteSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    goals: goalsReducer,
    inspirationalImages: inspirationalImagesReducer,
    inspirationalQuote: inspirationalQuoteReducer
  },
});
