# 基于Vue2.X倒计时组件使用说明

Vue 倒计时 组件

---

vue-cli@2.9.2

目标功能

- [x] 实现倒计时功能
- [ ] 适应多场景且设计良好的可复用组件
- [x] 以秒为单位，可配置
- [X] 支持自定义文案
- [X] 按钮多种状态（手机号格式不对，不允许点击等）
- [X] 点击后，允许通过某种机制reset——需要某后端接口
- [ ] 按钮可能会被unmount——组件销毁？
- [ ] 不属于组件需要的其他属性自动传递下去？？？
- [X] 单元测试——待完善
- [X] 使用demo——使用Vue-cli构建的系项目，可通过APP.vue看到对子组件的引用
- [X] 代码规范和使用文档

父组件引用子组件的方式：
```
    <!-- 定时器组件使用方式 -->
    <time-count-downer ref="timeCountDowner" :phone-number="phoneNumber"
       :second="30"  text-value="${second}s后可再次发送">
    </time-count-downer>
```
其中`phone-number`、`second`、`text-value`属性通过父组件下发到子组件中。

demo运行效果：
    
    npm run dev
进行单元测试查看：
    
    npm run test  





