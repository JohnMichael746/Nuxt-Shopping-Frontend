<template>
	<div class="right-banner">
    <!-- <div v-swiper:mySwiper="swiperOption" class="right-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
          <img :src="banner">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div> -->
    <el-carousel class="right-swiper" trigger="click" :interval="8000" height="250px">
      <el-carousel-item class="swiper-slide"  v-for="(banner, index) in banners" :key="index" >
        <img :src="banner">
      </el-carousel-item>
    </el-carousel>
	</div>
</template>
<script>
export default {
  data() {
    return {
      banners: [require('../assets/images/1.jpg'), require('../assets/images/4.jpg'), require('../assets/images/3.jpg')],
      swiperOption: {
        autoplay: {
          delay: 8000
        }, // 自动播放
        spaceBetween: 30, // 滚动切换时的 两分页间隔
        loop: true, // 循环
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }

    }
  },
  methods: {
    stop() {
      this.mySwiper.autoplay.stop()
    },
    start() {
      this.mySwiper.autoplay.start()
    }
  }
}
</script>
<style>
	.right-banner{ width: 300px; height: 250px;margin-bottom: 15px;position: relative;z-index: 1111;}
	.right-banner img{ width: 100%; vertical-align: top;}
	.right-swiper{width: 100%;height: 100%}
  .el-carousel__button {
    box-sizing: content-box;
    background-color: #000;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 0 4px;
    padding: 0;
  }
  .el-carousel__indicator.is-active .el-carousel__button{
    background-color: rgb(0, 122, 255);
  }
  .el-carousel__arrow{
    background-color: rgba(31, 45, 61, .55)
  }
  .el-carousel__arrow:hover{
    background-color: rgba(31, 45, 61, .78)
  }
</style>
