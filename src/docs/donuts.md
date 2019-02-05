### donut.vue
```javascript
<template>
    <div></div>
</template>

<script>
const colorsP = ['#828b20', '#b0ac31', '#cbc53d', '#fad779', '#f9e4ad', '#faf2db', '#563512', '#9b4a0b', '#d36600', '#fe8a00', '#f9a71f'];
const rings = 40;
const radius = 50;
import {VegoComponent} from 'vego';
export default {
    mixins: [VegoComponent],
    data() {
        const colors = [];
        for (let j = rings; j > 0; j--) {
            colors.push(colorsP[~~(Math.random() * 10) | 0]);
        }
        return {
            colors,
        };
    },
    mounted() {
        this.vegoDisplayObject.$graphic.cache(-radius, -radius, radius * 2, radius * 2);
    },
    draw(g) {
        const {
            colors,
        } = this;
        const PI2 = Math.PI * 2;
        for (let j = rings; j > 0; j--) {
            g.beginPath()
                .setFillStyle(colors[j])
                .arc(0, 0, radius * j / rings, 0, PI2)
                .fill();
        }
    },
};
</script>
```

### donuts.vue
```javascript
<template>
    <vego-canvas :width="canvasWidth" :height="canvasHeight">
        <template v-for="don in donuts">
            <donut
                :geox="don.x"
                :geoy="don.y"
                :key="don.key">
            </donut>
        </template>
    </vego-canvas>
</template>

<script>
import Donut from '../components/donut.vue';
const num = 200;
const nextFrame = window.requestAnimationFrame;
export default {
    components: {
        Donut,
    },
    data() {
        return {
            canvasWidth: 960,
            canvasHeight: 380,
            donuts: [],
        };
    },
    mounted() {
        const {
            canvasWidth,
            canvasHeight,
            donuts,
        } = this;
        const radius = 50;
        for (let i = 0; i < num; i++) {
            donuts.push({
                x: Math.random() * canvasWidth,
                y: Math.random() * canvasHeight,
                velX: Math.random() * 10 - 5,
                velY: Math.random() * 10 - 5,
            });
        }
        const w = canvasWidth + radius * 2;
        const h = canvasHeight + radius * 2;
        const tick = () => {
            for (let i = 0; i < num; i++) {
                donuts[i].x = (donuts[i].x + radius + donuts[i].velX + w) % w - radius;
                donuts[i].y = (donuts[i].y + radius + donuts[i].velY + h) % h - radius;
            }
            nextFrame(tick);
        };
        nextFrame(tick);
    },
};
</script>
```