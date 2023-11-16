import { createMemoryHistory } from "history";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './App';

const mount = (htmlElement: HTMLElement, { onNavigate }: { onNavigate: () => void }) => {

  const history = createMemoryHistory();

  history.listen(() => { 
    onNavigate();
   });

  ReactDOM.render(
    <React.StrictMode>
      <Router location={history.location} navigator={history} >
        <App />
      </Router >
    </React.StrictMode>,
    htmlElement
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-smarthome");
  if (devRoot) {
    mount(devRoot, { onNavigate: () => { } });
  }
}

export { mount };
