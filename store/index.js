import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  goodsList: [], // 商品列表
  maxId: 0,
  maxSyncTime: 0,
  goodsDetail: {}, // 商品详情
    // goodsState:{//商品搜索状态   暂时不要,数据保存在 query 中
    //  mall:'',//商城
    //  category:'',//类别
    //  page:'1',
    // },
  hotGoods: [], // 热门商品
  hotWords: [], // 热词
  malls: [], // 商城
  categorys: [], // 商品类别
  keyWord: '', // 搜索关键词
  goodsTotalCount: 0,
  goodsPageSize: 1,
  goodsPageIndex: 1,
  goodsNotify: 0,
  contactUsFlag: false, // 联系我们标记
  maybeLike: [], // 猜你喜欢
  mallHot: [], // 商城热门
  coupons: [], // 今日优惠券
  giftsForAll: [],
  giftsForHer: [],
  giftsForHim: [],
  giftsForKids: [],
  giftsForSenior: []
}

const store = () => new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
