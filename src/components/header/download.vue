<template>
  <div :class="$style.container">
    <span :class="$style.header">咕泡大学，让每个人的职业生涯不留遗憾</span>
    <div :class="$style.body">
      <div :class="$style['button-group']">
        <gp-button :class="$style.button" type="primary" round>
          App Store下载
        </gp-button>
        <gp-button :class="$style.button" type="primary" round>
          Android下载
        </gp-button>
      </div>

      <div :class="$style.qrcode">
        <img src="@/assets/qrcode.png" alt="" />
        <span :class="$style.tips">扫码下载咕泡大学APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-message"
};
</script>

<style lang="scss" module>
.container {
  width: 350px;
  padding: 3 * $ud;
  box-sizing: border-box;
}

.header {
  font-size: $font-size-base;
  font-weight: 600;
  color: $color-text-title;
}

.body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3 * $ud;
}

.button {
  width: 168px;
  font-size: $font-size-base;

  &:last-child {
    margin-top: 16px;
    margin-left: 0 !important;
  }
}

.qrcode {
  text-align: center;

  img {
    width: 96px;
    height: 96px;
  }
}

.tips {
  font-size: $font-size-extra-small;
  white-space: nowrap;
  color: $color-text-sub;
}
</style>
