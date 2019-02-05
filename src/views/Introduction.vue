<template>
    <div>
        <introdoc></introdoc>
        <introCanvas></introCanvas>
        <introenddoc></introenddoc>
        <!-- <donuts></donuts> -->
    </div>
</template>
<script>
import introdoc from '../docs/intro.md';
// import donuts from './donuts.vue';
import introCanvas from './introCanvas.vue';
import introenddoc from '../docs/introend.md';
export default {
    components: {
        introdoc,
        introenddoc,
        introCanvas,
        // donuts
    },
};
</script>

<style>

</style>
