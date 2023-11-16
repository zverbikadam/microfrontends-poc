import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@ui5/webcomponents-icons/dist/AllIcons";
import { ThemeProvider } from '@ui5/webcomponents-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);