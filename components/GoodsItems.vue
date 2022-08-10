<template>
  <div id="goodItems">
    <div class="panel">
      <div class="product">
        <div v-for="p in goodsList" class="product-item" :key="p.id">
          <nuxt-link :to="`detail/${p.id}`" target="_blank" @click.native="behaviorFun({type:'1',url:$route.fullPath,goodId:p.id})">
            <div class="pic">
              <div class="subpic"><img :src="p.smallImageUrl" :onerror="errorImg"></div>
            </div>
            <p class="title">
              <span v-if="p.discounts">{{p.discounts}}</span>
              <span v-if="!p.discounts&&p.originalPrice">{{p.price}}(<i>{{p.originalPrice}}</i>,{{getOff(p.price,p.originalPrice)}} off)</span>
              <span v-if="!p.discounts&&!p.originalPrice">{{p.price}}</span>
              {{p.title}}</p>
            <p class="info">
              {{p.shortContent}}
            </p>
          </nuxt-link>
          <a :href='p.url' class="tobuywordBtn" target="_blank" @click="behaviorFun({type:'2',url:$route.fullPath,goodId:p.id})">Link</a>
          <div class="rightmall">
            <!--{{p.syncTime}}-->
            　{{changeTime(p.syncTime)}}
            <a class="mallBtn" :href='p.url' target="_blank" >{{p.mallName}}</a>
          </div>
          <div class='upvote'>
            <upvote :getThumbsAdd="getThumbsAdd" :id="p.id"></upvote>
            <span class="upvoteNum">{{p.thumbs}}</span>
          </div>
          <div class="goodSource"> from {{dealDomain(p.goodSourceName)}}</div>
        </div>
      </div>
    </div>
    <!--其他参数-->
    <!--{-->
    <!--"goodId":1,//商品编号-->
    <!--"title":"",//商品标题-->
    <!--"smallImageUrl",//商品列表图片-->
    <!--"price":"", //现价-->
    <!--"originalPrice":"",//原价-->
    <!--"discounts":"",//折扣信息-->
    <!--"coupons":"",//优惠券-->
    <!--"promoCode":"",//促销码-->
    <!--"mallName":"",//商城名称-->
    <!--"goodSourceName":"",//来源网站名-->
    <!--"shortContent":"",//内容描述，已截取-->
    <!--"url":"",//商品购买链接-->
    <!--"syncTime":""//同步时间-->
  </div>

</template>
<script>
  import {changeTime, getOff, dealDomain} from '../utils/utils'
  import upvote from '../components/Upvote.vue'
  export default {
    name: 'goodItems',
    data: () => ({
      errorImg: 'this.src="' + require('../assets/images/no_imgs.png') + '"'
    }),
    props: {
      goodsList: {
        default: []
      },
      behaviorFun: {
        type: Function
      },
      getThumbsAdd: {
        type: Function
      }
    },
    components: {
      upvote
    },
    methods: {
      changeTime: function (time) {
        return changeTime(time)
      },
      getOff: function (price, originalPrice) {
        return getOff(price, originalPrice)
      },
      dealDomain: (domain) => dealDomain(domain)
    }
  }
</script>

<style>

</style>
