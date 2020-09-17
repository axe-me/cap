module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "src/scss/config.scss";'
      }
    }
  },

  lintOnSave: true
};
