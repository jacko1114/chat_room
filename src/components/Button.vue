<template>
  <div id="button">
    <button>{{name}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return { name: "創建群組" };
  }
};
</script>
<style lang='scss' scoped>
#button {
  position: fixed;
  bottom: 80px;
  width: 100%;
  height: 70px;
  background: #474444;
  button {
    display: block;
    width: calc(100% - 40px);
    color: #fff;
    background: #1b6de9;
    padding: 15px;
    border-radius: 5px;
    outline: 0;
    border: 0;
    margin: 0 20px;
    letter-spacing: 3px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: #0c56c5;
    }
  }
}
@media (min-width: 1024px) {
  #button {
    bottom: 0;
    width: 450px;
  }
}
</style>