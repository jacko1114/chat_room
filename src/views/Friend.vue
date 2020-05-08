<template>
  <div id="friend">
    <Search :title="title"></Search>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
export default {
  components: { Search },
  data() {
    return { title: "好友" };
  }
};
</script>
<style lang='scss' scoped>
#friend {
  background: #474444;
  height: 100vh;
  overflow-x: scroll;
  margin-bottom: 80px;
}
@media (min-width: 1024px) {
  #friend {
    margin-left: 100px;
    margin-bottom: 0;
    width: 450px;
  }
}
</style>