import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "animate.css";

import FontAwesomeIcon from "./fontawesome-icons";

import "./assets/main.css";

const app = createApp(App);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
