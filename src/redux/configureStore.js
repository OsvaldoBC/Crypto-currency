import { configureStore } from '@reduxjs/toolkit';
import CryptoHome from './CryptoHome';

const store = configureStore({
  reducer: {
    crypto: CryptoHome,
  },
});

export default store;
