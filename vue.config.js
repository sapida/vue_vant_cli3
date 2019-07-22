const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  publicPath: './',
  outputDir:'dist',
  assetsDir:'assets',
  lintOnSave:false,
  runtimeCompiler:false,
  productionSourceMap:false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*','!font*'],
            unitPrecision: 3,
            minPixelValue:2
          })
        ]
      }
    }
  }
};