import router from "./router/index";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import VueVirtualScroller from "vue-virtual-scroller";
// import { RecycleScroller } from "vue-virtual-scroller";
// import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const app = createApp(App);

app.use(router);
app.use(Toast);
// app.use(VueVirtualScroller);
// app.component("RecycleScroller", RecycleScroller);

app.mount("#app");
