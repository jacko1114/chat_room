<template>
  <div id="create-details">
    <div v-for="(i,idx) in inputs" :key="idx" class="create-detail">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputs: [
        {
          name: "相片",
          type: "file",
          content: "你可上傳 .jpg, .gif, 或 .png 檔，最大容量 3 Mb"
        },
        { name: "名稱", type: "text", content: "群組名稱" },
        { name: "主題(選填)", type: "text", content: "為群組設定個主題吧!" },
        { name: "描述", type: "textarea", content: "對新群組加些描述..." }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
#create-details {
  .create-detail {
    margin: 15px;
    label {
      color: #ddd;
    }
    input,
    textarea {
      width: 100%;
      border-radius: 5px;
      background: #333;
      border: 0;
      outline: 0;
      padding: 10px 0 10px 10px;
      margin: 10px 0;
    }
    textarea {
      height: 300px;
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
      background: #333;
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
    &:nth-child(2) {
      margin-top: 150px;
    }
  }
}
</style>