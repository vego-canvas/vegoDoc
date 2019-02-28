<template>

    <div class="text-center">
        <h2>Line Chart</h2>
        <line-chart></line-chart>
        <div class="row flex-spaces tabs">
            <input id="tab1" type="radio" name="tabs" checked>
            <label for="tab1">LineChart.vue</label>


            <div class="content text-left markdown-max-width" id="content1">
                <line-chart-m-d></line-chart-m-d>
            </div>
        </div>
    </div>
</template>

<script>
import lineChart from '../../components/d3/linechart.vue'
import lineChartMD from '../../docs/d3/linechart.md'
export default {
     components: {
        lineChart,
        lineChartMD,
     }
}
</script>
