import * as types from './mutation-types'
import * as api from './api'

// import NProgress from 'nprogress'
import 'nprogress/nprogress.css'// Progress 进度条样式
if (process.browser) {
  var NProgress = require('nprogress') // Progress 进度条
}
// todo  catch 错误和  res 中的判断

// 获取热词
export const getHotWords = ({ commit }) => {
  api.fetchHotWords().then(({data}) => {
    if (data.code === 0)commit(types.GET_HOT_WORDS, data.result.list)
  })
}

// 获取商品列表
export const getGoodsList = ({ commit }, payload) => {
  NProgress.start()
  api.fetchGoodsList(payload).then(({data}) => {
    if (data.code === 0) {
      commit(types.GET_GOODS_LIST, data.result)
      commit(types.GET_MAX_ID_SYNC, data.result)
      NProgress.done()
    }
  })
}

// 通过关键字 获取商品列表
export const getSearchList = ({ commit }, payload) => {
  NProgress.start()
  api.fetchSearchList(payload).then(({data}) => {
    if (data.code === 0)commit(types.GET_GOODS_LIST, data.result)
    NProgress.done()
  })
}

// 获取商品详情
export const getGoodsDetail = ({ commit }, payload) => {
  api.fetchGoodsDetail(payload).then(({data}) => {
    commit(types.GET_GOODS_DETAIL, data.result)
  })
}

// 获取top10 商品
export const getHotGoods = ({ commit }) => {
  api.fetchHotGoods().then(({data}) => {
    if (data.code === 0)commit(types.GET_HOT_GOODS, data.result.list)
  })
}

// 获取商城
export const getMalls = ({ commit }) => {
  api.fetchMalls().then(({data}) => {
    if (data.code === 0)commit(types.GET_MALLS, data.result.list)
  })
}

// 获取商品类别
export const getCategorys = ({ commit }) => {
  api.fetchCategorys().then(({data}) => {
    if (data.code === 0)commit(types.GET_CATEGORYS, data.result.list)
  })
}

// 获取新增商品的条目数
export const getGoodsNotify = ({ commit }, payload) => {
  api.fetchGoodsList(payload).then(({data}) => {
    if (data.code === 0)commit(types.GET_GOODS_NOTIFY, data.result.totalCount)
  })
}

// 用户行为统计记录
export const getBehaviorAdd = ({ commit }, payload) => {
  api.fetchBehaviorAdd(payload).then(({data}) => {
    console.log('用户行为已上传')
  })
}

// 用户增加点赞数 列表页
export const getThumbsAdd = ({ commit }, payload) => {
  api.fetchThumbsAdd(payload).then(({data}) => {
    if (data.code === 0)commit(types.GET_THUMBS_ADD, {data: data.result, payload: payload})
  })
}

// 用户增加点赞数 详情页
export const getThumbsAddDetail = ({ commit }, payload) => {
  api.fetchThumbsAdd(payload).then(({data}) => {
    if (data.code === 0)commit(types.GET_THUMBS_ADD_DETAIL, data)
  })
}

// 联系我们接口 todo 等接口
export const getContactUs = ({ commit }, payload) => {
  commit(types.CHANGE_CONTACT_US_FLAG, false)
  api.fetchContactUs(payload).then(({data}) => {
    if (data.code === 0)commit(types.CHANGE_CONTACT_US_FLAG, {data})
  })
}

// 获取猜你喜欢商品
export const getMaybeLike = ({ commit }, payload) => {
  api.fetchMaybeLike(payload).then(({data}) => {
    if (data.code === 0)commit(types.GET_MAYBE_LIKE, data.result.list)
  })
}

// 获取商城热门 商品
export const getMallHot = ({ commit }, payload) => {
  api.fetchMallHot(payload).then(({data}) => {
    if (data.code === 0)commit(types.GET_MALL_HOT, data.result.list)
  })
}

// 获取今日 优惠券
export const getCoupons = ({ commit }) => {
  api.fetchCoupons().then(({data}) => {
    if (data.code === 0)commit(types.GET_COUPONS, data.result.list)
  })
}

// 获取gifts for all
export const getGiftsForAll = ({ commit }) => {
  api.fetchGoodsList({category: 'Gifts For All'}).then(({data}) => {
    if (data.code === 0)commit(types.GET_GIFTS_FOR_ALL, data.result.list)
  })
}
// 获取gifts for her
export const getGiftsForHer = ({ commit }) => {
  api.fetchGoodsList({category: 'Gifts For Her'}).then(({data}) => {
    if (data.code === 0)commit(types.GET_GIFTS_FOR_HER, data.result.list)
  })
}
// 获取gifts for him
export const getGiftsForHim = ({ commit }) => {
  api.fetchGoodsList({category: 'Gifts For Him'}).then(({data}) => {
    if (data.code === 0)commit(types.GET_GIFTS_FOR_HIM, data.result.list)
  })
}
// 获取gifts for kids
export const getGiftsForKids = ({ commit }) => {
  api.fetchGoodsList({category: 'Gifts For Kids'}).then(({data}) => {
    if (data.code === 0)commit(types.GET_GIFTS_FOR_KIDS, data.result.list)
  })
}
// 获取gifts for senior
export const getGiftsForSenior = ({ commit }) => {
  api.fetchGoodsList({category: 'Gifts For Seniors'}).then(({data}) => {
    if (data.code === 0)commit(types.GET_GIFTS_FOR_SENIOR, data.result.list)
  })
}

// 滚动 动态获取数据
export const getGoodsListScroll = ({ commit }, payload) => {
  api.fetchGoodsList(payload).then(({data}) => {
    if (data.code === 0) {
      // 添加到新页面
      commit(types.GET_GOODS_LIST_S, data.result)
    }
  })
}
export const getSearchListScroll = ({ commit }, payload) => {
  api.fetchSearchList(payload).then(({data}) => {
    if (data.code === 0)commit(types.GET_GOODS_LIST_S, data.result)
  })
}
