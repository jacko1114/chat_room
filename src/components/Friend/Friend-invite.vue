<template>
  <div id="friend-invite-button">
    <button @click="isOpen = true">
      <span>{{button.name}}</span>
      <i :class="button.icon"></i>
    </button>
    <div class="popup-background" :class="{'active':isOpen}" @click.self="isOpen = false">
      <div class="popup">
        <div class="modal-head">
          <i :class="pop.logo"></i>
          <div class="title">
            <h4>{{pop.main}}</h4>
            <small>{{pop.sub}}</small>
          </div>
          <i :class="pop.close" @click="isOpen = false"></i>
        </div>
        <div class="modal-body" v-for="(i,idx) in pop.inputs" :key="idx">
          <label :for="i">{{i}}</label>
          <input type="text" />
        </div>
        <div class="modal-footer">
          <button>
            <span>{{pop.button.name}}</span>
            <i :class="pop.button.icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      button: { name: "邀請朋友", icon: "fas fa-user-friends" },
      pop: {
        logo: "fas fa-user-friends",
        main: "邀請朋友",
        sub: "盡管邀請同事、客戶以及友人",
        close: "fas fa-times",
        inputs: ["Email", "邀請訊息"],
        button: { name: "邀請朋友", icon: "fas fa-user-plus" }
      }
    };
  }
};
</script>
<style lang='scss' scoped>
#friend-invite-button {
  bottom: 80px;
  width: 100%;
  height: 70px;
  background: #474444;
  button {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 40px);
    color: #fff;
    background: #333;
    padding: 15px;
    border-radius: 5px;
    outline: 0;
    border: 0;
    margin: 0 20px;
    letter-spacing: 3px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: #222;
    }
  }
  .popup-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(48, 47, 47, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    z-index: 3000;
    .popup {
      width: 90%;
      background: #424242;
      border-radius: 5px;
      transition: 0.3s ease-in;
      transform: translateY(-100%);
      .modal-head {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding-bottom: 20px;
        border-bottom: 1px solid #505050;
        width: 100%;
        .fa-user-friends {
          width: 40px;
          height: 40px;
          border-radius: 5px;
          background: #0c56c5;
          line-height: 40px;
          text-align: center;
          color: #fff;
          margin: 20px 0 0 30px;
        }
        .title {
          padding: 20px 130px 0 0;
          h4 {
            color: #fff;
          }
          small {
            color: #ddd;
          }
        }
        .fa-times {
          cursor: pointer;
          margin: 20px 30px 0 0;
          color: #bbb;
          &:hover {
            color: #ddd;
          }
        }
      }
      .modal-body {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 20px;
        label {
          padding: 10px 0;
          color: #ddd;
        }
        input {
          border-radius: 5px;
          outline: 0;
          border: 0;
          padding: 10px;
        }
      }
      .modal-footer {
        button {
          margin: 20px;
          background: #0c56c5;
          &:hover {
            background: #0f62dd;
          }
        }
      }
    }
    &.active {
      opacity: 1;
      visibility: visible;
      .popup {
        animation: pop 0.5s forwards;
      }
      @keyframes pop {
        0% {
          transform: translateY(-100%);
          opacity: 0;
        }
        33% {
          opacity: 0;
        }
        80% {
          opacity: 0.5;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  #button {
    width: 450px;
  }
  .popup {
    width: 40% !important;
  }
}
</style>