import Vue from 'vue'
import global_ from '../utils/Global.js'

Vue.config.productionTip = false

Vue.prototype.GLOBAL = global_

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value
    // document.title = el.innerText
    // el.remove()
  }
})

Vue.filter('uppercase', function (value) {
  if (!value) { return '' }
  value = value.toString()
  return value.toUpperCase()
})
