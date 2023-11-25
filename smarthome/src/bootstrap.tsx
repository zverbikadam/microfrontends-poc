import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const mount = (
  htmlElement: HTMLElement,
  { onNavigate }: { onNavigate: ((pathname: string) => void) | undefined }
) => {
  ReactDOM.render(
    <React.StrictMode>
      <MemoryRouter initialEntries={["/smarthome/main"]}>
        <App onNavigate={onNavigate} />
      </MemoryRouter>
    </React.StrictMode>,
    htmlElement
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-smarthome");
  if (devRoot) {
    mount(devRoot, { onNavigate: undefined });
  }
}

export { mount };
