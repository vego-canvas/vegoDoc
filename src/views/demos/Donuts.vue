<template>

    <div class="text-center">
        <h2>Donuts</h2>
        <donuts></donuts>
        <!-- <div class="collapsible">
            <input id="collapsible1" type="checkbox" name="collapsible">
            <label for="collapsible1">Donut.vue</label>
            <div class="collapsible-body text-left" style="overflow: scroll;">
                <donut-m-d></donut-m-d>
            </div>
        </div>
        <div class="collapsible">
            <input id="collapsible2" type="checkbox" name="Donuts">
            <label for="collapsible2">Donuts.vue</label>
            <div class="collapsible-body text-left" style="overflow: scroll;">
                <donuts-m-d></donuts-m-d>
            </div>
        </div> -->
        <div class="row flex-spaces tabs">
            <input id="tab1" type="radio" name="tabs" checked>
            <label for="tab1">Donut.vue</label>

            <input id="tab2" type="radio" name="tabs">
            <label for="tab2">Donuts.vue</label>

            <div class="content text-left markdown-max-width" id="content1">
                <donut-m-d></donut-m-d>
            </div>
            <div class="content text-left markdown-max-width" id="content2">
                <donuts-m-d></donuts-m-d>
            </div>
        </div>
    </div>
</template>

<script>
import donutsMD from '../../docs/demos/donuts.md';
import donutMD from '../../docs/demos/donut.md';
import donuts from '../donuts.vue';
export default {
     components: {
        donuts,
        donutsMD,
        donutMD
     }
}
</script>

<style>

</style>
