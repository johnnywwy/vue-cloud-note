<template>
  <span :title="username">{{ slug }}</span>
</template>

<script>
import Auth from '../apis/auth'
import Bus from '../helpers/bus'

export default {
  data() {
    return {
      username: '未登录',
    }
  },
  created() {
    Bus.$on('userInfo', user => {
      this.username = user.username
    })
    Auth.getInfo()
      .then(res => {
        if (res.isLogin) {
          this.username = res.data.username
        }
      })
  },
  computed: {
    slug() {
      return this.username.charAt(0)
    }
  }
};
</script>

<style scoped>
span {
  display: inline-block;
  /*border: 1px solid red;*/
  color: white;
  text-align: center;
  line-height: 30px;
  width: 30px;
  height: 30px;
  margin-top: 15px;
  background: #f2b81c;
  border-radius: 50%;
  font-weight: bold;
  text-shadow: 1px 0 1px #795c19;
  font-size: 18px;
  text-transform: uppercase; /*这个关键字强制所有字符被转换为大写。*/
}
</style>
