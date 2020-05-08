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
    components: { left: Home, Right: Setting },
  },
  {
    path: "/create",
    name: "Create",
    components: { Left: Create, Right: Setting },
  },
  {
    path: "/friend",
    name: "Friend",
    components: { Left: Friend, Right: Setting },
  },
  {
    path: "/chat",
    name: "Chat",
    components: { Left: Chat, Right: Setting },
  },
  {
    path: "/user",
    name: "User",
    components: { Left: User, Right: Setting },
  },
  {
    path: "/setting",
    name: "Setting",
    components: { Left: Create, Right: Setting },
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
});

export default router;
