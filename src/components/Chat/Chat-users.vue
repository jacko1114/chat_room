<template>
  <div class="users">
    <div class="user" v-for="(u,idx) in users" :key="idx">
      <img :src="u.photo" :alt="u.name" />
      <span>{{u.name}}</span>
      <span class="online" v-if="u.isOnline === true"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Chat-users",
  data() {
    return {
      users: [
        { name: "王大冬", photo: require("@/assets/men.png"), isOnline: true },
        { name: "騾至翔", photo: require("@/assets/men.png"), isOnline: true },
        {
          name: "州楊清",
          photo: require("@/assets/women.png"),
          isOnline: true
        },
        { name: "凱熱", photo: require("@/assets/women.png"), isOnline: true },
        { name: "洲截倫", photo: require("@/assets/men.png"), isOnline: false },
        { name: "坤林", photo: require("@/assets/women.png"), isOnline: false },
        {
          name: "菜一零",
          photo: require("@/assets/women.png"),
          isOnline: false
        },
        { name: "警龍", photo: require("@/assets/men.png"), isOnline: false }
      ]
    };
  }
};
</script>
<style lang='scss'>
.users {
  width: 90%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  overflow-x: scroll;
  margin: 0 auto;
  .user {
    width: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    span {
      color: #fff;
      font-size: 12px;
      margin-top: 10px;
    }
    .online {
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #75f81d;
      position: absolute;
      border: 2px solid #3b3b3b;
      bottom: 31%;
      right: -3%;
    }
  }
}
@media (min-width: 768px) {
  .users {
    .online {
      bottom: 35% !important;
      right: 23% !important;
    }
  }
}
@media (min-width: 1024px) {
  .users {
    .online {
      bottom: 31% !important;
      right: -3% !important;
    }
  }
}
</style>