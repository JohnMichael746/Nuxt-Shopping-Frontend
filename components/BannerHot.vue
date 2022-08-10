<template>
  <div class="banner-hot">
    <div class="panel">
      <div class="rank">
        <div class="inner clearfix" style=" background-color:#f1f1f1;text-align:justify;">
          <div class="item" v-for="l in list" :key="l.id" >
            <nuxt-link class="clearfix" :to="`/detail/${l.id}`" target="_blank" @click.native="behaviorFun({type:'1',url:$route.fullPath,goodId:l.id})">
              <div class="pack">
                <div class="subpic"><img :src="l.smallImageUrl" :onerror="errorImg"></div>
                
              </div>
              <p>{{l.title}}</p>
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

<style>


</style>
