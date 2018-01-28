<template>
    <div id="timerBtn"> 
       <button @click.prevent="getVerifiedCode"
          :class="{right_phone_number: rightPhoneNumber,
                   wrong_phone_format: wrongPhoneFormat}"
          v-show='!computedTime'>获取验证码</button>
       <button class="compute_time" v-show="computedTime">{{computedMessage}}</button> 
    </div>  
</template>

<script>
import {mobileCode, checkExsis} from '../service/getData'
export default {
    name: 'timeCountDowner',
    data() {
        return {
            computedTime: 0,
            wrongPhoneFormat: false,
        }
    },
    props: {
        textValue: {
            type: String,
            default: ''
        },
        second: {
            type: Number,
            default: 60
        },
        phoneNumber: {
            type: String
        }
    },
    computed: {
        rightPhoneNumber: function () {
            let regx = /^1\d{10}$/gi.test(this.phoneNumber);
            if (this.phoneNumber && !regx) {
                this.wrongPhoneFormat = true;
            } else {
                this.wrongPhoneFormat = false;               
            }     
            return regx;
        },
        computedMessage: function () {
            return this.textValue.replace(/\$\{second\}/g, this.computedTime);
        }
    },
    methods: {
        async getVerifiedCode() {
            if (this.rightPhoneNumber) {
                this.setTimer();
                //判读用户是否存在
                let exsis = await checkExsis(this.phoneNumber, 'mobile');        
                if (exsis.message) {
                    //发送短信验证码
                    let res = await mobileCode(this.phoneNumber);
                    if (res.message) {
                        //获取到验证码之后进行一些操作
                        return 
                    }
                    return
                } else if (!exsis.is_exists) {
                    //如果用户不存在，就将按钮初始化原始状态
                    this.computedTime = 0;
                    return
                }
            }
        },
        setTimer() {
            this.computedTime = this.second;
            this.timer = setInterval(() => {
                this.computedTime--;
                if (this.computedTime === 0) 
                    clearInterval(this.timer);
            }, 1000)
        }
    },
    destroyed () {
        // 组件被销毁时调用
    }    
}
</script>

<style scoped>
#timerBtn {
    display: inline-block;
}
#timerBtn button{
    font-family: Helvetica Neue,Tahoma,Arial;
    padding: .28rem .4rem;
    border: 1px;
    border-radius: 0.15rem;
    outline: none;
    color: #fff;
}
button {
    background-color: #919191;
}
.right_phone_number{
    background-color: #4cd964;
}
.wrong_phone_format {
    background-color: #F7C0B3;
}
</style>

