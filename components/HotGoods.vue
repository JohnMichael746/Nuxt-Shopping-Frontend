<template>
  <div id="hotGoods"  :class="searchBarFixed == true ? 'isFixed' :''">
    <div class="panel">
      <div class="rank">
        <div class="hd">
          <h3>TOP RANKING</h3>
        </div>
        <div class="inner">
          <div v-for="(p, index) in hotGoods" :key="index" class="product-item">
            <nuxt-link :to="`/detail/${p.id}`" target="_blank"  @click.native="behaviorFun({type:'1',url:$route.fullPath,goodId:p.id})">
              <div class="pic">
                <div class="subpic">
                  <img :src="p.smallImageUrl" :onerror="errorImg">
                </div>
              </div>
              <p class="title">{{p.title}}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hotGoods',
    props: {
      hotGoods: {
        default: []
      },
      behaviorFun: {
        type: Function
      }
    },
    data: () => ({
      errorImg: 'this.src="' + require('../assets/images/no_imgs.png') + '"',
      searchBarFixed: false,
      offsetTop: 0, // 初始位置
      flag: false// 延后获取初始位置的flag
    }),
    mounted() {
      this.handleScroll()
      window.addEventListener('scroll', this.handleScroll)
      this.offsetTop = document.querySelector('#hotGoods').offsetTop
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll() {
        const sidebarDom = document.querySelector('#sidebar')
        const contentDom = document.querySelector('.main-content')
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (!this.flag) {
          this.flag = true
          this.offsetTop = document.querySelector('#hotGoods').offsetTop
        }

        // 防止屏幕过小时  悬浮样式导致的页面抖动  通过比较内容高度和右侧列表的高度来控制

        if ((scrollTop >= this.offsetTop - 40) && contentDom.clientHeight >= sidebarDom.clientHeight) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      }
    }
  }
</script>

<style>
.isFixed{
  position:fixed;
  top:40px;
  z-index:9999;
  width: 300px;
}
</style>
