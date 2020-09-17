import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "./i18n";
import loading from "./directives/loading";

createApp(App)
  .use(router)
  .use(i18n)
  .directive("loading", loading)
  .mount("#app");
