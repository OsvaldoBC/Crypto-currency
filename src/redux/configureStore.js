import { configureStore } from '@reduxjs/toolkit';
import CryptoDetails from './CryptoDetails';
import CryptoHome from './CryptoHome';

const store = configureStore({
  reducer: {
    crypto: CryptoHome,
    detail: CryptoDetails,
  },
});

export default store;
