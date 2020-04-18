
import Vue from "vue";

// @ts-ignore
import AceEditor from 'vue-editor-ace';
// @ts-ignore
import Scrollactive from "vue-scrollactive";
// @ts-ignore
import Plugin from "vue-affix";

Vue.use(Scrollactive);
Vue.use(Plugin);
Vue.use(AceEditor);

const math = require("mathjax");

declare global {
    interface Window {
        MathJax: any;
    }
}
window.MathJax = math;



import { createComponent, reactive, toRefs, onMounted, ref, watch } from "@vue/composition-api";
import version1 from "../version1/App.vue";
import version2 from "../version2/App.vue";
import version3 from "../version3/App.vue";
import version4 from "../version4/App.vue";
import version5 from "../version5/App.vue";
import version6 from "../version6/App.vue";

export default createComponent({
    components: {
        version1,
        version2,
        version3,
        version4,
        version5,
        version6
    },
    setup(props, ctx) {
        const s = reactive({
            version: "1"
        });

        return { ...toRefs(s) };
    }
});