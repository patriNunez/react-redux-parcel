import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: rootReducer
  });

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
