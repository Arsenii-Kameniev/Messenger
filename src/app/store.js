import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mainPageReducer from '../features/MainPage/mainPageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mainPage: mainPageReducer,
  },
});
