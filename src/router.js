import Vue from "vue";
import Router from "vue-router";
import JigsawPuzzle from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "jigsaw",
      component: Jigsaw
    }
  ]
});
