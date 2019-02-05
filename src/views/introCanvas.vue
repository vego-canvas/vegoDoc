<template>
<div class="card">
    <vego-canvas ref="canvas" :width="canvasWidth" :height="canvasHeight">
        <my-star
            :geox="50"
            :geoy="50"
            :fill-color="star.fillColor"
            :stroke-color="star.strokeColor"
            :spikes="star.spikes"
            :outer-radius="star.outerRadius"
            :inner-radius="star.innerRadius">
        </my-star>
        <my-star
            :geox="150"
            :geoy="50"
            :fill-color="star.fillColor"
            :stroke-color="star.strokeColor"
            :spikes="star.spikes"
            :outer-radius="star.outerRadius"
            :inner-radius="star.innerRadius">
        </my-star>
        <my-arc
            :geox="100"
            :geoy="100"
            :r="star.outerRadius"
            :color="star.fillColor">
        </my-arc>

    </vego-canvas>
</div>
</template>

<script>
import circle from '../components/circle.vue';
import star from '../components/star.vue';
export default {
    components: {
        'my-star': star,
        'my-arc': circle,
    },
    customOption: 'foo',
    created(){
        console.log(this.$graphic)
    },
    data() {
        return {
            canvasWidth: 200,
            canvasHeight: 200,
            star: {
                fillColor: 'skyblue',
                strokeColor: 'blue',
                spikes: 5,
                outerRadius: 30,
                innerRadius: 15,
            },
        };
    },
};
</script>
