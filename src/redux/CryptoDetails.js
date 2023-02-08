import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDetails = createAsyncThunk(
  'detail/fetchDetails',
  async (id) => {
    const response = await fetch(
      `https://api.coinstats.app/public/v1/coins/${id}`,
    );
    const data = await response.json();
    return data.coin;
  },
);

const CryptoDetails = createSlice({
  name: 'detail',
  initialState: {
    detail: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchDetails.pending]: (state) => {
      state.loading = true;
    },
    [fetchDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [fetchDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.detail = action.payload;
    },
  },
});

export default CryptoDetails.reducer;
