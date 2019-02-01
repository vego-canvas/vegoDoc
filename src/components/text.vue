<template>
    <div :x="x" :y="y" :text="text" :font="font" :fillColor="fill" :strokeColor="stroke">
    </div>
</template>
<script>

// import Vue from 'vue';
export default {
    props: { x: Number, y: Number, text: String, font: String, fill: String, stroke: String },
    draw(g) {
        const {
            x, y, text, font, fill, stroke,
        } = this;
        g.beginPath()
            .save()

        ctx.beginPath();
        ctx.save();
        if (font)
            g.setFont(font)
        if (fill) {
            g.setFillStyle(fill).fillText(text, x, y, 200);
        }
        if (stroke) {
            g.setStrokeStyle(stroke).strokeText(text, x, y, 200);
        }
        g.restore();
    },
};
</script>
