import Vue from "vue";
import App from "./app/App.vue";
import router from "./router";
import store from "./store";
import CompositionApi from "@vue/composition-api";
import bootstrap from "bootstrap";
import VueBootstrap from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
const math = require("mathjax");
import AceEditor from "vue-editor-ace";
import Scrollactive from "vue-scrollactive";
import Plugin from "vue-affix";
Vue.use(Scrollactive);
Vue.use(Plugin);
Vue.use(AceEditor);
Vue.use(VueBootstrap);
Vue.use(CompositionApi);

declare global {
    interface Window {
        MathJax: any;
    }
}
window.MathJax = math;

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
