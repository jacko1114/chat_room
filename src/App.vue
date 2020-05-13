<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="main-view">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <div :is="view" class="main-right" @click="openMenu()"></div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import Setting from "@/views/Setting";

export default {
  name: "app",
  components: {
    Navbar,
    Setting
  },
  data() {
    return {
      view: "Setting"
    };
  },
  methods: {
    openMenu() {
      this.$emit("open", false);
    }
  }
};
</script>
<style lang="scss">
$blue: #1b6de9;
$white: #fff;
$light: #ddd;
$dark: #333;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Microsoft Jhenghei";
  ::-webkit-scrollbar {
    display: none;
  }
  .main-view {
    display: flex;
    background: #333;
    height: 100vh;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave,
  .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.1s ease-in;
  }
}
</style>
