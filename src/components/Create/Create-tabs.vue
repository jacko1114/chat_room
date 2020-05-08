<template>
  <div id="create-tabs">
    <a
      href="javascript:;"
      :class="{'active':t.active}"
      v-for="(t,idx) in tabs"
      :key="idx"
      @click="changeTab(t.id),activeTab(idx)"
    >{{t.name}}</a>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      tabs: [
        { name: "詳細", id: "CreateDetail", active: true },
        { name: "好友", id: "CreateFriend", active: false }
      ]
    };
  },
  methods: {
    activeTab(idx) {
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].active = false;
        this.tabs[idx].active = true;
      }
    },
    changeTab(id) {
      this.$emit("changeTab", id);
    }
  }
};
</script>
<style lang='scss' scoped>
#create-tabs {
  margin: 0 20px;
  height: 60px;
  border-radius: 5px;
  background: #1f2225;
  display: flex;
  a {
    text-decoration: none;
    width: 100%;
    text-align: center;
    color: #ddd;
    line-height: 60px;
    border-radius: 5px;
    &:first-child {
      margin: 5px 0 5px 8px;
    }
    &:last-child {
      margin: 5px 8px 5px 0;
    }
    &:hover {
      color: #fff;
    }
    &.active {
      background: #333;
      color: #fff;
    }
  }
}
</style>