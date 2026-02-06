import CodeTabs from "D:/Code/LearnVuePress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuepress+b_kjevyv4tqoh3pahr3y2jk4nnjm/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import Tabs from "D:/Code/LearnVuePress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuepress+b_kjevyv4tqoh3pahr3y2jk4nnjm/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/Code/LearnVuePress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuepress+b_kjevyv4tqoh3pahr3y2jk4nnjm/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
