<template>
    <div class="text-center">
        <h2>Pie Chart</h2>
        <pie-chart></pie-chart>
        <!-- <div class="row flex-spaces tabs">
            <input id="tab1" type="radio" name="tabs" checked>
            <label for="tab1">PieChart.vue</label>

            <input id="tab2" type="radio" name="tabs">
            <label for="tab2">Billboard.vue</label>

            <div class="content text-left markdown-max-width" id="content1">
                <pie-chart-m-d></pie-chart-m-d>
            </div>
            <div class="content text-left markdown-max-width" id="content2">
                <bbmd></bbmd>
            </div>
        </div> -->
        <div class="row flex-spaces tabs">
            <input id="tab1" type="radio" name="tabs" checked>
            <label for="tab1">Donut.vue</label>

            <input id="tab2" type="radio" name="tabs">
            <label for="tab2">Donuts.vue</label>

            <div class="content text-left markdown-max-width" id="content1">
                <pie-chart-m-d></pie-chart-m-d>
            </div>
            <div class="content text-left markdown-max-width" id="content2">
               <bbmd></bbmd>
            </div>
        </div>
    </div>
</template>

<script>
import pieChart from '../../components/d3/piechart.vue'
import pieChartMD from '../../docs/d3/piechart.md'
import bbmd from '../../docs/d3/billboard.md'
export default {
     components: {
        pieChart,
        pieChartMD,
        bbmd,
     }
}
</script>
<style>

</style>
