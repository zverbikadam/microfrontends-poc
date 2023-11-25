import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const mount = (
  htmlElement: HTMLElement,
  { onNavigate }: { onNavigate: ((pathname: string) => void) | undefined }
) => {

  const root = ReactDOM.createRoot(htmlElement);
  root.render(
    <React.StrictMode>
      <MemoryRouter initialEntries={["/smarthome/main"]}>
        <App onNavigate={onNavigate} />
      </MemoryRouter>
    </React.StrictMode>
  );

  return {
    onParentNavigate(pathname: string) {
      console.log("Smarthome noticed navigation from container:");
      console.log(pathname);
    }
  }
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-smarthome");
  if (devRoot) {
    mount(devRoot, { onNavigate: undefined });
  }
}

export { mount };
