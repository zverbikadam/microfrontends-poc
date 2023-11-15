import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (htmlElement: HTMLElement) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    htmlElement
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-smarthome");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };