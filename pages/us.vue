<template>
  <div>
    <!-- <top-search :hotWords='hotWords' :behaviorFun='getBehaviorAdd'></top-search>
    <div id="main" class="clearfix">
      <div id="sidebar">
        <right-banner></right-banner>
        <hot-goods :hotGoods='hotGoods'></hot-goods>
      </div> -->
      <div id="content">
        <nuxt-child/>
      </div>
    <!-- </div>
    <gt-footer></gt-footer> -->
  </div>
</template>
<script>
  // import TopSearch from '../components/TopSearch.vue'
  // import HotGoods from '../components/HotGoods.vue'
  // import RightBanner from '../components/RightBanner.vue'
  // import gtFooter from '../components/Footer.vue'
  // import { mapActions, mapState } from 'vuex'
  import { fetchHotGoods } from '../utils/fetch'

  export default {
    name: 'detail',
    async fetch({store}) {
      await fetchHotGoods({store})
      // await fetchHotWords({store})
    }
    // components: {
    //   TopSearch,
    //   HotGoods,
    //   RightBanner,
    //   gtFooter
    // },
    // computed: {
    //   ...mapState(['hotWords', 'hotGoods'])
    // },
    // methods: {
    //   ...mapActions([
    //     'getBehaviorAdd'
    //   ])
    // }
  }
</script>
