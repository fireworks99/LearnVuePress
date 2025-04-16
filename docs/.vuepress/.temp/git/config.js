import { GitContributors } from "C:/Users/Administrator/Documents/Web_FE/VuePress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-vite@2.0.0-rc.21_@typ_zkankr3z7u2ozpzys5tekq34gi/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/Administrator/Documents/Web_FE/VuePress/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-vite@2.0.0-rc.21_@typ_zkankr3z7u2ozpzys5tekq34gi/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
