<template>
  <div id="setting-social">
    <div class="setting-social">
      <div class="title">
        <div>
          <h3>{{title}}</h3>
          <small>{{subtitle}}</small>
        </div>
        <div>
          <i :class="icon"></i>
        </div>
      </div>
      <div v-for="(i,idx) in inputs" :key="idx" class="social">
        <label for>{{i.name}}</label>
        <div class="input">
          <input :type="i.type" :placeholder="i.content" />
          <i :class="i.icon"></i>
        </div>
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
      title: "社交",
      subtitle: "更新你的個人資訊",
      icon: "fas fa-link",
      inputs: [
        {
          name: "Twitter",
          type: "text",
          content: "帳號",
          icon: "fab fa-twitter"
        },
        {
          name: "Facebook",
          type: "text",
          content: "帳號",
          icon: "fab fa-facebook-f"
        },
        {
          name: "Instagram",
          type: "text",
          content: "帳號",
          icon: "fab fa-instagram"
        },
        {
          name: "Slack",
          type: "text",
          content: "帳號",
          icon: "fab fa-slack-hash"
        },
        {
          name: "Pinterset",
          type: "text",
          content: "帳號",
          icon: "fab fa-pinterest-p"
        }
      ],
      button: "存取設定"
    };
  }
};
</script>
<style lang='scss' scoped>
#setting-social {
  background: #333;
  overflow-y: scroll;
  .setting-social {
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
  .social {
    margin: 15px;
    border-radius: 5px;
    label {
      color: #ddd;
    }

    .input {
      display: flex;
      input {
        flex: 9;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        background: #474444;
        border: 0;
        outline: 0;
        padding: 10px 0 10px 10px;
        margin: 10px 0;
      }
      i {
        flex: 1;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        background: #474444;
        margin: 10px 0;
        color: #ddd;
        padding: 10px 0;
        text-align: center;
      }
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
  #setting-social {
    width: calc((100vw - 550px) / 2);
    float: left;
  }
}
</style>