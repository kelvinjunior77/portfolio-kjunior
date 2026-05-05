import { createRouter, createWebHistory, createWebHashHistory} from "vue-router";
import Home from "../pages/Home.vue";
//const lazyLoad = (view) => import(`../pages/${view}.vue`);
import Blogue from "../pages/Blogue.vue";
import Post_1 from "../pages/posts/Post_1.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

     {
        path: "/blogue",
        name: "Blogue",
        //component: lazyLoad("Blogue"),
        component: Blogue
     },
     {
        path: "/blogue/post-1",
        name: "Post_1",
        component: Post_1
     }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

/** Tive que comentar a linha do lazyLoad para que o componente Blogue carregasse no servidor, 
  na máquina local funciona perfeitamente. */