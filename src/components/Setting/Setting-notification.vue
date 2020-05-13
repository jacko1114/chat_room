<template>
  <div id="setting-notification">
    <div class="setting-notification">
      <div class="title">
        <div>
          <h3>{{title}}</h3>
          <small>{{subtitle}}</small>
        </div>
        <div>
          <i :class="icon"></i>
        </div>
      </div>
      <div v-for="(i,idx) in inputs" :key="idx" class="notification">
        <div>
          <h3>{{i.name}}</h3>
          <small>{{i.content}}</small>
        </div>
        <div>
          <label class="checkbox" :class="{'active':i.isUpdate}">
            <input type="checkbox" />
            <span class="knob" @click="i.isUpdate = !i.isUpdate" />
            <span class="bg" />
          </label>
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
  data() {
    return {
      title: "通知",
      subtitle: "更新你的個人資訊",
      icon: "fas fa-bell",
      inputs: [
        { name: "音效", content: "更新資訊", isUpdate: true },
        { name: "訊息預覽", content: "更新資訊", isUpdate: true },
        { name: "顯示通知", content: "更新資訊", isUpdate: true }
      ],
      button: "存取設定"
    };
  }
};
</script>
<style lang='scss' scoped>
#setting-notification {
  background: #333;
  overflow-y: scroll;
  .setting-notification {
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
  .notification {
    margin: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    h3 {
      color: #fff;
      padding: 15px 0 0 15px;
    }
    small {
      color: #ddd;
      padding: 0 0 15px 15px;
    }
    .checkbox {
      position: relative;
      input {
        appearance: none;
      }
      .knob {
        display: inline-block;
        position: absolute;
        top: 32px;
        right: 20px;
        z-index: 3;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        background: #444;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
      }
      .bg {
        content: "";
        position: absolute;
        top: 150%;
        right: 0;
        z-index: 2;
        display: inline-block;
        width: 40px;
        height: 20px;
        border-radius: 10px;
        background: #646161;
      }
      &.active {
        .knob {
          right: 3px;
        }
        .bg {
          background: #948f8f;
        }
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
  #setting-notification {
    width: calc((100vw - 550px) / 2);
    margin-top: 64px;
    float: left;
  }
}
</style>