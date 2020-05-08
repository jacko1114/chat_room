<template>
  <div id="setting">
    <SettingHeader></SettingHeader>
  </div>
</template>
<script>
import SettingHeader from "@/components/Setting/Setting-header.vue";
export default {
  components: { SettingHeader },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
#setting {
  position: absolute;
}
@media (min-width: 1024px) {
  #setting {
    margin-bottom: 0;
  }
}
</style>