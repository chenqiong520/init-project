<template>
  <div id="app">
    <Header></Header>
    <div :class="$style.body">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" module>
.body {
  width: 1208px;
  min-height: 500px;
  margin: 0 auto;
}
</style>
