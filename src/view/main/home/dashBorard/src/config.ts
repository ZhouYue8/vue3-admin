import * as echarts from 'echarts';

const scaleData = [
  {
    name: 'stars数',
    value: 10,
  },
  {
    name: '活跃度',
    value: 20,
  },
  {
    name: 'issule',
    value: 20,
  },
  {
    name: '其他方面',
    value: 27,
  },
];
const rich = {
  white: {
    color: '#ddd',
    align: 'center',
    padding: [5, 0],
  },
};
const placeHolderStyle = {
  label: {
    show: false,
  },
  labelLine: {
    show: false,
  },
  color: 'rgba(0, 0, 0, 0)',
  borderColor: 'rgba(0, 0, 0, 0)',
  borderWidth: 0,
};
const data = [];
for (let i = 0; i < scaleData.length; i++) {
  data.push(
    {
      value: scaleData[i].value,
      name: scaleData[i].name,
      itemStyle: {
        borderWidth: 5,
        shadowBlur: 30,
        borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: '#7777eb',
          },
          {
            offset: 1,
            color: '#70ffac',
          },
        ]),
        shadowColor: 'rgba(142, 152, 241, 0.6)',
      },
    },
    {
      value: 4,
      name: '',
      itemStyle: placeHolderStyle,
    },
  );
}
const seriesObj = [
  {
    name: '',
    type: 'pie',
    clockwise: false,
    radius: [130, 150],
    emphasis: {
      scale: false,
    },
    itemStyle: {
      label: {
        show: true,
        position: 'outside',
        color: '#ddd',
        formatter: function (params: { value: number; name: string }) {
          let percent = 0;
          let total = 0;
          for (let i = 0; i < scaleData.length; i++) {
            total += scaleData[i].value;
          }
          percent = ((params.value / total) * 100).toFixed(
            0,
          ) as unknown as number;
          if (params.name !== '') {
            return params.name + '\n{white|' + '占比' + percent + '%}';
          } else {
            return '';
          }
        },
        rich: rich,
      },
      labelLine: {
        show: false,
      },
    },
    data: data,
  },
];
const dataX = [
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
  'XX街道',
]; //名称
const dataY = [
  20, 50, 15, 35, 50, 30, 40, 50, 60, 20, 50, 15, 35, 50, 30, 40, 50, 60,
]; //数据
let zoomShow = false;
if (dataY.length > 14) {
  zoomShow = true;
} else {
  zoomShow = false;
}
export const column = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '10%',
    right: '5%',
    left: '5%',
    bottom: '10%',
  },
  xAxis: [
    {
      type: 'category',
      data: dataX,
      axisLine: {
        lineStyle: {
          color: 'rgba(66, 192, 255, .3)',
        },
      },
      axisLabel: {
        interval: 0,
        margin: 10,
        color: '#05D5FF',

        fontSize: 11,

        rotate: '45',
      },
      axisTick: {
        //刻度
        show: false,
      },
    },
  ],
  yAxis: [
    {
      axisLabel: {
        padding: [3, 0, 0, 0],
        formatter: '{value}',
        color: 'rgba(95, 187, 235, 1)',

        fontSize: 11,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(66, 192, 255, .3)',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0)',
        },
      },
    },
  ],
  dataZoom: [
    //滚动条
    {
      show: zoomShow,
      type: 'slider',
      realtime: true,
      startValue: 0,
      endValue: 14,
      xAxisIndex: [0],
      top: '10',
      left: '30',
      height: 10,
      borderColor: 'rgba(0,0,0,0)',

      color: '#05D5FF',
    },
  ],
  series: [
    {
      type: 'bar',
      data: dataY,
      barWidth: '10',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(5, 213, 255, 1)', // 0% 处的颜色
            },
            {
              offset: 0.98,
              color: 'rgba(5, 213, 255, 0)', // 100% 处的颜色
            },
          ],
          false,
        ),
        shadowColor: 'rgba(5, 213, 255, 1)',
        shadowBlur: 4,
      },
      label: {
        show: true,
        lineHeight: 10,
        formatter: '{c}',
        position: 'top',
        color: '#fff',
        fontSize: 10,
      },
    },
  ],
};
export const cake = {
  tooltip: {
    show: true,
  },
  legend: {
    show: false,
  },
  toolbox: {
    show: false,
  },
  series: seriesObj,
};
export const line = {
  title: {
    text: '哎呦,不错哦',

    align: 'center',
    color: '#fff',
    fontSize: 20,

    top: '5%',
    left: 'center',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0, 255, 233,0)',
            },
            {
              offset: 0.5,
              color: 'rgba(255, 255, 255,1)',
            },
            {
              offset: 1,
              color: 'rgba(0, 255, 233,0)',
            },
          ],
          global: false,
        },
      },
    },
  },
  grid: {
    top: '15%',
    left: '5%',
    right: '5%',
    bottom: '15%',
    // containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        show: true,
      },
      splitArea: {
        // show: true,
        color: '#f00',
        lineStyle: {
          color: '#f00',
        },
      },
      axisLabel: {
        color: '#fff',
      },
      splitLine: {
        show: false,
      },
      boundaryGap: false,
      data: ['A', 'B', 'C', 'D', 'E', 'F'],
    },
  ],

  yAxis: [
    {
      type: 'value',
      min: 0,
      // max: 140,
      splitNumber: 4,
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
        margin: 20,

        color: '#d1e6eb',
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: '注册总量',
      type: 'line',
      // smooth: true, //是否平滑
      showAllSymbol: true,
      // symbol: 'image://./static/images/guang-circle.png',
      symbol: 'circle',
      symbolSize: 25,
      lineStyle: {
        color: '#6c50f3',
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 5,
        shadowOffsetX: 5,
      },
      label: {
        show: true,
        position: 'top',

        color: '#6c50f3',
      },
      itemStyle: {
        color: '#6c50f3',
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2,
      },
      tooltip: {
        show: false,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(108,80,243,0.3)',
            },
            {
              offset: 1,
              color: 'rgba(108,80,243,0)',
            },
          ],
          false,
        ),
        shadowColor: 'rgba(108,80,243, 0.9)',
        shadowBlur: 20,
      },
      data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
    },
    {
      name: '注册总量',
      type: 'line',
      // smooth: true, //是否平滑
      showAllSymbol: true,
      // symbol: 'image://./static/images/guang-circle.png',
      symbol: 'circle',
      symbolSize: 25,
      lineStyle: {
        color: '#00ca95',
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 5,
        shadowOffsetX: 5,
      },
      label: {
        show: true,
        position: 'top',
        color: '#00ca95',
      },

      itemStyle: {
        color: '#00ca95',
        borderColor: '#fff',
        borderWidth: 3,
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowBlur: 0,
        shadowOffsetY: 2,
        shadowOffsetX: 2,
      },
      tooltip: {
        show: false,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: 'rgba(0,202,149,0.3)',
            },
            {
              offset: 1,
              color: 'rgba(0,202,149,0)',
            },
          ],
          false,
        ),
        shadowColor: 'rgba(0,202,149, 0.9)',
        shadowBlur: 20,
      },

      data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
    },
  ],
};
