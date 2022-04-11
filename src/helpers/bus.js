import Vue from 'vue'

export default new Vue()

/* 使用方法：
import Bus from '../helper/bus'


绑定事件：
Bus.$on('test',msg=>{
  console.log(msg)
})

触发事件：
Bus.$emit('test','hello')

*/
