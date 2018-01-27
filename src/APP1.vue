<template>
  <div id="app">
    <form>
      <input class="input_phoneNum" type="text" placeholder="请输入手机号码" required :right_phone_num='verifyPhone'>
      <time-count-down ref="timeCountDown" :second="60">
      </time-count-down>
    </form>    
  </div>
</template>

<script>
import timeCountDown from './components/timeCountDown'
import {bus} from './bus'

export default {
  name: 'App',
  data () {
    return {
      verifyPhone: true //判断电话号码格式是否正确
    }
  },
  mounted () {
    console.log(bus);
    bus.$on('run', this.sendCode);
  },
  components: {
    timeCountDown
  },
  methods: {
    sendCode() {
      console.log(this);
      this.$refs.timeCountDown.setDisabled(true); //设置按钮不可用
      this.$http.post("sys/sendCode?_"+$.now()).then(function(data) {
        if (data.status) {
          this.$refs.timeCountDown.start(); //启动倒计时
        } else {
          this.$refs.timeCountDown.stop(); //停止倒计时
        }
      });
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
  height: 30px;
  -webkit-appearance: none;
  color: #666;
  outline: none;
  border: 1px solid #666;
  box-sizing: border-box;
}
</style>
