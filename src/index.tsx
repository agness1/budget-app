import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { persistor, store } from './components/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
