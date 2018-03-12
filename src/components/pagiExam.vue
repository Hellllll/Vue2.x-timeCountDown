<docs> 
    分页组件
</docs>
<template>
    <ul class="pagination">
        <li v-if="page.count">第{{page.count}}页</li>
        <li v-if="num !== 1" :class="{disabled:num===1}" @click="prev">
            <i>&#xe915;</i>
        </li>
        <template v-for="item in pageObj">
            <li v-if="item.page" :key="item.page" :class="{active:item.active}" @click="change(item.page)">{{item.page}}</li>
            <li v-else>...</li>
        </template>
        <li v-if="num !== sum" @click="next">
            <i>&#xe914;</i>
        </li>
        <li class="stepTo">
            跳至
            <input v-model.number='selfPage' @input='valid' @change='change(selfPage)' type="text">页
        </li>
    </ul>
</template>

<script>
    // 待明确的几个问题
    // page.num从何获得
    // 省略标点该怎样控制 前后都有的时候怎么控制的呢
    // input 输入框中什么时候触发change事件
    export default {
        props: {
            page: Object
        },
        data() {
            return {
                selfPage: ''
            }
        },
        computed: {
            num: {
                get() {
                    return +this.page.num
                },
                set(val) {
                    this.page.num = val
                }
            },
            sum: {
                get() {
                    return +this.page.sum || 1
                }
            },
            pageObj() {
                // 这段代码不是很懂
                const result = []
                const page = this.num,
                      pageSum = this.sum
                const begin = page - 1,
                      end = page + 1
                if (begin - 1 > 1) {
                    result.push({
                        page: 1,
                        active: page === 1
                    })
                    result.push({
                        omission: true
                    })
                }
                let i = begin - 1 > 1 ? begin : 1
                const len = end + 1 > pageSum ? pageSum : end + 1
                for (; i <= len; i++) {
                    if (i === end + 1 && pageSum !== i) {
                        result.push({
                            omission: true
                        })
                    } else if (pageSum - i >= 1 || i < end + 1) {
                        result.push({
                            page: i,
                            active: i === page
                        })
                    }
                }
                if (pageSum - end >= 1) {
                    result.push({
                        page: pageSum,
                        active: pageSum === page
                    })
                }
                return result
            }
        },
        methods: {
            change(page) {
                if (page >= 1 && page <= this.sum) {
                    this.num = page
                }
            },
            prev() {
                if (this.page.num !== 1) {
                    this.num--
                }
            },
            next() {
                if (this.num !== +this.pageSum) {
                    this.num++
                }
            },
            valid() {
                if (this.selfPage > this.sum) {
                    this.selfPage = this.sum
                } else if (this.selfPage < 0) {
                    this.selfPage = 1
                }
            }
        }
    }
</script>

<style>

</style>
