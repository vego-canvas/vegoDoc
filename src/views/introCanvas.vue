<template>
<div class="card">
    <vego-canvas :width="canvasWidth" :height="canvasHeight">
        <my-arc :config="config"></my-arc>
    </vego-canvas>
</div>
</template>

<script>
import circle from '../components/circle.vue';
export default {
    components: { 'my-arc': circle },
    data() {
        return {
            canvasWidth: 200,
            canvasHeight: 200,
            config: {
                x: 50,
                y: 50,
                r: 40,
                color: 'red',
            },
        };
    },
};
</script>
