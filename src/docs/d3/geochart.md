``` html
<template>
    <div>
        <vego-canvas ref="canvas" class="canvas"
            :width="canvasWidth"
            :height="canvasHeight"
            :projection-d3="projectionD3">
            <polyfill v-for="t in topo" :key="t.id" :topo="t">
            </polyfill>
        </vego-canvas>
    </div>
</template>

<script>
import polyfill from './pathPolyfill.vue';
import * as d3 from 'd3';
import * as topojson from 'topojson';
const zh = require('./zh-cn.json');

const topo = topojson.feature(zh, zh.objects.provinces).features;
const projection = d3.geoMercator()
    .center([116, 39])
    .scale(500);

export default {
    components: {
        polyfill,
    },
    data() {
        return {
            canvasWidth: 960,
            canvasHeight: 500,
            topo,
            projectionD3: projection,
            scale: 500,
            center: {
                x: 116, y: 39,
            },
        };
    },
    watch: {
        scale(val) {
            this.projectionD3.scale(val);
        },
    },
};
</script>

```