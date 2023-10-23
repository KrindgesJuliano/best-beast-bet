import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@unocss/reset/normalize.css';
import './index.css';
import 'virtual:uno.css';
import GlobalContext from './context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <App />
    </GlobalContext>
  </React.StrictMode>
);
