<template>
  <div id="friend">
    <Search :title="title"></Search>
    <FriendInvite></FriendInvite>
    <FriendList></FriendList>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import FriendInvite from "@/components/Friend/Friend-invite.vue";
import FriendList from "@/components/Friend/Friend-list.vue";
export default {
  components: { Search, FriendInvite, FriendList },
  data() {
    return { title: "好友" };
  }
};
</script>
<style lang='scss' scoped>
#friend {
  width: 100vw;
  z-index: 900;
  background: #474444;
  height: 100vh;
  margin-bottom: 80px;
  overflow-y: scroll;
}
@media (min-width: 1024px) {
  #friend {
    margin-left: 100px;
    margin-bottom: 0;
    width: 450px;
    z-index: 901;
  }
}
</style>