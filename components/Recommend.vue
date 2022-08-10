<template>
  <div class="recommending-commodities">
    <div class="panel">
      <div class="rank">
        <div class="hd">
          <h3>{{hd|uppercase}}</h3>
        </div>
        <div class="inner clearfix" style="padding: 0 10px; background-color:#fff;display: inline-block">
          <div class="item" v-for="(l, index) in list" :key="index">
            <nuxt-link class="clearfix" :to="`/detail/${l.id}`" target="_blank" @click.native="behaviorFun({type:'1',url:$route.fullPath,goodId:l.id})">
              <div class="pack">
                <div class="subpic">
                  <img :src="l.smallImageUrl" :onerror="errorImg">
                </div>
                <p>{{l.title}}</p>
              </div>
            </nuxt-link>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      list: {
        default: []
      },
      hd: {
        default: ''
      },
      getThumbsAdd: {
        type: Function
      },
      behaviorFun: {
        type: Function
      }
    },
    data: () => ({
      errorImg: 'this.src="' + require('../assets/images/no_imgs.png') + '"'
    })
  }
</script>
