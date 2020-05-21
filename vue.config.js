module.exports = {
  configureWebpack: config => {
    const StyleLintPlugin = require("stylelint-webpack-plugin");
    config.plugins.push(
      new StyleLintPlugin({
        files: ["src/**/*.{vue,html,css,scss,sass,less}"],
        failOnError: false,
        cache: true,
        fix: true
      })
    );
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "~@/style/variables.scss";`
      }
    }
  }
};
