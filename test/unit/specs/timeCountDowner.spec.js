import Vue from 'vue'
import timeCountDowner from '@/components/timeCountDowner'

describe('timeCountDowner.vue', () => {
  
  //检查原始组件选项 
  it('has a destroyed hook', () => {
    expect(typeof timeCountDowner.destroyed).toBe('function')
  })

  // 评估原始组件中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof timeCountDowner.data).toBe('function')
    const defaultData = timeCountDowner.data()
    expect(defaultData.wrongPhoneFormat).toBe(false)
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct computedTime', () => {
    const Constructor = Vue.extend(timeCountDowner)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.compute_time').textContent)
      .toEqual('请耐心等待0s')
  })
})