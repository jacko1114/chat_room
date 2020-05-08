<template>
  <div>
    <div class="content" v-for="(c,idx) in contents" :key="idx">
      <div class="img">
        <img src="c.img" alt />
      </div>
      <div class="outline">
        <div class="top">
          <p class="name">{{c.name}}</p>
          <span class="time">{{c.time}}</span>
        </div>
        <div class="bottom">
          <p>
            {{c.outline}}
            <span class="typing" v-for="(t,idx) in c.typing" :key="idx">{{t}}</span>
          </p>
        </div>
      </div>
      <span class="newmsg" v-if="c.isNew===true">{{c.new}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contents: [
        {
          img: "",
          name: "瀦碟",
          time: "10:33 am",
          outline: "騾至翔: ㄟ幹，多人運動被發現了....",
          isNew: true,
          new: 5
        },
        {
          img: "",
          name: "凱熱",
          time: "10:10 am",
          outline: "正在輸入",
          typing: [".", ".", "."],
          isNew: true,
          new: 3
        },
        {
          img: "",
          name: "123123",
          time: "10:07 am",
          outline: "Happp .....",
          isNew: true,
          new: 7
        },
        {
          img: "",
          name: "123123",
          time: "09:23 am",
          outline: "Happp .....",
          isNew: true,
          new: 1
        },
        {
          img: "",
          name: "123123",
          time: "09:22 am",
          outline: "Happp .....",
          isNew: true,
          new: 2
        },
        {
          img: "",
          name: "123123",
          time: "08:48 am",
          outline: "Happp .....",
          isNew: false,
          new: 0
        },
        {
          img: "",
          name: "123123",
          time: "07:38 am",
          outline: "Happp .....",
          isNew: false,
          new: 0
        },
        {
          img: "",
          name: "123123",
          time: "06:06 am",
          outline: "Happp .....",
          isNew: false,
          new: 0
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.content {
  width: calc(100% - 40px);
  padding: 10px;
  border-radius: 8px;
  background: #2e3031;
  margin: 20px;
  cursor: pointer;
  display: flex;
  position: relative;
  .img {
    flex: 2;
  }
  .outline {
    flex: 8;
    padding: 10px;
    .top {
      display: flex;
      justify-content: space-between;
      p {
        font-weight: 800;
        color: #ffffff;
      }
      span {
        color: #ddd;
        font-size: 13px;
      }
    }
    .bottom {
      p {
        color: #ddd;
      }
    }
    .typing {
      animation: typing 1.5s linear infinite;
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
    }
    @keyframes typing {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .newmsg {
    position: absolute;
    top: 0;
    right: 0;
    color: #ffffff;
    background: #1b6de9;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    font-size: 12px;
    text-align: center;
  }
}
</style>