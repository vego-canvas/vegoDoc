# Vego

Vego is a Vue based library which apply MVVM (Model–view–viewmodel) to HTML5 canvas 2D programing. It provides a bunch of features allow you manipulate graphics like writing Vue components to manipulate DOMs. And it also provides a event mixin to mimic mouse interactions events.

It is designed for building reusable *canvas components* used for tiny games or simple data visualization or other requirements bringing canvas in Vue project.



## Install

```
npm install vego
```



## Quick Start

#### Step 1. Use plugin

```javascript

import Vego from 'vego';

Vue.use(Vego, {
    /*
     * mouseover firing frequency
     * set 0 to disable mouseover
     *
     * The larger the value, the smaller the CPU usage.
     * default: 20ms
     */
    enableMouseOver: 5,
     /*
     * Set true to enable touch and disable mouse event
     * default: false
     */
    enableTouch: false,
});


// other initialize
```

#### Step 2. Create a canvas component

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

#### Step 3. Apply canvas component within tag vego-canvas

``` html
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
        console.log(this.$options.customOption)
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


```
