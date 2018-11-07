<template>
<div class="card">
    <vego-canvas :width="400" :height="100">
        <my-circle :config="circle1"
            @mousemove="onmousemove('mousemove circle1', $event)"
            @mouseleave="onmouseleave($event)"
        ></my-circle>
        <my-circle :config="circle2"
            @mousemove="onmousemove('mousemove circle2', $event)"
            @mouseleave="onmouseleave($event)"
        ></my-circle>
        <vego-container :x="x" :y="y"
            @mousemove="onmousemove('mousemove circle3 or 4', $event)"
            @mouseleave="onmouseleave($event)"
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
                stroke: false,
            },
            circle2: {
                x: 80,
                y: 50,
                r: 50,
                color: 'blue',
                stroke: false,
            },
            x: 100,
            y: 50,
            circle3: {
                x: 0,
                y: 0,
                r: 50,
                color: 'yellow',
                stroke: false,
            },
            circle4: {
                x: 40,
                y: 0,
                r: 50,
                color: 'green',
                stroke: false,
            },

            msg: '',
        };
    },
    methods: {
        onmousemove(which, event) {
            this.msg = which;
            event.target.config.stroke = true;
        },
        onmouseleave(event) {
            event.target.config.stroke = false;
        },
        onmousemovecircle4(event) {
            this.msg = '';
            event.stopPropagation();
        },
    },
};
</script>
