import { createApp } from "vue"; // 來自套件
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue"; // 來自src
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia()); // 使用套件; 只有vue套件可以直接這樣放不用import
app.use(router);
app.use(VueAxios, axios);

app.component("VueLoading");

app.mount("#app");
