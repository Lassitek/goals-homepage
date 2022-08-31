import { configureStore } from '@reduxjs/toolkit';
import inspirationalImagesReducer from '../features/inspirationalImage/InspirationalImagesSlice';
import weatherReducer from '../features/weather/WeatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    inspirationalImages: inspirationalImagesReducer
  },
});
