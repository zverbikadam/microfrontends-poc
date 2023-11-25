import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mount = (htmlElement: HTMLElement) => {
  const root = ReactDOM.createRoot(htmlElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-welcomePage");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };