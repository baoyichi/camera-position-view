<template>
  <div class="page-warp">
    <div id="travelChart" style="width: 1900px; height: 1080px"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TravelPage extends Vue {
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
        map: 'china', // 这里的名称需要和china.js: echarts.registerMap('china',{})中的名称一致
        label: { show: true }, // 显示省份
        roam: true // 缩放
      }
    };
    myChart.setOption(option);
  }
}
</script>

<style scoped></style>
