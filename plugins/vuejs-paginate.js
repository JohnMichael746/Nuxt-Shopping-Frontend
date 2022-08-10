import Vue from 'vue'

if (process.browser) {
  var Paginate = require('vuejs-paginate')
  Vue.component('paginate', Paginate)
}
