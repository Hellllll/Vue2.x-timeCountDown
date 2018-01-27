<template>
    <button id="time_countdown_compontent" class="time_btn" :disabled="disabled || timeCount > 0"
            @click='run'
            :class="{right_phone_number: rightPhoneNum}">{{textValue}}
    </button>
</template>

<script>
import {bus} from '../bus.js'
export default {
  name: 'timeCountDown',
  data () {
    return {
      timeCount: 0, 
    }
  },
  created () {

  },
  props: {
    second: {
      type: Number,
      default: 60
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rightPhoneNum: {
      type: Boolean,
      default: false
    }
  },
  mounted () {

  },
  computed:{
    textValue() {
      return this.time > 0 ? this.time + 's后重获取' : '获取验证码';
    }
  },
  methods: {
    run: function () {
      console.log(bus);
     bus.$emit('run');
    },
    start: function(){
     this.timeCount = this.second;
     this.timer();
    },
    stop: function(){
     this.timeCount = 0;
     this.disabled = false;
    },
    setDisabled: function(val){
     this.disabled = val;
    },
    timer: function () {
      if (this.timeCount > 0) {
        this.timeCount--;
        setTimeout(this.timer, 1000);
      } else {
       this.disabled = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .time_btn {
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    background-color: #ccc; 
    -webkit-appearance: none;
    border: none;
    color: #fff;
  }
  .right_phone_number {
    background-color: #4cd964;
  }
</style>
