import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@ui5/webcomponents-icons/dist/AllIcons";
import { ThemeProvider } from '@ui5/webcomponents-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);