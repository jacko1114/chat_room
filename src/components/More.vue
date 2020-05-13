<template>
  <div id="more">
    <div class="more">
      <i :class="icon" @click="isOpen = !isOpen"></i>
    </div>
    <div class="more-detail" :class="{'active': isOpen}">
      <button v-for="(b,idx) in buttons" :key="idx" @click="isOpen = false">
        <span>{{b.name}}</span>
        <i :class="b.icon"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      icon: "fas fa-ellipsis-v",
      buttons: [
        { name: "撰寫訊息", icon: "fas fa-pen" },
        { name: "刪除", icon: "far fa-trash-alt" }
      ]
    };
  },
  created() {
    let self = this;
    window.addEventListener("click", e => {
      if (!self.$el.contains(e.target)) {
        this.isOpen = false;
      }
    });
  }
};
</script>
<style lang='scss' scoped>
#more {
  position: relative;
  .more {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .fa-ellipsis-v {
      color: #ddd;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        color: #bbb;
      }
    }
  }
  .more-detail {
    position: absolute;
    background: #333;
    z-index: 2;
    top: 20px;
    right: -30px;
    width: 140px;
    border-radius: 5px;
    box-shadow: 0 0 20px #222;
    display: none;
    button {
      display: flex;
      justify-content: space-between;
      width: calc(100% - 10px);
      color: #fff;
      background: #333;
      padding: 10px;
      border-radius: 5px;
      margin: 5px;
      outline: 0;
      border: 0;
      letter-spacing: 3px;
      font-size: 13px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background: rgba(60, 60, 60, 0.8);
      }
    }
    &.active {
      display: block;
    }
  }
}
</style>