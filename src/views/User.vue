<template>
  <div id="user">
    <Search :title="title"></Search>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
export default {
  components: { Search },
  data() {
    return { title: "個人檔案" };
  }
};
</script>
<style lang='scss' scoped>
#user {
  background: #474444;
  height: 100vh;
  overflow-x: scroll;
  margin-bottom: 80px;
}
@media (min-width: 1024px) {
  #user {
    margin-left: 100px;
    margin-bottom: 0;
    width: 450px;
  }
}
</style>