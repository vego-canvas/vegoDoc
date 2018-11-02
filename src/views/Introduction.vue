<template>
    <div>
        <introdoc></introdoc>
        <introCanvas></introCanvas>
        <introenddoc></introenddoc>
    </div>
</template>
<script>
import introdoc from '../docs/intro.md';
import introCanvas from './introCanvas.vue';
import introenddoc from '../docs/introend.md';
export default {
    components: {
        introdoc,
        introenddoc,
        introCanvas,
    },
};
</script>

<style>

</style>
