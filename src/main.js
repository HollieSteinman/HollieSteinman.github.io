import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueKatex from '@hsorby/vue3-katex';

createApp(App)
    .use(store)
    .use(router)
    .use(VueKatex)
    .mount("#app");
