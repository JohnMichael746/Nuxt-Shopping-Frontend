<template>
  <div id="layout-default">
    <top-search :behaviorFun='getBehaviorAdd'></top-search>
    <banner-hot v-if="$route.name === 'index'" :list='hotGoods' :behaviorFun='getBehaviorAdd'></banner-hot>
    <div id="main" class="clearfix">
      <div id="sidebar">
        <right-banner></right-banner>
        <right-stores></right-stores>
        <hot-goods :hotGoods='hotGoods' :behaviorFun='getBehaviorAdd'></hot-goods>
      </div>
      <div class="main-content">
        <nuxt/>
      </div>
    </div>
    <gt-footer></gt-footer>
  </div>
</template>

<script>
  import TopSearch from '../components/TopSearch.vue'
  import RightBanner from '../components/RightBanner.vue'
  import gtFooter from '../components/Footer.vue'
  import RightStores from '../components/RightStores.vue'
  import HotGoods from '../components/HotGoods.vue'
  import BannerHot from '../components/BannerHot.vue'
  
  import { mapActions, mapState } from 'vuex'
  export default {
    components: {
      TopSearch,
      RightBanner,
      gtFooter,
      RightStores,
      HotGoods,
      BannerHot
    },
    methods: {
      ...mapActions([
        'getBehaviorAdd'
      ])
    },
    computed: {
      ...mapState(['hotGoods'])
    }
  }
</script>
