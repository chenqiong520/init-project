<template>
  <div :class="$style.container">
    <div :class="$style.header"></div>

    <div :class="$style.body"></div>

    <div :class="$style.footer">
      查看更多
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 296px;
}

.header {
  width: 100%;
  height: 32px;
}

.body {
  flex: 1;
}

.footer {
  width: 100%;
  height: 32px;
  border-top: 1px solid $border-color-base;
  line-height: 32px;
  text-align: center;
  color: $color-text-sub;

  &:hover {
    color: $color-primary;
    cursor: pointer;
  }
}
</style>
