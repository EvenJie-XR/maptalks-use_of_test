import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: '/3dtiles'
        },
        {
            path: "/3dtiles",
            name: "3dtiles",
            component: () => import("../pages/ThreeDTiles.vue"),
        }
    ],
})