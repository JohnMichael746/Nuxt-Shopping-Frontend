<template>
  <div>
    <div class="headBar clearfix">
      <div class="headBar-inner">
        <div class="inner">
          <a href="javascript:;" class="logo" @click="gotoIndex">
            <img src="../assets/logo.png">
          </a>
          <div class="search">
            <div class="search-box">
              <input type="text" class="search-txt" v-model="search" @keyup.enter="doSearch">
              <span class="search-btn" @click="doSearch"></span>
            </div>
            <!-- <div class="hotword clearfix">
              <a v-for="(h,index) in hotWords" v-bind:class="{on:index%2 != 0}" @click="changePage(h.hotword)">{{h.hotword}}</a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div id="navBar" :class="searchBarFixed == true ? 'isFixedNav navBar clearfix' :'navBar clearfix'">
      <nav class="nav-inner">
        <ul>
          <li v-for="item in linkList" 
              :key="item.name" 
              :class="checkMenuAndCategory(queryCategory,item.name) || (!queryCategory && item.link===$route.path)?'on':''">
            <nuxt-link :to="item.link">{{item.name}}</nuxt-link>
          </li>
        </ul>
        <div class="headBar search-fixed" style="float:right;margin-right: 100px;height: 34px;">
          <input type="text" class="search-txt" v-model="search" @keyup.enter="doSearch" style="width: 150px;height: 30px;">
          <span class="search-btn2" @click="doSearch"></span>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
  import {createUrl} from '../utils/utils'
  export default {
    name: 'topSearch',
    data() {
      return {
        search: '',
        linkList: [{link: '/', name: 'Home'}, {link: '/coupons', name: 'Coupons'}, {link: '/gifts', name: 'Gifts'}, {link: '/?category=Beauty', name: 'Beauty'}, {link: '/?category=Clothing,%20Jewelry%20%26%20Bags', name: 'Clothing'}, {link: '/?category=Kids', name: 'Kids'}, {link: '/?category=Electronics', name: 'Electronics'}],
        searchBarFixed: false,
        offsetTop: 0, // 初始位置
        flag: false// 延后获取初始始位置的flag
      }
    },
    props: {
      hotWords: {
        default: () => []
      },
      behaviorFun: {
        type: Function
      }
    },
    computed: {
      queryCategory() {
        return this.$route.query.category
      }
    },
    methods: {    // 绑定事件的关键代码
      changePage: function (key) {
        var d = createUrl({page: 1, key: key})
        this.behaviorFun({type: 3, url: this.$route.fullPath, key: key})
        this.$router.push({path: '/?' + d})
      },
      doSearch: function () {
        var text = this.search.trim()
        if (text) {
          this.changePage(text)
//            this.search = '';
        }
      },
      gotoIndex: function () {
        var obj = Object.assign({}, this.$route.query, {page: 1, key: ''})
        var d = createUrl(obj)
        this.$router.push({path: '/?' + d})
      },
      handleScroll() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

        if (!this.flag) {
          this.flag = true
          this.offsetTop = document.querySelector('#navBar').offsetTop
        }
        if (scrollTop > this.offsetTop + 10) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      },
      checkMenuAndCategory(category, menu) {
        return category && menu && (category.toLowerCase().indexOf(menu.toLowerCase()) > -1)
      }
    },
    watch: {
      '$route'(to, from) {
        this.search = to.query.key
      }
    },
    created() {
      this.search = this.$route.query.key
    },
    mounted() {
      this.handleScroll()
      window.addEventListener('scroll', this.handleScroll)
      this.offsetTop = document.querySelector('#navBar').offsetTop

        // console.log(queryCategory);
    }

  }
</script>
<style>
  .isFixedNav{
    position:fixed;
    top:0px;
    z-index:9999;
    width: 100%;
  }
  .search-fixed{
    display: none;
  }
  .isFixedNav .search-fixed{
    display: block;
  }
</style>
