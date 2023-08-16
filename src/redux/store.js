import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slice'; // Adjust the path

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

export default store;
