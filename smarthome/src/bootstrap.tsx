import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CustomRouter from "./components/router/CustomRouter";
import history from "./components/router/history";
import { Update } from "history";

const mount = (
  htmlElement: HTMLElement,
  { onNavigate }: { onNavigate: ({ location }: Update) => void }
) => {
  history.listen((update: Update) => {
    onNavigate(update);
  });

  const root = ReactDOM.createRoot(htmlElement);
  root.render(
    <React.StrictMode>
      <CustomRouter history={history}>
        <App />
      </CustomRouter>
    </React.StrictMode>
  );

  return {
    onParentNavigate(pathname: string) {
      console.log("Smarthome noticed navigation from container:");
      console.log(pathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-smarthome");
  if (devRoot) {
    mount(devRoot, { onNavigate: () => {} });
  }
}

export { mount };
