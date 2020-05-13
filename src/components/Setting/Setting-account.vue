<template>
  <div id="setting-account">
    <div class="setting-account">
      <div class="title">
        <div>
          <h3>{{title}}</h3>
          <small>{{subtitle}}</small>
        </div>
        <div>
          <i :class="icon"></i>
        </div>
      </div>
      <div v-for="(i,idx) in inputs" :key="idx" class="account">
        <label :for="i.type" v-if="i.type === 'file'" class="file">
          {{i.name}}
          <input :type="i.type" :id="i.type" />
          <div class="upload-file">
            <i class="fas fa-image"></i>
            {{i.content}}
          </div>
        </label>
        <label for v-if="i.type !== 'file'">{{i.name}}</label>
        <input
          :type="i.type"
          :placeholder="i.content"
          v-if="i.type !== 'textarea' && i.type !== 'file'"
        />
        <textarea v-if="i.type === 'textarea'" :placeholder="i.content"></textarea>
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
      title: "帳號",
      subtitle: "更新你的個人資訊",
      icon: "fas fa-user",
      inputs: [
        {
          name: "相片",
          type: "file",
          content: "你可上傳 .jpg, .gif, 或 .png 檔，最大容量 3 Mb"
        },
        { name: "名稱", type: "text", content: "輸入你的名稱" },
        { name: "電話", type: "text", content: "(02) 123 - 123" },
        { name: "電郵", type: "text", content: "you@yoursite.com" },
        { name: "描述", type: "textarea", content: "為自己加註描述..." }
      ],
      button: "存取設定"
    };
  }
};
</script>
<style lang='scss' scoped>
#setting-account {
  width: 100vw;
  margin-top: 64px;
  background: #333;
  overflow-y: scroll;
  .setting-account {
    width: calc(100% - 30px);
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
  .account {
    margin: 15px;
    border-radius: 5px;
    &:nth-child(3) {
      margin-top: 150px;
    }
    label {
      color: #ddd;
    }
    input,
    textarea {
      width: 100%;
      border-radius: 5px;
      background: #474444;
      border: 0;
      outline: 0;
      padding: 10px 0 10px 10px;
      margin: 10px 0;
    }
    textarea {
      height: 150px;
    }
    input[type="file"] {
      visibility: hidden;
    }
    .file {
      position: relative;
      cursor: pointer;
    }
    .upload-file {
      position: absolute;
      top: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #474444;
      border-radius: 5px;
      color: #bbb;
      padding: 40px 0;
      width: 100%;
      i {
        font-size: 30px;
        padding: 15px 0 0 15px;
        margin: 10px 0;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        color: #fff;
        background: #1b6de9;
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
  #setting-account {
    width: calc((100vw - 550px) / 2);
    float: left;
  }
}
</style>