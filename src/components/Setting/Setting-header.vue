<template>
  <div id="header" :class="{'active':isClose}">
    <button class="button" @click="isClose = true">
      <i :class="icon"></i>
    </button>
    <div>
      <h2>{{title}}</h2>
      <p>{{subtitle}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icon: "fas fa-arrow-left",
      title: "設定",
      subtitle: "更新你的個人資訊細節",
      isClose: false
    };
  }
};
</script>
<style lang='scss' scoped>
#header {
  position: absolute;
  &.active {
    left: 100%;
  }
}
</style>