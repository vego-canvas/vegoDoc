# Vego

Vego is a Vue based library which apply MVVM (Model–view–viewmodel) to HTML5 canvas 2D programing. It provides a bunch of features allow you manipulate graphics like writing Vue components to manipulate DOMs. And it also provides a event mixin to mimic mouse interactions events.

It is designed for building reusable *canvas components* used for tiny games or simple data visualization or other requirements bringing canvas in Vue project.



## Install

```
npm install --save vego
```



## Quick Start

#### Step 1. Use plugin

```javascript
import plugin from 'vego';
Vue.use(plugin);

// other initialization
```

#### Step 2. Create a canvas component

```vue
<template>
<div :config="config"></div>
</template>
<script>
export default {
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

#### Step 3. Apply canvas component within tag vego-canvas

```vue
<template>
<div>
    <vego-canvas :width="canvasWidth" :height="canvasHeight">
        <my-arc :config="config"></my-arc>
    </vego-canvas>
</div>
</template>

<script>
import circle from '../components/circle.vue';
export default {
    components: { 'my-arc': circle },
    data() {
        return {
            canvasWidth: 200,
            canvasHeight: 200,
            config: {
                x: 50,
                y: 50,
                r: 40,
                color: 'red',
            },
        };
    },
};
</script>

```