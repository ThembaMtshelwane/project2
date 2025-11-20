import router from "./router/index";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "primeicons/primeicons.css";
import Toast from "vue-toastification";

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount("#app");
