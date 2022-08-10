<template>
  <div id="navigation" class="brand-filter">
    <dl>
      <dt>Category：</dt>
      <dd>
        <a @click="changeCategorys('')" :class="[categoryState==undefined?'on':'']" href="javascript:;">All</a>
        <a v-for="(c, index) in categorys" :key="index" :class="[categoryState==c.name?'on':'']" @click="changeCategorys(c.name)" href="javascript:;">{{c.name}} </a>
      </dd>
    </dl>
    <dl>
      <dt>Mall：</dt>
      <dd>
        <a @click="changeMalls('')" :class="[mallState==undefined?'on':'']" href="javascript:;">All</a>
        <a v-for="(m, index) in malls" :key="index" :class="[mallState==m.name?'on':'']"  @click="changeMalls(m.name)" href="javascript:;">{{m.name}} </a>
      </dd>
    </dl>
  </div>
</template>
<script>
  import {createUrl} from '../utils/utils'
export default {
    name: 'navigation',
    props: {
      malls: {
        default: []
      },
      categorys: {
        default: []
      }
    },
    computed: {
      categoryState() {
        return this.$route.query.category
      },
      mallState() {
        return this.$route.query.mall
      }
    },
    methods: {    // 绑定事件的关键代码
      changeCategorys: function (category) {
        var obj = Object.assign({}, this.$route.query, {category: category, page: 1, key: ''})
        var d = createUrl(obj)
        this.$router.push({path: '/?' + d})
      },
      changeMalls: function (mall) {
        var obj = Object.assign({}, this.$route.query, {mall: mall, page: 1, key: ''})
        var d = createUrl(obj)
        this.$router.push({path: '/?' + d})
      }

    }

  }
</script>
<style>

</style>
