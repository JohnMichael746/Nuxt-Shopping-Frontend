<template>
  <div class="coupons-items ">
    <div class="panel">
        <div class="rank">
            <div class="hd">
                <h3>TODAY'S TOP COUPONS</h3>
            </div>
            <div class="coupons clearfix">
                 <div class="item clearfix" v-for="(item, index) in coupons" :key="index" >
                    <p class="pic">
                        <a href="javeScript:;">
                            <img :src="item.imgUrl" :alt="item.store">
                        </a>
                    </p>
                    <table cellspacing="0" cellpadding="0" >
                        <tbody>
                            <tr><td class="coupons-left">Coupon Code：</td><td class="code">{{item.code}}</td></tr>
                            <tr><td class="coupons-left">Summary：</td><td><a rel="nofollow"  class="cont" href="javascript:;">{{item.summary}}</a></td></tr>
                            <tr><td class="coupons-left">Expires：</td><td>{{changeTime2(item.expire,'yyyy-MM-dd hh:mm')}}</td></tr>
                        </tbody>
                     </table>
                     <div class="get-deal">
                         <a rel="nofollow" class="cou_btn2" target="_blank" :href="item.url" >Get Deal</a>
                      </div>
                 </div>
            </div>
        </div>
    </div>
 </div>
</template>


<script>
import {changeTime2} from '@/utils/utils'
export default{
  data: () => ({
  }),
  props: {
    coupons: {
      default: []
    }
  },
  methods: {
    changeTime2
  }
}
</script>
