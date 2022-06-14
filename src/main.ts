import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HelloWorld,
    },

    {
      path: "/dynamic",
      component: () => import("./components/DynamicPage.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
