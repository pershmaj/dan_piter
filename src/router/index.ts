import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../pages/welcome/App.vue")
    },
    {
        path: "/welcome/:version",
        component: () => import("../pages/welcome/App.vue")
    },
    {
        path: "/info",
        component: () => import("../pages/info/App.vue")
    },
    {
        path: "/view",
        component: () => import("../pages/view/App.vue")
    },
    {
        path: "/result",
        component: () => import("../pages/result/App.vue")
    },
    {
        path: "/personal",
        component: () => import("../pages/personal/App.vue")
    },
    {
        path: "/finish",
        component: () => import("../pages/finish/App.vue")
    },
];

const router = new VueRouter({
//    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
