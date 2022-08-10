<!--点赞模块-->
<template>
  <div class="VueStar" v-if="id">
    <div class="VueStar__ground">
      <div class="VueStar__icon" @click="toggle" :class="AnimateClass" >
        <icon name="upvote" scale="3" :style='{color:ColorValue}' slot="icon" ></icon>
      </div>
      <div class="VueStar__decoration" :class="{'VueStar__decoration--active':active}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VueStar',
    props: {
      animate: {
        default: 'animated rotateIn'
      },
      color: {
        default: '#eb7350'
      },
      getThumbsAdd: {
        type: Function
      },
      id: {type: Number}
    },
    methods: {
      toggle() {
        if (this.active) return
        var self = this
        this.active = true
        this.toggleAnimate = true
        this.toggleColor = true
        this.getThumbsAdd({id: this.id})
        setTimeout(function () {
          self.active = false
          self.toggleAnimate = false
        }, 1000)
      }
    },
    data() {
      return {
        active: false,
        toggleAnimate: false,
        toggleColor: false
      }
    },
    computed: {
      AnimateClass() {
        return this.toggleAnimate ? this.animate : ''
      },
      ColorValue() {
        return this.toggleColor ? this.color : '#ddd'
      }
    }
  }
</script>

<style >
  .VueStar{
    position: absolute;
    cursor: pointer;
  }
  .VueStar__ground {
    width: 50px;
    height: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .VueStar__icon {
    z-index: 888;
  }
  .VueStar__decoration {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: url(../assets/images/specialEffects.png) no-repeat;
    background-size:cover;
    background-position: 0 0;
    transition: background-position 1s steps(25);
    transition-duration: 0s;
  }
  .VueStar__decoration--active{
    transition-duration: 1s;
    background-position: -2500px 0;
  }
</style>
