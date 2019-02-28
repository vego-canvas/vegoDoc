<template>

    <div class="text-center">
        <h2>Geo Chart</h2>
        <geo-chart></geo-chart>
        <div class="row flex-spaces tabs">
            <input id="tab1" type="radio" name="tabs" checked>
            <label for="tab1">GeoChart.vue</label>


            <div class="content text-left markdown-max-width" id="content1">
                <geo-chart-m-d></geo-chart-m-d>
            </div>
        </div>
    </div>
</template>

<script>
import geoChart from '../../components/d3/geochart.vue'
import geoChartMD from '../../docs/d3/geochart.md'
export default {
     components: {
        geoChart,
        geoChartMD,
     }
}
</script>
