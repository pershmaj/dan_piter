import Vue from "vue";
import App from "./app/App.vue";
import router from "./router";
import store from "./store";
import CompositionApi from "@vue/composition-api";
import bootstrap from "bootstrap";
import VueBootstrap from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(VueBootstrap);
Vue.use(CompositionApi);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
