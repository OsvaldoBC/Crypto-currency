import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coinstats.app/public/v1/coins/';

export const fetchHome = createAsyncThunk(
  'crypto/fetchHome',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.coins;
  },
);

const CryptoHome = createSlice({
  name: 'crypto',
  initialState: {
    crypto: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchHome.pending]: (state) => {
      state.loading = true;
    },
    [fetchHome.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchHome.fulfilled]: (state, action) => {
      state.loading = false;
      state.crypto = action.payload;
    },
  },
});

export default CryptoHome.reducer;
