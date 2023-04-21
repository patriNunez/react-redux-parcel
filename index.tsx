import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import App from './components/App';

const store = configureStore({
    reducer: rootReducer
  });

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
