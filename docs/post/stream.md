---
title: 多叉树数据流动图
lang: zh-CN
author: fireworks99
date: '2025-02-06'
---

<script setup>
import data from '@docs/post/data/stream.json'
</script>

## 1.效果

<EChartsFlyLine :rawData="data" width="730px" height="460px" />



## 2.数据

~~~js
//  data/stream.js
const rawData = {
  "name": "公司高层",
  "label": {
    "position": "top"
  },
  "children": [
    {
      "name": "人力资源中心",
      "lineStyle": {
        "color": "red",
        "type": "solid"
      },
      "children": [
        {
          "name": "招聘部",
          "lineStyle": {
            "color": "red",
            "type": "dashed"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "培训部",
          "lineStyle": {
            "color": "red",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "薪酬福利部",
          "lineStyle": {
            "color": "red",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "员工关系部",
          "lineStyle": {
            "color": "red",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        }
      ],
      "label": {
        "position": "top"
      }
    },
    {
      "name": "软件技术中心",
      "lineStyle": {
        "color": "green",
        "type": "solid"
      },
      "children": [
        {
          "name": "需求部",
          "lineStyle": {
            "color": "green",
            "type": "dashed"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "开发部",
          "lineStyle": {
            "color": "green",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "测试部",
          "lineStyle": {
            "color": "green",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "运维部",
          "lineStyle": {
            "color": "green",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        }
      ],
      "label": {
        "position": "top"
      }
    },
    {
      "name": "硬件生产中心",
      "lineStyle": {
        "color": "green",
        "type": "solid"
      },
      "children": [
        {
          "name": "研发设计部",
          "lineStyle": {
            "color": "green",
            "type": "dashed"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "生产制造部",
          "lineStyle": {
            "color": "green",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "质量控制部",
          "lineStyle": {
            "color": "green",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "供应链管理部",
          "lineStyle": {
            "color": "green",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        }
      ],
      "label": {
        "position": "top"
      }
    },
    {
      "name": "市场营销中心",
      "lineStyle": {
        "color": "red",
        "type": "solid"
      },
      "children": [
        {
          "name": "市场调研部",
          "lineStyle": {
            "color": "red",
            "type": "dashed"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "品牌推广部",
          "lineStyle": {
            "color": "red",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        },
        {
          "name": "销售部",
          "lineStyle": {
            "color": "red",
            "type": "solid"
          },
          "label": {
            "position": "right"
          }
        }
      ],
      "label": {
        "position": "top"
      }
    },
    {
      "name": "财务中心",
      "lineStyle": {
        "color": "red",
        "type": "solid"
      },
      "label": {
        "position": "right"
      }
    },
    {
      "name": "客户服务中心",
      "lineStyle": {
        "color": "red",
        "type": "dashed"
      },
      "label": {
        "position": "right"
      }
    }
  ]
}
~~~





## 3.代码

~~~html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>ECharts 动态飞线图</title>
  <script src="./js/echarts.min.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    #chart {
      width: 730px;
      height: 460px;
    }
  </style>
</head>

<body>
  <div id="chart"></div>
  <script src="./data/stream.js"></script>
  <script>
    const chart = echarts.init(document.getElementById('chart'));

    const nodeMap = new Map();

    const nodes = [];
    const links = [];

    function flattenTree(node, parentName = null, level = 0) {
      if (!nodeMap.has(node.name)) {
        const { children, ...newNode } = node;
        newNode.level = level;
        nodeMap.set(node.name, newNode);
        nodes.push(newNode);
      }

      if (parentName !== null) {
        links.push({
          source: node.name,
          target: parentName,
          lineStyle: node.lineStyle
        });
      }

      if (node.children && node.children.length > 0) {
        node.children.reverse().forEach(child => {
          flattenTree(child, node.name, level + 1);
        });
      }
    }

    flattenTree(rawData);

    // 计算节点坐标
    function calcSubtreeSize(node) {
      if (!node.children || node.children.length === 0) {
        node._subtreeSize = 1;
        return 1;
      }

      let sum = 0;
      node.children.forEach(child => {
        sum += calcSubtreeSize(child);
      });

      node._subtreeSize = sum;
      return sum;
    }
    calcSubtreeSize(rawData);

    const levelGap = 120; // 横向层间距
    const nodeGap = 40;  // 纵向最小间距

    function layout(node, depth = 0, top = 0) {
      const height = node._subtreeSize * nodeGap;

      // 当前节点位置
      const x = depth * levelGap;
      const y = top + height / 2;

      const graphNode = nodeMap.get(node.name);
      graphNode.x = x;
      graphNode.y = y;
      graphNode.value = [x, y];

      if (!node.children || node.children.length === 0) return;

      let currentTop = top;
      node.children.forEach(child => {
        const childHeight = child._subtreeSize * nodeGap;
        layout(child, depth + 1, currentTop);
        currentTop += childHeight;
      });
    }
    layout(rawData, 0, 0);


    // 生成飞线数据 - 使用 path 属性替代 coords
    const linesData = [];

    links.forEach(link => {
      const startNode = nodeMap.get(link.source);
      const endNode = nodeMap.get(link.target);
      if (startNode && endNode) {
        const style = startNode.lineStyle;
        if (style && style.color === 'green' && style.type === 'solid') {
          linesData.push({
            fromName: link.source,
            toName: link.target,
            coords: [[startNode.x, startNode.y], [endNode.x, endNode.y]]
          });
        }
      }
    });

    const option = {
      grid: {
        left: '10%',
        right: '22%',
        top: '5%',
        bottom: '5%',
      },
      xAxis: {
        show: false,
        // show: true,
      },
      yAxis: {
        show: false,
        // show: true,
      },
      series: [
        // 动态飞线
        {
          name: 'dynamic',
          type: 'lines',
          coordinateSystem: 'cartesian2d',
          effect: {
            show: true,
            smooth: false,
            symbol: "arrow",
            color: 'rgba(55,155,255,1)',
            symbolSize: 12
          },
          data: linesData,
          lineStyle: {
            color: 'transparent'
          }
        },
        // 节点
        {
          name: 'base',
          type: 'graph',
          layout: 'none',
          coordinateSystem: 'cartesian2d',
          data: nodes,
          links: links,
          roam: true,
          label: {
            show: true,
            rotate: 0,
            fontSize: '16px',
            color: '#000',   // 文字颜色
            backgroundColor: 'transparent', // 可选
            borderColor: 'transparent',     // 去掉描边
            borderWidth: 0
          },
          itemStyle: {
            color: function (params) {
              const colors = ['#5470c6', '#fac858', '#73c0de'];
              return colors[params.data?.level || 0];
            },
            borderColor: '#fff',
            borderWidth: 2,
            shadowBlur: 5,
            shadowColor: 'rgba(0,0,0,0.2)'
          },
          lineStyle: {
            width: 2,
            opacity: .7
          }
        }
      ]
    }

    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
  </script>
</body>

</html>
~~~