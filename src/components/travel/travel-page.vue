<template>
  <div class="page-warp">
    <div id="travelChart" style="width: 1900px; height: 780px"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TravelPage extends Vue {
  currentLocation = '';
  private $echarts: any;
  mounted() {
    this.initMap();
  }

  initMap(): void {
    const myChart = this.$echarts.init(document.getElementById('travelChart') as HTMLDivElement, '', {
      renderer: 'svg'
    });
    const option = {
      geo: {
        // 这里的名称需要和china.js: echarts.registerMap('china',{})中的名称一致
        map: 'china',
        // 显示省份
        label: { show: true },
        roam: false,
        //  地图区域的多边形 图形样式
        itemStyle: {
          areaColor: '#fff',
          borderColor: '#000'
        },
        //  高亮状态下的多边形和标签样式
        emphasis: {
          label: {
            color: '#fff'
          },
          itemStyle: {
            areaColor: '#000'
          }
        },
        //  选中模式，支持布尔值和字符串，'single'表示单选
        selectedMode: 'single'
      }
    };
    myChart.setOption(option);
    myChart.on('click', (params: any) => {
      console.log(params);
      this.currentLocation = params.name;
    });
  }
}
</script>

<style scoped></style>
