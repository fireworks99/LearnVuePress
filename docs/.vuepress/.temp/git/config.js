import { GitContributors } from "D:/Code/LearnVuePress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-vite@2.0.0-rc.21_@typ_6xnpe7woci2eh7amy2e7p4k3du/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/Code/LearnVuePress/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.94_vuepress@2.0.0-rc.21_@vuepress+bundler-vite@2.0.0-rc.21_@typ_6xnpe7woci2eh7amy2e7p4k3du/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
