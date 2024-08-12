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

```js
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
```

```vue-html
<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>
```

  </CodeGroupItem>

  <CodeGroupItem title="组合式">

```js
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
```

```vue-html
<template>
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

  --vt-shadow-1: 0 1px 2px rgba(0, 0, 0, .04), 0 1px 2px rgba(0, 0, 0, .06);
  --vt-shadow-2: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07);
  --vt-shadow-3: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
  --vt-shadow-4: 0 14px 44px rgba(0, 0, 0, .12), 0 3px 9px rgba(0, 0, 0, .12);
  --vt-shadow-5: 0 18px 56px rgba(0, 0, 0, .16), 0 4px 12px rgba(0, 0, 0, .16);

  --vt-c-bg: var(--vt-c-white);
  --vt-c-bg-soft: var(--vt-c-white-soft);
  --vt-c-bg-mute: var(--vt-c-white-mute);
  --vt-c-divider: var(--vt-c-divider-light-1);
  --vt-c-divider-light: var(--vt-c-divider-light-2);
  --vt-c-divider-inverse: var(--vt-c-divider-dark-1);
  --vt-c-divider-inverse-light: var(--vt-c-divider-dark-2);
  --vt-c-text-1: var(--vt-c-text-light-1);
  --vt-c-text-2: var(--vt-c-text-light-2);
  --vt-c-text-3: var(--vt-c-text-light-3);
  --vt-c-text-4: var(--vt-c-text-light-4);
  --vt-c-text-code: var(--vt-c-text-light-code);
  --vt-c-text-inverse-1: var(--vt-c-text-dark-1);
  --vt-c-text-inverse-2: var(--vt-c-text-dark-2);
  --vt-c-text-inverse-3: var(--vt-c-text-dark-3);
  --vt-c-text-inverse-4: var(--vt-c-text-dark-4);
  --vt-c-brand: var(--vt-c-green);
  --vt-c-brand-light: var(--vt-c-green-light);
  --vt-c-brand-dark: var(--vt-c-green-dark);
  --vt-c-brand-highlight: var(--vt-c-brand-dark);
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
    cursor: pointer;
  }
}
```

## 3.其他

