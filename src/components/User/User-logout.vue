<template>
  <div id="logout-button">
    <button>
      <span>{{button.name}}</span>
      <i :class="button.icon"></i>
    </button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      button: { name: "登出", icon: "fas fa-sign-out-alt" }
    };
  }
};
</script>
<style lang='scss' scoped>
#logout-button {
  bottom: 80px;
  width: 100%;
  height: 70px;
  background: #474444;
  button {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 40px);
    color: #fff;
    background: #333;
    padding: 15px;
    border-radius: 5px;
    outline: 0;
    border: 0;
    margin: 0 20px;
    letter-spacing: 3px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: #222;
    }
  }
}
</style>