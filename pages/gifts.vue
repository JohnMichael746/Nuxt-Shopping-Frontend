<template>
  <div v-title="title">
    <div id="content">
      <recommend :list="giftsForAll" hd="Gfits For All" :behaviorFun='getBehaviorAdd'></recommend>
      <recommend :list="giftsForHer" hd="Gfits For Her" :behaviorFun='getBehaviorAdd'></recommend>
      <recommend :list="giftsForHim" hd="Gfits For Him" :behaviorFun='getBehaviorAdd'></recommend>
      <recommend :list="giftsForKids" hd="Gfits For Kids" :behaviorFun='getBehaviorAdd'></recommend>
      <recommend :list="giftsForSenior" hd="Gfits For Senior" :behaviorFun='getBehaviorAdd'></recommend>
    </div>
  </div>
</template>
<script>
  import recommend from '../components/Recommend.vue'
  import { mapActions, mapState } from 'vuex'
  import { baseTitle } from '../utils/Global'
  import { fetchHotGoods, fetchGiftsForAll, fetchGiftsForHer, fetchGiftsForHim, fetchGiftsForKids, fetchGiftsForSenior } from '../utils/fetch'

  export default {
    name: 'index',
    async fetch({store}) {
      await fetchGiftsForAll({store})
      await fetchGiftsForHer({store})
      await fetchGiftsForHim({store})
      await fetchGiftsForKids({store})
      await fetchGiftsForSenior({store})
      await fetchHotGoods({store})
    },
    components: {
      recommend
    },
    data() {
      return {
        title: 'Gifts | ' + baseTitle
      }
    },
    methods: {    // 绑定事件的关键代码
      ...mapActions([
        'getBehaviorAdd'
      ])
    },
    computed: {
      ...mapState(['giftsForAll', 'giftsForHer', 'giftsForHim', 'giftsForKids', 'giftsForSenior']),
      flag() {
        if (this.$route.query.key) { return false } else return true
      }
    }
  }
</script>
