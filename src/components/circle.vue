<template>
<div :config="config"></div>
</template>
<script>
export default {
    props: { config: Object },
    draw(ctx, p) {
        const {
            x, y, r, color, stroke,
        } = this.config;

        ctx.beginPath();
        ctx.save();
        ctx.fillStyle = color;
        if (stroke) {
            ctx.lineWidth = 20;
        }
        ctx.arc(x, y, stroke ? r - 10 : r, 0, 2 * Math.PI);
        if (stroke) {
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
        ctx.fill();
        ctx.restore();
    },
};
</script>
