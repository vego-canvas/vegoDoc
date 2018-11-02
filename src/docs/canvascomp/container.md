## VegoContainer

*VegoContainer* is a special *canvas component*. It contains *canvas components* and has its own coordinate system from left top. In addition, it will pass events from target to top. For example:
```vue
<template>
<div>
    <vego-canvas :width="400" :height="200">
        <my-circle :config="circle1"
            @mousemove="onmousemove('mousemove circle1')"
        ></my-circle>
        <my-circle :config="circle2"
            @mousemove="onmousemove('mousemove circle2')"
        ></my-circle>
        <vego-container :x="x" :y="y"
            @mousemove="onmousemove('mousemove circle3 or 4')"
        >
            <my-circle :config="circle3"></my-circle>
            <my-circle :config="circle4" @mousemove="onmousemovecircle4"></my-circle>
        </vego-container>
        <msgbox :x="200" :y="50" :text="msg" fill="black" font="18px serif"></msgbox>
    </vego-canvas>
</div>
</template>
<script>
import circle from '../components/circle.vue';
import text from '../components/text.vue';
export default {
    components: {
        'my-circle': circle,
        msgbox: text,
    },
    data() {
        return {
            circle1: {
                x: 50,
                y: 50,
                r: 50,
                color: 'red',
            },
            circle2: {
                x: 80,
                y: 50,
                r: 50,
                color: 'blue',
            },
            x: 100,
            y: 50,
            circle3: {
                x: 0,
                y: 0,
                r: 50,
                color: 'yellow',
            },
            circle4: {
                x: 40,
                y: 0,
                r: 50,
                color: 'green',
            },

            msg: '',
        };
    },
    methods: {
        onmousemove(which) {
            this.msg = which;
        },
        onmousemovecircle4(event) {
            this.msg = '';
            event.stopPropagation();
        },
    },
};
</script>

```