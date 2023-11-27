import { Update } from "history";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CustomRouter from "./components/router/CustomRouter";
import history from "./components/router/history";

interface Callbacks {
  onNavigate: (({ location }: Update) => void) | undefined;
}

const mount = (htmlElement: HTMLElement, { onNavigate }: Callbacks) => {
  if (onNavigate) {
    // smarthome -> container communication
    history.listen((update: Update) => {
      onNavigate(update);
    });
  }

  const root = ReactDOM.createRoot(htmlElement);
  root.render(
    <React.StrictMode>
      <CustomRouter history={history}>
        <App />
      </CustomRouter>
    </React.StrictMode>
  );

  return {
    // container -> smarthome communication
    onParentNavigate({ location }: Update) {
      console.log("Smarthome noticed navigation inside container.");
      const firstIndex = location.pathname.indexOf("/");
      const lastIndex = location.pathname.lastIndexOf("/");
      let pathname: string;
      if (firstIndex < lastIndex) {
        pathname = location.pathname.substring(lastIndex);
      } else {
        pathname = "/";
      }
      if (history.location.pathname != pathname) {
        history.push(pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-smarthome");
  if (devRoot) {
    mount(devRoot, { onNavigate: undefined });
  }
}

export { mount };
