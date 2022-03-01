const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/variables.scss";
        `,
      },
    },
  },

  transpileDependencies: [
    'vuetify',
  ],
});
