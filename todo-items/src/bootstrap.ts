import { createApp } from "vue";
import App from "./App.vue";

const mount = (htmlElement: HTMLElement) => {
  createApp(App).mount(htmlElement);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("dev-todo");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
