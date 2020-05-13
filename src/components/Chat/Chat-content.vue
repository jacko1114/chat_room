<template>
  <div>
    <div class="content" v-for="(c,idx) in contents" :key="idx">
      <div class="img-group" v-if="c.img.length > 1">
        <img :src="i" alt="c.name" v-for="(i,idx) in c.img" :key="idx" />
      </div>
      <div class="img" v-else>
        <img :src="c.img" alt="c.name" />
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
          img: [require("@/assets/men.png"), require("@/assets/women.png")],
          name: "瀦碟",
          time: "10:33 am",
          outline: "騾至翔: ㄟ幹，多人運動被發現了....",
          isNew: true,
          new: 5
        },
        {
          img: [require("@/assets/women.png")],
          name: "凱熱",
          time: "10:10 am",
          outline: "正在輸入",
          typing: [".", ".", "."],
          isNew: true,
          new: 3
        },
        {
          img: [require("@/assets/men.png")],
          name: "騾至翔",
          time: "10:07 am",
          outline: "騾至翔: 在嗎?",
          isNew: true,
          new: 7
        },
        {
          img: [require("@/assets/women.png")],
          name: "州楊清",
          time: "09:23 am",
          outline: "州楊清: 我聞到一股狐臭味!",
          isNew: true,
          new: 1
        },
        {
          img: [require("@/assets/men.png")],
          name: "洲截倫",
          time: "09:22 am",
          outline: "洲截倫: 我老婆有來找過你嗎?",
          isNew: true,
          new: 2
        },
        {
          img: [require("@/assets/women.png")],
          name: "坤林",
          time: "08:48 am",
          outline: "坤林: 我老公又跑去支國 Online 大撒避，受不了了!!!!",
          isNew: false,
          new: 0
        },
        {
          img: [require("@/assets/women.png")],
          name: "菜一零",
          time: "07:38 am",
          outline: "菜一零現在與您成為朋友",
          isNew: false,
          new: 0
        },
        {
          img: [require("@/assets/men.png")],
          name: "警龍",
          time: "06:06 am",
          outline: "警龍現在與您成為朋友",
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
  .img,
  .img-group {
    flex: 2;
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50px;
    }
  }
  .img-group {
    position: relative;
    img {
      width: 50px;
      &:nth-child(2) {
        border: 5px solid #333;
        border-radius: 50%;
        position: absolute;
        right: -3px;
        width: 60px;
      }
    }
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