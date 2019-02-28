<template>

    <div class="text-center">
        <h2>Area Chart</h2>
        <area-chart></area-chart>
        <div class="row flex-spaces tabs">
            <input id="tab1" type="radio" name="tabs" checked>
            <label for="tab1">AreaChart.vue</label>


            <div class="content text-left markdown-max-width" id="content1">
                <area-chart-m-d></area-chart-m-d>
            </div>
        </div>
    </div>
</template>

<script>
import areaChart from '../../components/d3/areachart.vue'
import areaChartMD from '../../docs/d3/areachart.md'
export default {
     components: {
        areaChart,
        areaChartMD,
     }
}
</script>
