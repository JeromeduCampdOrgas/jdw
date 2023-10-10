import { createApp, watch } from "vue";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index";
import "animate.css";

import FontAwesomeIcon from "./fontawesome-icons";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(pinia);
app.use(router);

app.mount("#app");
