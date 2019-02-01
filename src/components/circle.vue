<template>
    <div :r="r" :color="color">
    </div>
</template>
<script>
import { VegoComponent } from 'vego';
export default {
    mixins: [VegoComponent],
    props: { r: Number, color: String },
    draw(g) {
        const {
            r, color,
        } = this;
        g.beginPath()
            .setFillStyle(color)
            .arc(0, 0, r, 0, Math.PI * 2)
            .fill();
    },
};
</script>