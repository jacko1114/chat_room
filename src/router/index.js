import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Friend from "../views/Friend.vue";
import Chat from "../views/Chat.vue";
import User from "../views/User.vue";
import Setting from "../views/Setting.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/friend",
    name: "Friend",
    component: Friend,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/setting",
    name: "Setting",
    component: { Setting },
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes,
});

export default router;
