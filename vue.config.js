module.exports = {
  publicPath: process.env.PUBLIC_PATH,

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/resources.scss";`
      }
    }
  },

  devServer: {
    port: 3000,
    proxy: {
      // 模拟接口的 Nginx 反代
      [process.env.VUE_APP_BASE_URL_API]: {
        target: process.env.DEV_API_SERVER_URL,
        pathRewrite: { [process.env.VUE_APP_BASE_URL_API]: '' }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader');

    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end();

    config.module
      .rule('raw')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader');
  },
  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: 'src/assets/icons',
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
      },
      /*
       * @see https://github.com/kisenka/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true
      }
    }
  }
};
