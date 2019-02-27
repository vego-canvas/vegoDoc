<template>
    <div class="text-left">
        <div class="row">
            <div class="col sm-4">
                <div class="form-group">
                    <label for="donuts">DONUTS <i>( Try to modify the number! )</i> :</label>
                    <input v-model="num" id="donuts" placeholder="quantity of donuts" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col sm-4">
            <div>FPS: {{fps}}</div>
            <vego-canvas :width="canvasWidth" :height="canvasHeight">
                <template v-for="don in donuts">
                    <donut
                        :geox="don.x"
                        :geoy="don.y"
                        :key="don.key">
                    </donut>
                </template>
            </vego-canvas>
            </div>
        </div>
    </div>
</template>

<script>
import Donut from '../components/donut.vue';
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
            num: 200,
            fps: undefined
        };
    },
    watch: {
        num(val){
            this.generateDonuts();
        }
    },
    mounted() {
        const {
            canvasWidth,
            canvasHeight,
            num
        } = this;
        const radius = 50;
        this.generateDonuts();
        const w = canvasWidth + radius * 2;
        const h = canvasHeight + radius * 2;
        const times = [];
        const tick = () => {

            this.donuts.forEach(( d )=>{
                d.x = (d.x + radius + d.velX + w) % w - radius;
                d.y = (d.y + radius + d.velY + w) % w - radius;
            });
            const now = performance.now();
            while (times.length > 0 && times[0] <= now - 1000) {
                times.shift();
            }
            times.push(now);
            this.fps = times.length;

            // for (let i = 0; i < this.num; i++) {
            //     donuts[i].x = (donuts[i].x + radius + donuts[i].velX + w) % w - radius;
            //     donuts[i].y = (donuts[i].y + radius + donuts[i].velY + h) % h - radius;
            // }
            nextFrame(tick);
        };
        nextFrame(tick);
    },
    methods: {
        generateDonuts(){
            const d = [];
            const {
                num,
                canvasWidth,
                canvasHeight
            } = this;
            for (let i = 0; i < num; i++) {
                d.push({
                    x: Math.random() * canvasWidth,
                    y: Math.random() * canvasHeight,
                    velX: Math.random() * 10 - 5,
                    velY: Math.random() * 10 - 5,
                });
            }
            this.donuts = d;
        }
    }
};
</script>

<style>

</style>
