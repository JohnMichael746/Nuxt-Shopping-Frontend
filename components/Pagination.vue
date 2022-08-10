<template>
  <!--用Github 上插件-->
  <div id="pagination" class="pageBar clearfix">
    <ul>
      <li><a>&lt;&lt;</a></li>
      <li class="on">
        <a @click="changePage(1)">1</a>
      </li>
      <li>
        <a @click="changePage(1)">2</a>
      </li>
      <li>
        <a @click="changePage(1)">3</a>
      </li>
      <li><span>…</span></li>
      <li><a>100</a></li>
      <li><a>&gt;&gt;</a></li>
    </ul>
  </div>
</template>
<script>
  import qs from 'qs'
export default {
    name: 'pagination',
    methods: {    // 绑定事件的关键代码
      changePage: function (i) {
        var obj = Object.assign({}, this.$route.query, {page: i})
        var d = qs.stringify(obj)
        this.$router.push({path: '/?' + d})
      }
    }
  }
</script>
