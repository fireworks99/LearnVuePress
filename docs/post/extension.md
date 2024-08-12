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



<CodeGroup>
  <CodeGroupItem title="选项式API">

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```

  </CodeGroupItem>

  <CodeGroupItem title="组合式API">

```js
import { createApp, ref } from 'vue'

createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
}).mount('#app')
```

  </CodeGroupItem>

</CodeGroup>

**结果展示**

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<div class="demo">
  <button @click="count++">
    Count is: {{ count }}
  </button>
</div>


## 2.其他

