<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">PAGE NOTFOUND</h1>
    <h1 v-else>Application error occurred</h1>
    <nuxt-link to="/notFound">NOT FOUND</nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'notFound' // 你可以为错误页面指定自定义的布局
  }
</script>
