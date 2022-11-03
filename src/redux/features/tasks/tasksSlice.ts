import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { intitialTasksState, TaskType } from '../../../types/types';
import axios from '../../../utils/axios';

const initialState: intitialTasksState = {
  tasks: [],
  isLoading: false,
};

export const getTasks = createAsyncThunk(
  'tasks/getTasks',

  async () => {
    try {
      const { data } = await axios.get('/tasks');

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: {
    // Get Tasks
    [getTasks.pending]: (state: intitialTasksState) => {
      state.isLoading = true;
    },
    [getTasks.fulfilled]: (
      state: intitialTasksState,
      action: PayloadAction
    ) => {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    [getTasks.rejectWithValue]: (state: intitialTasksState) => {
      state.isLoading = false;
    },
  },
});

export default tasksSlice.reducer;
