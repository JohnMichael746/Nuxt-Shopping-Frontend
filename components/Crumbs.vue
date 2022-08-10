<template>
	<div class="crumbs">
    current position：
    <div class="crumbsCate">
      <a href="/">
        <span>Home Page</span>
      </a>
    </div>
    <span class="arrow">&gt;</span>
    {{Particulars}}
  </div>
</template>

<script>
  export default{
    name: 'crumbs',
    props: {
      Particulars: {
        default: 'Particulars'
      }
    }
  }
</script>
