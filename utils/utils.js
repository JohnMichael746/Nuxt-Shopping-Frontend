// 工具函数
import qs from 'qs'

// url拼接 去除空值的option
export const createUrl = obj => {
  const newObj = {}
  for (var v in obj) {
    if (obj[v] !== '') {
      newObj[v] = obj[v]
    }
  }
  return qs.stringify(newObj)
}

// 将 毫秒数的时间换算成 展示时间
export const changeTime = t => {
  var publishTime = parseInt(t) / 1000
  var dSeconds
  var dMinutes
  var dHours
  var dDays
  var timeNow = parseInt(new Date().getTime() / 1000)
  var d

  var date = new Date(publishTime * 1000)
  var Y = date.getFullYear()
  var M = date.getMonth() + 1
  var D = date.getDate()
  var H = date.getHours()
  var m = date.getMinutes()
  var s = date.getSeconds()
  // 小于10的在前面补0
  if (M < 10) {
    M = '0' + M
  }
  if (D < 10) {
    D = '0' + D
  }
  if (H < 10) {
    H = '0' + H
  }
  if (m < 10) {
    m = '0' + m
  }
  if (s < 10) {
    s = '0' + s
  }

  d = timeNow - publishTime
  dDays = parseInt(d / 86400)
  dHours = parseInt(d / 3600)
  dMinutes = parseInt(d / 60)
  dSeconds = parseInt(d)

  if (dDays > 0 && dDays < 3) {
    if (dDays === 1) return dDays + ' day ago'
    return dDays + ' days ago'
  } else if (dDays <= 0 && dHours > 0) {
    if (dHours === 1) return dHours + ' hour ago'
    return dHours + ' hours ago'
  } else if (dHours <= 0 && dMinutes > 0) {
    if (dMinutes === 1) return dMinutes + ' minute ago'
    return dMinutes + ' minutes ago'
  } else if (dSeconds < 60) {
    if (dSeconds <= 0) {
      return 'just'
    } else {
      if (dSeconds === 1) return dSeconds + ' second ago'
      return dSeconds + ' seconds ago'
    }
  } else if (dDays >= 3 && dDays < 30) {
    return M + '-' + D + ' ' + H + ':' + m
  } else if (dDays >= 30) {
    return Y + '-' + M + '-' + D + ' ' + H + ':' + m
  }
}

// 将 HTML<a>中的调转地址 去掉
export const ignoreLink = h => {
  // return   h.replace(/href=\"(.*?)\"/g, "href=\"Javascript:;\"")
  return h.replace(/href="(.*?)"/g, '')
}
// 根据原价与现价 算出 打折比率
export const getOff = (price, originalPrice) => {
  price = price.split('$')[1]
  originalPrice = originalPrice.split('$')[1]
  return Math.ceil(100 - price / originalPrice * 100)
}

// 将时间戳 的格式转换
export function changeTime2(str, fmt) {
  var data = new Date(parseInt(str))
  var o = {
    'M+': data.getMonth() + 1, // 月份
    'd+': data.getDate(), // 日
    'h+': data.getHours(), // 小时
    'm+': data.getMinutes(), // 分
    's+': data.getSeconds(), // 秒
    'q+': Math.floor((data.getMonth() + 3) / 3), // 季度
    'S': data.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) { if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  return fmt
}

// 域名中去掉www
export const dealDomain = (domain) => domain.replace(/www\./gi, '')
