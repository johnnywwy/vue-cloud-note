<template>
  <div id="sidebar">
    <Avatar></Avatar>
    <div class="icons">
      <router-link to="/note" title="笔记">
        <i class="iconfont icon-note"/>
      </router-link>
      <router-link to="/notebooks" title="笔记本">
        <i class="iconfont icon-notebook"/>
      </router-link>
      <router-link to="/trash" title="回收站">
        <i class="iconfont icon-trash"/>
      </router-link>
    </div>
    <div class="logout" @click="onLogout">
      <i class="iconfont icon-logout"/>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'
import {mapActions} from 'vuex'

export default {
  components: {
    Avatar
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    onLogout() {
      this.logout({path: '/login'})
    }
  }

}
</script>

<style scoped lang="less">

#sidebar {
  position: relative;
  width: 56px;
  text-align: center;
  background-color: #2c333c;

  > .icons {
    margin-top: 15px;

    > a {
      padding: 6px 0;
      display: block;
    }

    .router-link-active {
      background-color: #5e6266;
    }
  }

  > .logout {
    //border: 1px solid red;
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  .iconfont {
    color: #fff;
  }
}


</style>
