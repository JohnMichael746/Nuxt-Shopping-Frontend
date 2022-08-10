const resolve = require('path').resolve
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'DealsWill Online Shopping Promotions - The Latest Coupons & Promo Codes - DealsWill.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'DealsWill Online Shopping Promotions - The Latest Coupons & Promo Codes - DealsWill.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/reset.css',
    '~assets/css/common.css',
    '~assets/css/style.css',
    '~assets/css/animate.min.css'
  ],
  cache: {
    max: 1000,
    maxAge: 900000
  },
  dev: (process.env.NODE_ENV !== 'production'),
  plugins: [
    '~plugins/vue-svg-icon',
    '~plugins/vue2-toast',
    '~plugins/config',
    '~plugins/vuejs-paginate',
    '~plugins/element-ui'
  ],

    /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    vendor: [
      'axios',
      'qs',
      './utils/fetch.js',
      './utils/Global.js',
      './utils/utils.js'
    ],
    babel: {
      'plugins': [['component', [
        {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        }
      ]]]
    },
    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    extendRoutes(routes) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/notFound.vue')
      })
    }
  }
}
