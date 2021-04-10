import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import toDoReducer from '../features/to-do/toDoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDo: toDoReducer
  },
});
