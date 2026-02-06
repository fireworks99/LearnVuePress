import { defineClientConfig } from '@vuepress/client'
import EChartsFlyLine from './components/EChartsFlyLine.vue'
import './styles/index.scss'

export default defineClientConfig({
  enhance({ app }) {
    app.component('EChartsFlyLine', EChartsFlyLine)
  }
})
