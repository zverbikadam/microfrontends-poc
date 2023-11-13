import { createApp } from "vue";
import App from "./App";

const mount = (htmlElement) => {
  createApp(App).mount(htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-todo");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
