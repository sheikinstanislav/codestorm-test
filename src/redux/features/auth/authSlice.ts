import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAuthState } from '../../../types/types';
import axios from '../../../utils/axios';

const initialState: initialAuthState = {
  accessToken: null,
  isLoading: false,
  auth: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',

  async ({ email, password }, { getState }) => {
    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });
      if (data.accessToken) {
        window.localStorage.setItem('token', data.accessToken);
      }

      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.isLoading = false;
    },
  },
  extraReducers: {
    // Login user
    [loginUser.pending]: (state: initialAuthState) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state: initialAuthState, action: PayloadAction) => {
      state.isLoading = false;
      state.accessToken = action.payload;
    },
    [loginUser.rejectWithValue]: (
      state: initialAuthState,
      action: PayloadAction
    ) => {
      state.isLoading = false;
    },
  },
});

export const checkIsAuth = (state: initialAuthState) =>
  Boolean(state.auth.accessToken);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
