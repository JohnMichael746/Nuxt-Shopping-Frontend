// 与action不同  主要用在fetch方法 使页面渲染前填充应用的状态树

import * as api from '../store/api'
import * as types from '../store/mutation-types'

// 获取商品列表
export const fetchGoodsList = async ({store, query}) => {
  let { data } = await api.fetchGoodsList(query)
  if (data.code === 0) {
    store.commit(types.GET_GOODS_LIST, data.result)
    store.commit(types.GET_MAX_ID_SYNC, data.result)
  }
}

// 通过关键字 获取商品列表
export const fetchSearchList = async ({store, query}) => {
  let { data } = await api.fetchSearchList(query)
  if (data.code === 0) {
    store.commit(types.GET_GOODS_LIST, data.result)
  }
}

// 获取top10 商品
export const fetchHotGoods = async ({store}) => {
  let { data } = await api.fetchHotGoods()

  if (data.code === 0) {
    store.commit(types.GET_HOT_GOODS, data.result.list)
  }
}

// 获取商城
export const fetchMalls = async ({ store }) => {
  let { data } = await api.fetchMalls()
  if (data.code === 0) {
    store.commit(types.GET_MALLS, data.result.list)
  }
}

// 获取商品类别
export const fetchCategorys = async ({ store }) => {
  let { data } = await api.fetchCategorys()
  if (data.code === 0) {
    store.commit(types.GET_CATEGORYS, data.result.list)
  }
}

// 获取热词
export const fetchHotWords = async ({ store }) => {
  let { data } = await api.fetchHotWords()
  if (data.code === 0) {
    store.commit(types.GET_HOT_WORDS, data.result.list)
  }
}

// 获取今日 优惠券
export const fetchCoupons = async ({ store }) => {
  let { data } = await api.fetchCoupons()
  if (data.code === 0) {
    store.commit(types.GET_COUPONS, data.result.list)
  }
}

// 获取gifts for all
export const fetchGiftsForAll = async ({ store }) => {
  let { data } = await api.fetchGoodsList({category: 'Gifts For All'})
  if (data.code === 0) {
    store.commit(types.GET_GIFTS_FOR_ALL, data.result.list)
  }
}

// 获取gifts for her
export const fetchGiftsForHer = async ({ store }) => {
  let { data } = await api.fetchGoodsList({category: 'Gifts For Her'})
  if (data.code === 0) {
    store.commit(types.GET_GIFTS_FOR_HER, data.result.list)
  }
}

// 获取gifts for him
export const fetchGiftsForHim = async ({ store }) => {
  let { data } = await api.fetchGoodsList({category: 'Gifts For Him'})
  if (data.code === 0) {
    store.commit(types.GET_GIFTS_FOR_HIM, data.result.list)
  }
}

// 获取gifts for kids
export const fetchGiftsForKids = async ({ store }) => {
  let { data } = await api.fetchGoodsList({category: 'Gifts For Kids'})
  if (data.code === 0) {
    store.commit(types.GET_GIFTS_FOR_KIDS, data.result.list)
  }
}

// 获取gifts for senior
export const fetchGiftsForSenior = async ({ store }) => {
  let { data } = await api.fetchGoodsList({category: 'Gifts For Seniors'})
  if (data.code === 0) {
    store.commit(types.GET_GIFTS_FOR_SENIOR, data.result.list)
  }
}

// 获取猜你喜欢商品
export const fetchMaybeLike = async ({ store }, payload) => {
  let { data } = await api.fetchMaybeLike(payload)
  if (data.code === 0) {
    store.commit(types.GET_MAYBE_LIKE, data.result.list)
  }
}

// 获取商城热门 商品
export const fetchMallHot = async ({ store }, payload) => {
  let { data } = await api.fetchMallHot(payload)
  if (data.code === 0) {
    store.commit(types.GET_MALL_HOT, data.result.list)
  }
}

// 获取商品详情
export const fetchGoodsDetail = async ({ store }, payload) => {
  let { data } = await api.fetchGoodsDetail(payload)

  if (data.code === 0) {
    store.commit(types.GET_GOODS_DETAIL, data.result)
  }
}
