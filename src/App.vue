<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="main-view">
      <transition name="fade" mode="out-in">
        <router-view class="left" name="Left"></router-view>
      </transition>
      <router-view class="right" name="Right"></router-view>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";

export default {
  name: "app",
  components: {
    Navbar
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
    position: relative;
  }
  .left {
    width: 100vw;
  }
  .right {
    width: 100vw;
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
