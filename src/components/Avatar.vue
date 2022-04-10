<template>
  <span :title="user.username">{{ slug }}</span>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'johnny'
      },
      slug: 'J'
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
  text-transform: uppercase;/*这个关键字强制所有字符被转换为大写。*/
}
</style>
