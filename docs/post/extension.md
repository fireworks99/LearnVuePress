---
title: 扩展
lang: zh-CN
author: fireworks99
date: '2024-08-09'
---

# VuePress扩展



## 1.使用Vue

[在markdown中使用vue](https://vuepress.github.io/zh/guide/markdown.html#%E5%9C%A8-markdown-%E4%B8%AD%E4%BD%BF%E7%94%A8-vue)

[Markdown 与 Vue SFC](https://vuepress.github.io/zh/advanced/cookbook/markdown-and-vue-sfc.html)



_你好， {{ msg }}_

<RedDiv>

_当前计数为： {{ count }}_

</RedDiv>

<button @click="count++">点我！</button>

<script setup>
import { h, ref } from 'vue'
const RedDiv = (_, ctx) =>
  h(
    'div',
    {
      class: 'red-div',
    },
    ctx.slots.default(),
  )
const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>
<style>
.red-div {
  color: red;
}
</style>



## 2.其他

