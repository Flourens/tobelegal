
const baseUrlSlug = process.env.DEVELOPMENT_SUBFOLDER
  ? "process.env.DEVELOPMENT_SUBFOLDER"
  : "tobelegal/";
  
const addApacheConfig = indexFolder => {
  return {};
};

module.exports = {
  configureWebpack: addApacheConfig(baseUrlSlug),
  publicPath: baseUrlSlug,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/global/variables.scss";
          @import "@/styles/global/typography.scss";
          @import "@/styles/global/mixins.scss";
          `
      }
    }
  },
  filenameHashing: false,
  // chainWebpack: config => {
  //   config.plugin('preload').tap(options => {
  //     options[0].include="allAssets"
  //     return options
  //   })
  // }
};
