<template>
  <div>
    <div :class="$style.container" class="header">
      <div :class="$style.wrapper">
        <img :class="$style.logo" src="../assets/logo.png" alt="logo" />

        <gp-popover placement="bottom" width="400" trigger="click">
          <Search></Search>
          <gp-input
            v-model="searchValue"
            slot="reference"
            :class="$style.search"
            placeholder="人工智能"
            suffix-icon="el-icon-search"
          >
          </gp-input>
        </gp-popover>

        <gp-popover placement="bottom" trigger="hover">
          <Download></Download>
          <div slot="reference" :class="$style.download">
            <i class="el-icon-mobile"></i>
            APP下载
          </div>
        </gp-popover>

        <div :class="$style.right">
          <gp-popover placement="bottom" width="344" trigger="click">
            <Study></Study>
            <div slot="reference" :class="$style.study">
              <i class="el-icon-reading"></i>
              我的学习
            </div>
          </gp-popover>

          <gp-popover placement="bottom" width="344" trigger="click">
            <Message></Message>
            <gp-badge
              slot="reference"
              :class="$style.message"
              :value="2"
              class="item"
              type="danger"
            >
              <i class="el-icon-chat-dot-round"></i>
            </gp-badge>
          </gp-popover>

          <gp-popover placement="bottom" trigger="click">
            <User></User>
            <img
              slot="reference"
              :class="$style.user"
              src="@/assets/user.png"
              alt=""
            />
          </gp-popover>
        </div>
      </div>
    </div>
    <div :class="$style.shim"></div>
  </div>
</template>

<script>
import Search from "./header/search";
import Message from "./header/message";
import Download from "./header/download";
import Study from "./header/study";
import User from "./header/user";

export default {
  name: "Header",

  components: {
    Search,
    Message,
    Download,
    Study,
    User
  },

  data() {
    return {
      searchValue: ""
    };
  },

  mounted() {
    console.log(this.$style);
  }
};
</script>

<style module lang="scss">
.container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: $index-normal;
  width: 100%;
  height: 64px;
  background: $background-color-white;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.03);

  .wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 1208px;
    height: 100%;
    margin: 0 auto;

    .logo {
      width: 116px;
      height: 40px;
      cursor: pointer;
      object-fit: contain;
    }

    .search {
      width: 392px;
      margin-left: 6 * $unit-distance;
    }

    .download {
      margin-left: 8 * $unit-distance;

      @include btn;
    }

    .study {
      margin-left: 5 * $unit-distance;

      @include btn;
    }

    .message {
      margin-left: 5 * $unit-distance;
      font-size: $font-size-medium !important;

      @include btn;
    }

    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: auto;

      .user {
        width: 40px;
        height: 40px;
        margin-left: 5 * $unit-distance;
        border-radius: 50%;
        border: 1px solid $border-color-base;
        cursor: pointer;
      }
    }
  }
}

.shim {
  height: 64px;
}

// 修改子组件样式
:global {
  .header .el-input {
    width: 392px;

    .el-input__inner {
      border-radius: 50px;
      border: none;
      color: $color-text-sub;
      background: $background-color-light;
    }

    .el-input__icon {
      font-size: $font-size-medium;
    }
  }
}
</style>
