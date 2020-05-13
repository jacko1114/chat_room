<template>
  <div id="create-friend">
    <div class="friends" v-for="(l,idx) in lists" :key="idx">
      <p>{{l.Zhuyin}}</p>
      <div class="friend" v-for="(f,idx) in l.friends" :key="idx">
        <div class="image">
          <img :src="f.photo" alt="f.name" />
          <span v-if="f.isOnline === true" />
        </div>
        <div class="info">
          <p>{{f.name}}</p>
          <small>{{f.status}}</small>
        </div>
        <More></More>
      </div>
    </div>
  </div>
</template>
<script>
import More from "@/components/More.vue";
export default {
  components: { More },
  data() {
    return {
      lists: [
        {
          Zhuyin: "ㄌ",
          friends: [
            {
              name: "騾至翔",
              status: "上線中",
              isOnline: true,
              photo: require("@/assets/men.png")
            }
          ]
        },
        {
          Zhuyin: "ㄎ",
          friends: [
            {
              name: "凱熱",
              status: "上線中",
              isOnline: true,
              photo: require("@/assets/women.png")
            },
            {
              name: "坤林",
              status: "3 小時前上線",
              isOnline: false,
              photo: require("@/assets/women.png")
            }
          ]
        },
        {
          Zhuyin: "ㄐ",
          friends: [
            {
              name: "警龍",
              status: "1 天前上線",
              isOnline: false,
              photo: require("@/assets/men.png")
            }
          ]
        },
        {
          Zhuyin: "ㄓ",
          friends: [
            {
              name: "州楊清",
              status: "上線中",
              isOnline: true,
              photo: require("@/assets/women.png")
            },
            {
              name: "洲截倫",
              status: "1 小時前上線",
              isOnline: false,
              photo: require("@/assets/men.png")
            }
          ]
        },
        {
          Zhuyin: "ㄘ",
          friends: [
            {
              name: "菜一零",
              status: "20 分鐘前上線",
              isOnline: false,
              photo: require("@/assets/women.png")
            }
          ]
        },
        {
          Zhuyin: "ㄨ",
          friends: [
            {
              name: "王大冬",
              status: "上線中",
              isOnline: true,
              photo: require("@/assets/men.png")
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
#create-friend {
  .friends {
    padding: 10px;
    margin: 20px;
    p {
      padding: 10px 0;
      color: #ddd;
    }
    .friend {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 5px;
      background: #333;
      margin: 10px 0;
      padding: 15px 10px;
      .image {
        flex: 1;
        margin: 10px 20px;
        position: relative;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        span {
          position: absolute;
          bottom: 0;
          right: -1%;
          display: block;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 3px solid #333;
          background: #75f81d;
        }
      }
      .info {
        flex: 8;
        p {
          padding: 0;
          color: #fff;
          font-weight: 800;
        }
        small {
          color: #ccc;
        }
      }
      .label {
        user-select: none;
        cursor: pointer;
        margin-bottom: 0;
        .input:checked {
          & + .checkbox {
            border-color: #c8ccd4;
            svg {
              polyline {
                stroke-dashoffset: 0;
              }
            }
          }
        }
        .checkbox {
          position: relative;
          margin-right: 8px;
          width: 20px;
          height: 20px;
          border: 2px solid #c8ccd4;
          border-radius: 3px;
          svg {
            position: absolute;
            top: -2px;
            left: -2px;
            path {
              fill: none;
              transition: all 0.6s ease;
            }
            polyline {
              fill: none;
              stroke: #fff;
              stroke-width: 2;
              stroke-dasharray: 18px;
              stroke-dashoffset: 18px;
              transition: all 0.3s ease;
            }
          }
        }
        .input {
          position: absolute;
          z-index: -1;
          width: 0;
          height: 0;
          opacity: 0;
        }
      }

      .check {
        flex: 1;
      }
    }
  }
}
</style>
