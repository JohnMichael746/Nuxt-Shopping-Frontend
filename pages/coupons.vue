<template>
  <div v-title="title">
    <div id="content">
      <crumbs Particulars='Coupons'></crumbs>
      <popular-stores></popular-stores>
      <coupons-items :coupons='coupons'></coupons-items>
    </div>
  </div>
</template>
<script>
  import Crumbs from '../components/Crumbs.vue'
  import PopularStores from '../components/PopularStores'
  import CouponsItems from '../components/CouponsItems'
  import { mapActions, mapState } from 'vuex'
  import { baseTitle } from '../utils/Global'
  import { fetchCoupons, fetchHotGoods } from '../utils/fetch'

  export default {
    name: 'detail',
    async fetch({store}) {
      await fetchCoupons({store})
      await fetchHotGoods({store})
    },
    data: () => ({
      title: 'Coupons | ' + baseTitle
    }),
    components: {
      Crumbs,
      PopularStores,
      CouponsItems
    },
    computed: {
      ...mapState(['coupons'])
    },
    methods: {
      ...mapActions([
        'getBehaviorAdd'
      ])
    }
  }
</script>
