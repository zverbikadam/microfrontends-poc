import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@ui5/webcomponents-icons/dist/AllIcons";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);