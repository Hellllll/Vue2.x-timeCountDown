<template>
  <div id="app">
    <input class="input_phoneNum" type="text" placeholder="手机号" required 
            v-model="phoneNumber" maxlength="11">
    <!-- 定时器组件使用方式 -->
    <time-count-downer ref="timeCountDowner" :phone-number="phoneNumber"
      :second="60" text-value="${second}s后可再次发送">
    </time-count-downer>   
  </div>
</template>

<script>
import timeCountDowner from './components/timeCountDowner'

export default {
  data() {
    return {
      phoneNumber: null, //输入的电话号码
    }
  },
  components: {
    timeCountDowner
  },
  methods: {
    // 用于销毁组件
    unMount: function() {
      this.$refs.timeCountDowner.$destroy();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input_phoneNum {
  height: 26px;
  -webkit-appearance: none;
  color: #666;
  outline: none;
  border: 1px solid #ccc;
  box-sizing: border-box;
  text-indent: 4px;
}
</style>
