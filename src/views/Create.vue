<template>
  <div id="create">
    <Search :title="title"></Search>
    <CreateTabs @changeTab="changeView(id = $event)"></CreateTabs>
    <component :is="view"></component>
    <AppButton></AppButton>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import CreateTabs from "@/components/Create/Create-tabs.vue";
import CreateDetail from "@/components/Create/Create-detail.vue";
import CreateFriend from "@/components/Create/Create-friend.vue";
import Button from "@/components/Button.vue";
export default {
  components: {
    Search,
    CreateTabs,
    AppButton: Button,
    CreateDetail,
    CreateFriend
  },
  data() {
    return {
      title: "創建群組",
      view: CreateDetail
    };
  },
  methods: {
    changeView(id) {
      this.view = id;
    }
  }
};
</script>
<style lang='scss' scoped>
#create {
  width: 100vw;
  position: relative;
  z-index: 500;
  background: #474444;
  height: 100vh;
  overflow-x: scroll;
}
@media (min-width: 1024px) {
  #create {
    margin-left: 100px;
    padding-bottom: 80px;
    width: 450px;
  }
}
</style>