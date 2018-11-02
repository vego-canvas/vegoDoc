<template>
    <div>
        <h1>Canvas Component</h1>
        <introdoc></introdoc>
        <div>
            <img :src="imgStructure">
        </div>
        <containerdoc></containerdoc>
        <containerexample></containerexample>
        <tweendoc></tweendoc>
        <tweenexample></tweenexample>
    </div>
</template>
<script>
import introdoc from '../docs/canvascomp/intro.md';
import containerdoc from '../docs/canvascomp/container.md';
import tweendoc from '../docs/canvascomp/tween.md';
import containerexample from './ContainerExample.vue';
import tweenexample from './TweenExample.vue';

const imgStructure = require('../assets/vego.png');

export default {
    components: {
        introdoc,
        containerdoc,
        containerexample,
        tweendoc,
        tweenexample,
    },
    data() {
        return {
            imgStructure,
        };
    },
};
</script>
