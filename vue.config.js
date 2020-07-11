module.exports = {
  publicPath: process.env.PUBLIC_PATH,

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { 'primary-color': '#477fe3' }
      },
      sass: {
        prependData: `@import "@/styles/resources.scss";`
      }
    }
  },

  devServer: {
    port: 8001,
    proxy: {
      // 模拟接口的 Nginx 反代
      [process.env.VUE_APP_BASE_URL_API]: {
        target: process.env.DEV_API_SERVER_URL,
        pathRewrite: { [process.env.VUE_APP_BASE_URL_API]: '' }
      }
    }
  }
};
