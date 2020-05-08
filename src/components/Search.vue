<template>
  <div class="search">
    <h2>{{title}}</h2>
    <div class="input-group">
      <input type="text" :placeholder="input.content" />
      <button>
        <i :class="input.icon"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  props: ["title"],
  data() {
    return {
      input: { content: "搜尋詢內容或使用者...", icon: "fas fa-search" }
    };
  }
};
</script>
<style lang='scss' scoped>
h2 {
  font-size: 30px;
  padding: 25px 0 0 25px;
  color: #fff;
}
.input-group {
  display: flex;
  input {
    padding: 18px 10px 20px 10px;
    margin: 20px 0 20px 20px;
    flex: 7;
    height: 56px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border: 0;
    background: #1f2225;
    color: #fff;
    position: relative;
    &:focus {
      outline: 0;
    }
    &::placeholder {
      color: #fff;
      letter-spacing: 2px;
    }
  }
}
button {
  margin: 20px 20px 20px 0;
  background: #1f2225;
  border: 0;
  outline: 0;
  padding: 20px;
  flex: 1;
  height: 56px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  i {
    font-size: 18px;
    color: #fff;
  }
}
</style>