import { CodeTabs } from "C:/Users/Administrator/Documents/Web_FE/VuePress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.94_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuepress+b_qszcgueowlujq5255n5g6q2deq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/Users/Administrator/Documents/Web_FE/VuePress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.94_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuepress+b_qszcgueowlujq5255n5g6q2deq/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/Users/Administrator/Documents/Web_FE/VuePress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.94_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuepress+b_qszcgueowlujq5255n5g6q2deq/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
