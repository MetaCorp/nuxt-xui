const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/pwa',
    'xui-module'
  ],
  manifest: {
    name: 'My Nuxt App',
    lang: 'en',
    theme_color: '#3B8070'
  },
  /*
  ** Build configuration
  */
  build: {

    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false// Fix bulma css warnings
        }
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
        // vueLoader.options.loaders.scss = 'vue-style-loader!css-loader!sass-loader?' + JSON.stringify({
        //   includePaths: [path.resolve(__dirname), 'node_modules']
        // })

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
