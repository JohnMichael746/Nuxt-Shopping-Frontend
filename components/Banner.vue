<template>
	<div class="banner" @mouseover='stop' @mouseout='start'>
		<!-- <swiper :options="swiperOption" ref="mySwiper" class="swiper" >
			<swiper-slide><img src="../assets/images/banner2.jpg"></swiper-slide>
			<swiper-slide><img src="../assets/images/banner.jpg" ></swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
	  </swiper> -->
    <div v-swiper:mySwiper="swiperOption" class="right-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
          <img :src="banner">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
export default {
  name: 'carrousel',
  data() {
    return {
      banners: [require('../assets/images/banner2.jpg'), require('../assets/images/banner.jpg')],
      swiperOption: {
        autoplay: {
          delay: 3000
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
	.banner{ width: 90%; max-width: 1110px; min-width: 960px; margin: 15px auto;height: 285px}
	.banner img{ width: 100%; vertical-align: top}
	.swiper{width: 100%;height: 100%}
  .swiper-pagination-bullet {border:1px solid #fff;}
</style>
