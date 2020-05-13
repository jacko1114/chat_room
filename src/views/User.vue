<template>
  <div id="user">
    <Search :title="title"></Search>
    <UserCard></UserCard>
    <UserInfo></UserInfo>
    <UserLogout></UserLogout>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import UserCard from "@/components/User/User-card.vue";
import UserInfo from "@/components/User/User-info.vue";
import UserLogout from "@/components/User/User-logout.vue";
export default {
  components: { Search, UserCard, UserInfo, UserLogout },
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
  width: 100vw;
  position: relative;
  z-index: 500;
}
@media (min-width: 1024px) {
  #user {
    margin-left: 100px;
    margin-bottom: 0;
    width: 450px;
  }
}
</style>