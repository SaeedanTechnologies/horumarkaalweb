import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/responsive.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { persistor, store } from "./store/StoreConfig";
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <SnackbarProvider maxSnack={3}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SnackbarProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();