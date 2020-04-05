<template>
  <div class="index">
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card shadow="hover" header="折线图">
          <v-chart
            autoresize
            v-size:w="'100%'"
            v-size:h="400"
            :options="lineChartOptions"
          ></v-chart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover" header="饼图">
          <v-chart autoresize v-size:w="'100%'" v-size:h="400" :options="pieChartOptions"></v-chart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueCharts from 'vue-echarts';
import ChartOptionsGenerator from '../../utils/ChartOptionsGenerator';
import _ from 'lodash';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';

export default {
  name: 'Index',

  components: {
    VChart: VueCharts
  },

  data() {
    return {
      lineChartOptions: {},
      pieChartOptions: {}
    };
  },

  created() {
    this.initLineChart();
    this.initPieChart();
  },

  methods: {
    initLineChart() {
      const fakeData = () =>
        Array.from({ length: 7 }, () => _.random(_.random(100, 700), _.random(800, 2000)));

      this.lineChartOptions = new ChartOptionsGenerator({
        legend: { bottom: 0 },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', boundaryGap: false },
        yAxis: { type: 'value' }
      })
        .set('title.subtext', '展示了使用 ChartOptionsGenerator 链式操作生成 Echarts 配置的能力。')
        .set('legend.data', ['销量', '进货'])
        .merge({
          tooltip: {
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#0e549b'
              }
            }
          }
        })
        .set('xAxis.data', ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
        .set('series[0].type', 'line')
        .set('series[0].data', fakeData())
        .set('series[0].name', '销量')
        .set('series[1].type', 'line')
        .set('series[1].data', fakeData())
        .set('series[1].name', '进货')
        .custom((options, _) => {
          _.set(options, 'series[1].label.show', true);
          _.set(options, 'series[0].areaStyle', {});
          return options;
        })
        .final();

      setInterval(() => {
        this.lineChartOptions.series[0].data = fakeData();
        this.lineChartOptions.series[1].data = fakeData();
      }, 2500);
    },
    initPieChart() {
      const fakeData = () =>
        ['魏则西', '404', '酸酸乳', 'Twitter', '251'].map(item => ({
          name: item,
          value: _.random(240, 800)
        }));

      this.pieChartOptions = new ChartOptionsGenerator()
        .set('title.subtext', '展示了使用 ChartOptionsGenerator 一键生成饼图的能力。')
        .pieData(fakeData())
        .pieRose()
        .pieRing(['36%', '72%'])
        .final();

      setInterval(() => {
        this.pieChartOptions.series[0].data = fakeData();
      }, 2500);
    }
  }
};
</script>
