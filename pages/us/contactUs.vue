<template>
  <div>
    <crumbs Particulars="Contact Us"></crumbs>
    <div class="product detail">
      <div class="appendix">
        <h1>Contact Us</h1>
        <div class="items"><span>Name:</span><input v-model="name" maxlength="50"></div>
        <div class="items"><span>Contact Email:</span><input v-model="email" maxlength="50"></div>
        <div class="items"><span>Phone:</span><input v-model="phone" maxlength="20"></div>
        <div class="items"><span>Problems/Comments:</span><textarea v-model="content" maxlength="2000"></textarea></div>
        <div class="items">
          <div class="submit" @click="submit">Submit</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Crumbs from '@/components/Crumbs.vue'
  import { mapState } from 'vuex'
  export default{
    name: 'contactUs',
    components: {
      Crumbs
    },
    methods: {
      submit() {
        if (!this.email) {
          this.$toast.center('The email address cannot be empty')
          return
        }
        if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(this.email)) {
          this.$toast.center('Please fill in the correct email')
          return
        }
        if (!this.content) {
          this.$toast.center('The content or feedback cannot be empty')
          return
        }
        this.$store.dispatch('getContactUs', {name: this.name, email: this.email, phone: this.phone, content: this.content})
      }
    },
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        content: ''
      }
    },
    computed: {
      ...mapState(['contactUsFlag'])
    },
    watch: {
      contactUsFlag(newValue, oldValue) {
        if (newValue && !oldValue) {
          this.$toast.center('success')
          this.name = ''
          this.email = ''
          this.phone = ''
          this.content = ''
        }
      }
    }
  }
</script>
