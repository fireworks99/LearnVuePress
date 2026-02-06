<template>
  <div ref="chartRef" :style="{
    width,
    height
  }" />
</template>

<script lang="ts">
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'

interface TreeNode {
  name: string
  children?: TreeNode[]
  lineStyle?: {
    color?: string
    type?: string
  }
  [key: string]: any
}

export default {
  name: 'TreeGraph',

  props: {
    rawData: {
      type: Object as () => TreeNode,
      required: true
    },
    width: {
      type: String,
      default: '730px'
    },
    height: {
      type: String,
      default: '460px'
    }
  },

  data() {
    return {
      chart: null as echarts.ECharts | null
    }
  },

  mounted() {
    if (!this.$refs.chartRef) return

    this.chart = echarts.init(this.$refs.chartRef as HTMLDivElement)
    this.chart.setOption(this.buildOption(this.rawData))
    window.addEventListener('resize', this.resize)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.resize)
    this.chart?.dispose()
    this.chart = null
  },

  watch: {
    rawData: {
      deep: true,
      handler(data: TreeNode) {
        this.chart?.setOption(this.buildOption(data), true)
      }
    }
  },

  methods: {
    resize() {
      this.chart?.resize()
    },

    buildOption(rawData: TreeNode): EChartsOption {
      const nodeMap = new Map<string, any>()
      const nodes: any[] = []
      const links: any[] = []

      function flattenTree(node: TreeNode, parentName: string | null = null, level: number = 0) {
        if (!nodeMap.has(node.name)) {
          const { children, ...newNode } = node
          newNode.level = level
          nodeMap.set(node.name, newNode)
          nodes.push(newNode)
        }

        if (parentName) {
          links.push({
            source: node.name,
            target: parentName,
            lineStyle: node.lineStyle
          })
        }

        node.children?.reverse().forEach(child => {
          flattenTree(child, node.name, level + 1)
        })
      }

      flattenTree(rawData)

      // 计算子树大小
      function calcSubtreeSize(node: TreeNode): number {
        if (!node.children || node.children.length === 0) {
          node._subtreeSize = 1
          return 1
        }
        let sum = 0
        node.children.forEach(c => (sum += calcSubtreeSize(c)))
        node._subtreeSize = sum
        return sum
      }

      calcSubtreeSize(rawData)

      const levelGap = 120
      const nodeGap = 40

      function layout(node: TreeNode, depth = 0, top = 0) {
        const height = node._subtreeSize * nodeGap
        const x = depth * levelGap
        const y = top + height / 2

        const graphNode = nodeMap.get(node.name)
        graphNode.x = x
        graphNode.y = y
        graphNode.value = [x, y]

        if (!node.children) return

        let currentTop = top
        node.children.forEach(child => {
          const childHeight = child._subtreeSize * nodeGap
          layout(child, depth + 1, currentTop)
          currentTop += childHeight
        })
      }

      layout(rawData)

      // 飞线
      const linesData: any[] = []

      links.forEach(link => {
        const start = nodeMap.get(link.source)
        const end = nodeMap.get(link.target)
        const style = start?.lineStyle

        if (style?.color === 'green' && style?.type === 'solid') {
          linesData.push({
            fromName: link.source,
            toName: link.target,
            coords: [
              [start.x, start.y],
              [end.x, end.y]
            ]
          })
        }
      })

      return {
        grid: {
          left: '10%',
          right: '22%',
          top: '5%',
          bottom: '5%'
        },
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            name: 'dynamic',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            effect: {
              show: true,
              symbol: 'arrow',
              color: 'rgba(55,155,255,1)',
              symbolSize: 12
            },
            data: linesData,
            lineStyle: { color: 'transparent' }
          },
          {
            name: 'base',
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            data: nodes,
            links,
            roam: true,
            label: {
              show: true,
              fontSize: 16,
              color: '#000'
            },
            itemStyle: {
              color: (params: any) => {
                const colors = ['#5470c6', '#fac858', '#73c0de']
                return colors[params.data?.level || 0]
              },
              borderColor: '#fff',
              borderWidth: 2,
              shadowBlur: 5,
              shadowColor: 'rgba(0,0,0,0.2)'
            },
            lineStyle: {
              width: 2,
              opacity: 0.7
            }
          }
        ]
      }
    }
  }
}
</script>
