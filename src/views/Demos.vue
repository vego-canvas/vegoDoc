<template>
    <div>
        <donuts></donuts>
        <donutMD></donutMD>
    </div>
</template>

<script>
import donutMD from '../docs/donuts.md';
import donuts from './donuts.vue';
export default {
    components: {
        donuts,
        donutMD
    }
}
</script>

<style>

</style>
