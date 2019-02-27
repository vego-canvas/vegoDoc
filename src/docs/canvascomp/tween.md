## Tween

Sometimes, we need to smooth the transition animation as we change the data. You can do this using the *tween* attribute. For example:
``` html
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
```
``` html
<template>
<div class="card">
    <vego-canvas :width="canvasWidth" :height="canvasHeight">
        <my-circle
            :geox="config.x"
            :geoy="config.y"
            :r="config.r"
            :color="config.color">
        </my-circle>
    </vego-canvas>
</div>
</template>
<script>
import circle from '../components/circle.vue';
export default {
    components: { 'my-circle': circle },
    data() {
        return {
            canvasWidth: 400,
            canvasHeight: 200,
            config: {
                x: 100,
                y: 150,
                r: 40,
                color: '#ffff00',
            },
            direction: -1,
            directionX: 1,
        };
    },

    mounted() {
        const animate = () => {
            if (this.config.x + this.config.r > this.canvasWidth || this.config.x - this.config.r < 0)
                this.directionX = -this.directionX;
            const x = this.config.x + this.directionX * 100;
            const y = this.config.y + this.direction * 100;
            const color = this.direction > 0 ? '#ff00ff' : '#ffff00';
            this.direction = -this.direction;

            this.$to({
                config: {
                    x,
                    y,
                    color,
                }
            }, 1000, 'easeOutBounce').then(animate);
        };
        animate();
    },
};
</script>
```