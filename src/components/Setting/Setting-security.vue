<template>
  <div id="setting-security">
    <div class="setting-security">
      <div class="title">
        <div>
          <h3>{{title}}</h3>
          <small>{{subtitle}}</small>
        </div>
        <div>
          <i :class="icon"></i>
        </div>
      </div>
      <div v-for="(i,idx) in inputs" :key="idx" class="security">
        <label for>{{i.name}}</label>
        <input :type="i.type" :placeholder="i.content" />
      </div>
      <div>
        <button class="button">{{button}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      title: "安全性",
      subtitle: "更新你的個人資訊",
      icon: "fas fa-shield-alt",
      inputs: [
        { name: "當前密碼", type: "password", content: "當前密碼" },
        { name: "新密碼", type: "password", content: "新密碼" },
        { name: "確認密碼", type: "password", content: "確認密碼" }
      ],
      button: "存取設定"
    };
  }
};
</script>
<style lang='scss' scoped>
#setting-security {
  background: #333;
  overflow-y: scroll;
  .setting-security {
    background: #333;
    margin: 15px;
    border-radius: 10px;
    border: 1px solid #555;
  }
  .title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #555;
    h3 {
      color: #fff;
      padding: 15px 0 0 15px;
    }
    small {
      color: #ddd;
      padding: 0 0 15px 15px;
    }
    i {
      color: #fff;
      padding: 45px 30px 15px 0;
    }
  }
  .security {
    margin: 15px;
    border-radius: 5px;
    label {
      color: #ddd;
    }
    input {
      width: 100%;
      border-radius: 5px;
      background: #474444;
      border: 0;
      outline: 0;
      padding: 10px 0 10px 10px;
      margin: 10px 0;
    }
  }
  .button {
    margin: 30px 20px;
    width: calc(100% - 40px);
    background: #1b6de9;
    padding: 16px;
    color: #fff;
    border-radius: 3px;
    outline: 0;
    border: 0;
    letter-spacing: 3px;
    cursor: pointer;
  }
}
@media (min-width: 1024px) {
  #setting-security {
    width: calc((100vw - 550px) / 2);
    float: left;
  }
}
</style>