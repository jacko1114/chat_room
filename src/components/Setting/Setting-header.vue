<template>
  <div id="header">
    <button class="button" @click="closeMenu">
      <i :class="icon"></i>
    </button>
    <div class="title">
      <h2>{{title}}</h2>
      <p>{{subtitle}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["close"],
  data() {
    return {
      icon: "fas fa-arrow-left",
      title: "設定",
      subtitle: "更新你的個人資訊細節",
      isClose: false
    };
  },
  methods: {
    closeMenu() {
      this.$emit("close", true);
    }
  }
};
</script>
<style lang='scss' scoped>
#header {
  position: fixed;
  display: flex;
  border-bottom: 1px solid #555;
  background: #333;
  width: 100%;
  padding-bottom: 10px;
  z-index: 1000;
  &.active {
    left: 100%;
  }
  .button {
    flex: 1;
    outline: 0;
    background: transparent;
    border: 0;
    cursor: pointer;
    i {
      color: #ddd;
      padding-top: 10px;
    }
  }
  .title {
    flex: 8;
    text-align: center;
    h2 {
      color: #fff;
    }
    p {
      color: #ddd;
    }
  }
}
@media (min-width: 1024px) {
  #header {
    width: calc(100% - 550px);
    .button {
      display: none;
    }
  }
}
</style>