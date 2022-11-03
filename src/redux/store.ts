import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';
import tasksSlice from './features/tasks/tasksSlice';
import { auth, tasks } from './nameHelper';

const store = configureStore({
  reducer: {
    [auth]: authSlice,
    [tasks]: tasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
