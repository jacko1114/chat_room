<template>
  <div class="nav">
    <div class="logo">
      <router-link :to="{path:'/'}">
        <i :class="logo.icon"></i>
      </router-link>
    </div>
    <div class="menu">
      <router-link :to="{path:'/' + m.name}" v-for="(m,idx) in menus" :key="idx">
        <i :class="m.icon">
          <span class="msg" v-if="m.isMsg === true" />
        </i>
      </router-link>
    </div>
    <div class="setting">
      <router-link :to="{path:'/' + setting.name}">
        <i :class="setting.icon"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logo: { name: "logo", icon: "fas fa-dragon" },
      menus: [
        { name: "create", icon: "far fa-plus-square" },
        { name: "friend", icon: "fas fa-user-friends" },
        { name: "chat", icon: "fas fa-comment-dots", isMsg: true },
        { name: "user", icon: "fas fa-user" }
      ],
      setting: { name: "setting", icon: "fas fa-cog" }
    };
  }
};
</script>
<style lang="scss">
.nav {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 80px;
  z-index: 10;
  background: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 50px;
    height: 50px;
    color: #fff;
    text-decoration: none;
    i {
      font-size: 30px;
      width: 30px;
      height: 30px;
      transition: 0.3s ease;
    }
    &.active {
      i {
        color: #1b6de9;
      }
    }
    &:hover {
      i {
        color: #1b6de9;
      }
    }
  }
  .logo {
    display: none;
  }
  .menu {
    flex: 9;
    display: flex;
    justify-content: space-around;
    .fa-comment-dots {
      position: relative;
      .msg {
        position: absolute;
        bottom: -50%;
        right: 40%;
        width: 10px;
        height: 10px;
        background: #1b6de9;
        border-radius: 50%;
      }
    }
  }
  .setting {
    flex: 1;
    padding-left: 5%;
    padding-right: 2%;
  }
}
@media (min-width: 1024px) {
  .nav {
    width: 100px;
    height: 100vh;
    background: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .logo {
      display: block;
      width: 100%;
      height: 50px;
      padding: 25px 0 0 25px;
      flex: 1;
      i {
        font-size: 30px;
        width: 30px;
        height: 30px;
        color: #fff;
      }
    }
    .menu {
      width: 100%;
      padding: 25px 0 0 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      flex: 10;
      i {
        font-size: 30px;
        width: 30px;
        height: 30px;
        color: #fff;
      }
    }
    .setting {
      flex: 1;
      width: 100%;
      height: 50px;
      padding: 25px 0 0 30px;
      i {
        font-size: 30px;
      }
    }
  }
}
</style>
