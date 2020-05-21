<template>
  <div :class="$style.container">
    <div :class="$style.option">
      <i class="el-icon-user"></i>
      我的主页
    </div>
    <div :class="$style.option">
      <i class="el-icon-s-order"></i>
      我的订单
    </div>
    <div :class="$style.option">
      <i class="el-icon-star-off"></i>
      我的收藏
    </div>
    <div :class="$style.option">
      <i class="el-icon-s-ticket"></i>
      我的优惠券
    </div>
    <div :class="$style.option">
      <i class="el-icon-delete"></i>
      我的学籍
    </div>
    <div :class="$style.option">
      <i class="el-icon-setting"></i>
      个人设置
    </div>
    <div :class="$style.option">
      <i class="el-icon-delete"></i>
      退出账号
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
  box-sizing: border-box;
  padding: 0 3 * $ud 2 * $ud;
}

.option {
  display: flex;
  align-items: center;
  margin-top: 2 * $ud;
  font-size: $font-size-small;

  &:hover {
    color: $color-primary;
    cursor: pointer;
  }

  i {
    margin-right: $ud;
  }
}
</style>
