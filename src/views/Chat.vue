<template>
  <div id="chat">
    <Search :title="title"></Search>
    <ChatUsers></ChatUsers>
    <ChatContent></ChatContent>
  </div>
</template>
<script>
import Search from "@/components/Search.vue";
import ChatUsers from "@/components/Chat/Chat-users.vue";
import ChatContent from "@/components/Chat/Chat-content.vue";

export default {
  components: {
    Search,
    ChatUsers,
    ChatContent
  },
  data() {
    return {
      title: "聊天室"
    };
  }
};
</script>
<style lang='scss'>
#chat {
  background: #474444;
  height: 100vh;
  overflow-x: scroll;
  margin-bottom: 80px;
}
@media (min-width: 1024px) {
  #chat {
    margin-left: 100px;
    margin-bottom: 0;
    width: 450px;
  }
}
</style>