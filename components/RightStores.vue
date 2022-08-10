<template>
  <div class="right-stores">
    <div class="panel">
        <div class="rank">
        <div class="hd">
        <h3>POPULAR STORES</h3>
        </div>
        <div class="store clearfix">
        <div v-for="(item,index) in stotresList" :key='item.link'  :class="['item',index>3?'bottom':'']">
            <a class="clearfix" :href="item.link" target="_blank">
              <img :src="item.src">
            </a>
        </div>
        </div>
        </div>
    </div>
 </div>
</template>

<script>
  export default{
    data: () => ({
      stotresList: [
         {link: 'https://www.amazon.com', src: 'http://imgcache.dealmoon.com/fsvr.dealmoon.com/dealmoon/530/faa/60b/ff9/a9f/071/2f4/97a/c4a/eac/90.jpg_240_120_2_b925.jpg'},
         {link: 'https://www.ebay.com', src: 'http://imgcache.dealmoon.com/img.dealmoon.com/images/stores/b6403-dd6cefed8ddc2d75265e6077142369e5.png_120_60_2_dc22.png'},
         {link: 'https://www.walmart.com', src: 'http://imgcache.dealmoon.com/fsvr.dealmoon.com/dealmoon/761/568/4fe/0d4/2e3/f5e/d9f/ae7/40a/1bc/52.jpg_240_120_2_0863.jpg'},
         {link: 'http://www.neimanmarcus.com/', src: 'http://imgcache.dealmoon.com/fsvr.dealmoon.com/dealmoon/2b0/ece/872/676/d65/980/870/690/4bc/410/ca.jpg_240_120_2_98f3.jpg'},
         {link: 'https://www.bloomingdales.com', src: 'http://imgcache.dealmoon.com/fsvr.dealmoon.com/dealmoon/d3b/689/2d7/c26/191/d5e/025/a81/c91/2ee/bd.jpg_240_120_2_ae34.jpg'},
         {link: 'https://www.macys.cn/', src: 'http://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/bf3/4c0/df7/29c6ce82e44717e9aaf446d.jpg_120_60_2_7349.jpg'},
         {link: 'https://www.bestbuy.com', src: 'http://imgcache.dealmoon.com/fsvr.dealmoon.com/dealmoon/a6f/173/abf/c24/b36/e98/5d9/232/ccd/a12/49.jpg_120_60_2_7933.jpg'},
         {link: 'http://www.gnc.com/', src: 'http://imgcache.dealmoon.com/fsvr.dealmoon.com/dealmoon/c54/5a0/8f4/464/9ea/100/3f0/52c/3be/a8f/f9.jpg_240_120_2_42e0.jpg'}
      ]
    })
  }
</script>
