<template>
  <div id="create">
    <Search :title="title"></Search>
    <CreateTabs @changeTab="changeView(id = $event)"></CreateTabs>
    <component :is="view"></component>
    <CreateButton></CreateButton>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import CreateTabs from "@/components/Create/Create-tabs.vue";
import CreateDetail from "@/components/Create/Create-detail.vue";
import CreateFriend from "@/components/Create/Create-friend.vue";
import CreateButton from "@/components/Create/Create-button.vue";
export default {
  components: { Search, CreateTabs, CreateButton, CreateDetail, CreateFriend },
  data() {
    return {
      title: "創建群組",
      view: CreateDetail
    };
  },
  methods: {
    changeView(id) {
      this.view = id;
      console.log(this.view);
    }
  }
};
</script>
<style lang='scss' scoped>
#create {
  position: relative;
  background: #474444;
  height: 100vh;
  overflow-x: scroll;
  padding-bottom: 150px;
}
@media (min-width: 1024px) {
  #create {
    margin-left: 100px;
    padding-bottom: 80px;
    width: 450px;
  }
}
</style>