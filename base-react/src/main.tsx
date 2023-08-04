import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import { store } from "./app/store";
import persistor from "./app/store";
import './index.css'

import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
  </Provider>
);
