import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (htmlElement: HTMLElement | null) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    htmlElement
  );
}

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-shoppingList");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };