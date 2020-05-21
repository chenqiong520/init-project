<template>
  <div :class="$style.container">
    <div :class="$style.hot">
      <span :class="$style.title">热门搜索</span>
    </div>

    <div :class="$style.history">
      <div :class="$history.header">
        <span :class="$style.title">搜索历史</span>
        <i class="el-icon-delete"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-seach",

  mounted() {
    console.log(this);
  }
};
</script>

<style lang="scss" module>
.container {
  width: 100%;
  height: 296px;
  padding: 3 * $unit-distance;
  box-sizing: border-box;
}

.hot {
  color: $color-primary;
}

.history {
  margin-top: 3 * $unit-distance;
}

.title {
  font-size: $font-size-base;
  font-weight: 600;
}
</style>

<style lang="scss" module="$history">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
