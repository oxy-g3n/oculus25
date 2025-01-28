import { configureStore } from '@reduxjs/toolkit';
import DownCouter from './redux/DownCouterSlice';

const store = configureStore({
  reducer: {
    counter: DownCouter,
  },
});

export default store;
