<template>
  <div id="infos">
    <div class="contents" v-for="(i,idx) in infos" :key="idx">
      <div class="content">
        <small>{{i.name}}</small>
        <p>{{i.content}}</p>
      </div>
      <i :class="i.icon"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      infos: [
        { name: "國家", content: "台灣, 台北", icon: "fas fa-globe" },
        { name: "電話", content: "02 2787-6666", icon: "fas fa-microphone" },
        { name: "電郵", content: "j@gamil.com", icon: "far fa-envelope" },
        {
          name: "時間",
          content: "",
          icon: "fas fa-clock"
        }
      ]
    };
  },
  methods: {
    getTimeNow() {
      this.infos[3].content = `${new Date().getHours()} : ${
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes()
      }`;
    }
  },
  created() {
    this.getTimeNow();
  }
};
</script>
<style lang='scss' scoped>
#infos {
  margin: 20px;
  border-radius: 5px;
  background: #333;
  padding: 30px 20px;
  .contents {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(196, 196, 196, 0.2);
    .content {
      small {
        color: #ddd;
        margin: 5px 0;
      }
      p {
        color: #ddd;
      }
    }
    &:last-child {
      border-bottom: 0;
    }
    i {
      color: #ddd;
    }
  }
}
</style>