import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@ui5/webcomponents-icons/dist/AllIcons";
import { ThemeProvider } from "@ui5/webcomponents-react";
import CustomRouter from "./components/router/CustomRouter";
import history from "./components/router/history";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CustomRouter history={history}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CustomRouter>
  </React.StrictMode>
);
