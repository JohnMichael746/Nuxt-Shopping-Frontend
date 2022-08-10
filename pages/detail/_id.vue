<template>
  <div v-title="title">
      <div id="content">
        <crumbs></crumbs>
        <div class="product detail">
          <div class="detail-info">
            <div class="picInfo">
              <div class="pic">
                <div class="subpic">
                  <img :src="goodsDetail.smallImageUrl" :onerror="errorImg">
                </div>
              </div>
              <a :href='goodsDetail.url' 
                  class="tobuywordBtn" 
                  @click="getBehaviorAdd({type:'2',url:$route.fullPath,goodId:goodsDetail.goodId})">
                  Buy Now
              </a>
              <div class="rightmall">
                　{{changeTime(goodsDetail.syncTime)}}
                  <a class="mallBtn" 
                    :href='goodsDetail.url' 
                    target="_blank" title="">
                    {{goodsDetail.mallName}}
                  </a>
              </div>
              
              <div class='detail-upvote'>
                <span class="upvoteNum">{{goodsDetail.thumbs}}</span>
              </div>
            </div>
            <div class="title">
              <span v-if="goodsDetail.discounts">{{goodsDetail.discounts}}</span>
              <span v-if="!goodsDetail.discounts&&goodsDetail.originalPrice">{{goodsDetail.price}}(<i>{{goodsDetail.originalPrice}}</i>,{{getOff(goodsDetail.price,goodsDetail.originalPrice)}} off)</span>
              <span v-if="!goodsDetail.discounts&&!goodsDetail.originalPrice">{{goodsDetail.price}}</span>
              {{goodsDetail.title}}</div>
            <p>
              <span v-html="goodsDetail.contentHtml&&ignoreLink(goodsDetail.contentHtml)">
                 {{goodsDetail.contentHtml&&ignoreLink(goodsDetail.contentHtml)}}
              </span>
            </p>
            <!-- 不清楚为什么放在原位置出现不了，放在这个位置能显示 -->
            <upvote class="testUpvote" :getThumbsAdd="getThumbsAddDetail" :id="goodsDetail.goodId"></upvote>
          </div>
        </div>
        <Recommend v-if="maybeLike.length > 3" :list="maybeLike" hd="Deals and coupons you may like" :behaviorFun='getBehaviorAdd'></Recommend>
        <Recommend v-if="mallHot.length > 3" :list="mallHot" :hd="`${goodsDetail.mallName} hot goods`" :behaviorFun='getBehaviorAdd'></Recommend>
      </div>
    </div>
</template>
<script>
  import Crumbs from '@/components/Crumbs.vue'
  import Upvote from '@/components/Upvote.vue'
  import Recommend from '@/components/Recommend.vue'
  import { mapActions, mapState } from 'vuex'
  import {ignoreLink, changeTime, getOff} from '@/utils/utils'
  import {baseTitle} from '@/utils/Global'
  import { fetchHotGoods, fetchMaybeLike, fetchMallHot, fetchGoodsDetail } from '@/utils/fetch'

  export default {
    name: 'detail',
    async fetch({store, params}) {
      await fetchHotGoods({store})
      await fetchMaybeLike({store}, {id: params.id})
      await fetchMallHot({store}, {id: params.id})
      await fetchGoodsDetail({store}, {id: params.id})
    },
    data: () => ({
      errorImg: 'this.src="' + require('@/assets/images/no_imgs.png') + '"',
      title: baseTitle
    }),
    components: {
      Crumbs,
      Upvote,
      Recommend
    },
    computed: {
      ...mapState(['goodsDetail', 'mallHot', 'maybeLike'])
    },
    methods: {
      changeTime: function (time) {
        return changeTime(time)
      },
      ignoreLink: function (html) {
        return ignoreLink(html)
      },
      getOff: function (price, originalPrice) {
        return getOff(price, originalPrice)
      },
      ...mapActions([
        'getGoodsDetail',
        'getBehaviorAdd',
        'getThumbsAddDetail',
        'getMaybeLike',
        'getMallHot'
      ])
    },
    watch: {
      'goodsDetail'(to, from) {
        if (to) {
          this.title = to.title + ' | ' + baseTitle
        } else {
          this.title = baseTitle
        }
      }
    }
  }
</script>

<style scoped>
  .testUpvote{
    left: 110px;
    top: 375px;
  }
</style>
