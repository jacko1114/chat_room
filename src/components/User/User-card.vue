<template>
  <div id="card">
    <img :src="photo" :alt="name" />
    <h4>{{name}}</h4>
    <small>{{introduction}}</small>
  </div>
</template>
<script>
export default {
  data() {
    return {
      photo: require("@/assets/men.png"),
      name: "Jacko Chen",
      introduction: "dsfsdfsdf"
    };
  }
};
</script>
<style lang='scss' scoped>
#card {
  margin: 20px;
  background: #333;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  border-radius: 5px;
  img {
    width: 80px;
    margin: 20px;
  }
  h4 {
    color: #fff;
    padding: 10px;
  }
  small {
    color: #ddd;
  }
}
</style>