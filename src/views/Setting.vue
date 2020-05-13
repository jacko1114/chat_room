<template>
  <div id="setting" :class="{'active':isClose}">
    <SettingHeader @close="closeMenu(close = $event);openMenu(open = $event)"></SettingHeader>
    <SettingAccount></SettingAccount>
    <SettingNotification></SettingNotification>
    <SettingSecurity></SettingSecurity>
    <SettingSocial></SettingSocial>
  </div>
</template>
<script>
import SettingHeader from "@/components/Setting/Setting-header.vue";
import SettingAccount from "@/components/Setting/Setting-account.vue";
import SettingSecurity from "@/components/Setting/Setting-security.vue";
import SettingSocial from "@/components/Setting/Setting-social.vue";
import SettingNotification from "@/components/Setting/Setting-notification.vue";
export default {
  components: {
    SettingHeader,
    SettingAccount,
    SettingSecurity,
    SettingSocial,
    SettingNotification
  },
  data() {
    return {
      isClose: false
    };
  },
  methods: {
    closeMenu(close) {
      this.isClose = close;
    },
    openMenu(open) {
      this.isClose = open;
    }
  }
};
</script>
<style lang='scss' scoped>
#setting {
  position: absolute;
  z-index: 900;
  transition: 0.3s ease;
  overflow-x: scroll;
  height: 100vh;
  &.active {
    transform: translateX(100%);
  }
}
@media (min-width: 1024px) {
  #setting {
    margin-bottom: 0;
    margin-left: 550px;
  }
}
</style>