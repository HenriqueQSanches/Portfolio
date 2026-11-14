import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// API do React 18 (a antiga ReactDOM.render fazia o app rodar como React 17)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
