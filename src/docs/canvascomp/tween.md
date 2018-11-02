## Tween

Sometimes, we need to smooth the transition animation as we change the data. You can do this using the *tween* attribute. For example:
```vue
// tweencircle.vue
<template>
<div :config="config"></div>
</template>
<script>
import { tweenMixin } from 'vego';
export default {
    mixins: [tweenMixin],
    props: { config: Object },
    draw(ctx, p) {
        const {
            x, y, r, color,
        } = this.config;

        ctx.beginPath();
        ctx.save();
        ctx.fillStyle = color;
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
    },
};
</script>

```
```vue
// tweenexample.vue
<template>
<div class="card">
    <vego-canvas :width="canvasWidth" :height="canvasHeight">
        <my-circle :config="config" :tween="tween" @tweenend="end"></my-circle>
    </vego-canvas>
</div>
</template>
<script>

import circle from '../components/tweencircle.vue';
export default {
    components: { 'my-circle': circle },
    data() {
        return {
            canvasWidth: 400,
            canvasHeight: 250,
            config: {
                x: 50,
                y: 50,
                r: 40,
                color: '#ffff00',
            },

            tween: {
                duration: 2000,
                easing: 'easeOutBounce',
                observe: ['config'],
            },
            direction: -1,
            directionX: 1,
        };
    },

    mounted() {
        this.config.x = 100;
        this.config.y = 150;
        this.config.color = '#ff00ff';
    },
    methods: {
        end() {
            if (this.config.x + this.config.r > this.canvasWidth || this.config.x - this.config.r < 0)
                this.directionX = -this.directionX;
            this.config.x += this.directionX * 100;
            this.config.y += this.direction * 100;
            this.config.color = this.direction > 0 ? '#ff00ff' : '#ffff00';
            this.direction = -this.direction;
        },
    },
};
</script>


```