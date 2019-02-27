<template>
    <div class="text-center">
        <h2>N Body System</h2>
        <nbody/>
        <div class="row flex-spaces tabs">
            <input id="tab1" type="radio" name="tabs" checked>
            <label for="tab1">nbodygravity.vue</label>

            <input id="tab2" type="radio" name="tabs">
            <label for="tab2">motionTrails.vue</label>

            <input id="tab3" type="radio" name="tabs">
            <label for="tab3">nbodyproblem.js</label>

            <div class="content text-left markdown-max-width" id="content1">
                <nbodymd></nbodymd>
            </div>
            <div class="content text-left markdown-max-width" id="content2">
                <nbodytrail></nbodytrail>
            </div>
            <div class="content text-left markdown-max-width" id="content3">
                <nbodyphysics></nbodyphysics>
            </div>
        </div>
    </div>
</template>

<script>
import nbody from '../../components/nbody/nbodygravity.vue';
import nbodymd from '../../docs/demos/nbody.md';
import nbodytrail from '../../docs/demos/nbodytrail.md';
import nbodyphysics from '../../docs/demos/nbodyphysics.md';
export default {
    components: {
        nbody,
        nbodymd,
        nbodytrail,
        nbodyphysics
    }
}
</script>

<style>

</style>
