import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer'; // Убедитесь, что путь к файлу правильный

const store = configureStore({
  reducer: rootReducer,
});

export default store;
