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
  <CodeGroupItem title="选项式">

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  {{ count }}
  <button @click="count++">Count is: {{ count }}</button>
</template>
```

  </CodeGroupItem>

  <CodeGroupItem title="组合式">

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  {{ count }}
  <button @click="count++">Count is: {{ count }}</button>
</template>
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


## 2.修改样式

[样式](https://ecosystem.vuejs.press/zh/themes/default/styles.html)


```scss title=".vuepress/styles/palette.scss"
:root {
  --c-code-group-tab-bg: var(--code-c-bg);
}
```

```scss title=".vuepress/styles/index.scss"
.demo {
  padding: 22px 24px;
  border-radius: 8px;
  box-shadow: var(--vt-shadow-2);
  margin-bottom: 1.2em;
  transition: background-color .5s ease;

  button {
    background-color: var(--vt-c-bg-mute);
    transition: background-color .5s;
    padding: 5px 12px;
    border: 1px solid var(--vt-c-divider);
    border-radius: 8px;
    font-size: .9em;
    font-weight: 600;
  }
}
```

## 3.其他

