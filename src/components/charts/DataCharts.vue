<template>
  <div id="chart_root" style="width:90%;height:90%" >
    <div id="chart1" style="width:650px;height:45%;display:inline-block;background:#aaaaaa"></div>
    <div id="chart2" style="width:650px;height:45%;display:inline-block;background:#bbbbbb"></div>
    <br>
    <div id="chart3" style="width:650px;height:400px;display:inline-block;background:#cccccc"></div>
    <div id="chart4" style="width:650px;height:400px;display:inline-block;background:#dddddd"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "datacharts",
  data() {
    return {
      chartColumn: null,
      chartBar: null,
      chartLine: null,
      chartPie: null
    };
  },
  methods: {
    drawColumn() {
      this.chartColumn = echarts.init(document.getElementById("chart1"));
      var coloption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: [
            "直接访问",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "搜索引擎",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "广告",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "搜索引擎",
            type: "bar",
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                normal: {
                  type: "dashed"
                }
              },
              data: [[{ type: "min" }, { type: "max" }]]
            }
          },
          {
            name: "百度",
            type: "bar",
            barWidth: 5,
            stack: "搜索引擎",
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: "谷歌",
            type: "bar",
            stack: "搜索引擎",
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: "必应",
            type: "bar",
            stack: "搜索引擎",
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: "其他",
            type: "bar",
            stack: "搜索引擎",
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      };
      this.chartColumn.setOption(coloption);
    },
    drawPie() {
      this.chartPie = echarts.init(document.getElementById("chart2"));
      var pieoption = {
        title: {
          text: "天气情况统计",
          subtext: "虚构数据",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: "center",
          data: ["西凉", "益州", "兖州", "荆州", "幽州"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              {
                value: 1548,
                name: "幽州",
                label: {
                  normal: {
                    formatter: [
                      "{title|{b}}{abg|}",
                      "  {weatherHead|天气}{valueHead|天数}{rateHead|占比}",
                      "{hr|}",
                      "  {Sunny|}{value|202}{rate|55.3%}",
                      "  {Cloudy|}{value|142}{rate|38.9%}",
                      "  {Showers|}{value|21}{rate|5.8%}"
                    ].join("\n"),
                    backgroundColor: "#eee",
                    borderColor: "#777",
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                      title: {
                        color: "#eee",
                        align: "center"
                      },
                      abg: {
                        backgroundColor: "#333",
                        width: "100%",
                        align: "right",
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                      },
                      Sunny: {
                        height: 30,
                        align: "left",
                        backgroundColor: {
                          //image: weatherIcons.Sunny
                        }
                      },
                      Cloudy: {
                        height: 30,
                        align: "left",
                        backgroundColor: {
                          //image: weatherIcons.Cloudy
                        }
                      },
                      Showers: {
                        height: 30,
                        align: "left",
                        backgroundColor: {
                          //image: weatherIcons.Showers
                        }
                      },
                      weatherHead: {
                        color: "#333",
                        height: 24,
                        align: "left"
                      },
                      hr: {
                        borderColor: "#777",
                        width: "100%",
                        borderWidth: 0.5,
                        height: 0
                      },
                      value: {
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: "left"
                      },
                      valueHead: {
                        color: "#333",
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: "center"
                      },
                      rate: {
                        width: 40,
                        align: "right",
                        padding: [0, 10, 0, 0]
                      },
                      rateHead: {
                        color: "#333",
                        width: 40,
                        align: "center",
                        padding: [0, 10, 0, 0]
                      }
                    }
                  }
                }
              },
              { value: 535, name: "荆州" },
              { value: 510, name: "兖州" },
              { value: 634, name: "益州" },
              { value: 735, name: "西凉" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      this.chartPie.setOption(pieoption);
      console.log("chartPie")
    }
    //drawPie(){}
  },
  mounted: function() {
    console.log("begin");
    this.drawColumn();
    this.drawPie();
    console.log("end")
  }
};
</script>

<style>
</style>
