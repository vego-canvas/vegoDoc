<template>
    <div>
        <h1>Canvas Component</h1>
        <introdoc></introdoc>
        <!-- <div>
            <img :src="imgStructure">
        </div>
        <containerdoc></containerdoc> -->
        <tweendoc></tweendoc>
        <tweenexample></tweenexample>
        <apidoc></apidoc>
    </div>
</template>
<script>
import introdoc from '../docs/canvascomp/intro.md';
import tweendoc from '../docs/canvascomp/tween.md';
// import containerexample from './ContainerExample.vue';
import tweenexample from './TweenExample.vue';
import apidoc from '../docs/canvascomp/apis.md';

const imgStructure = require('../assets/vego.png');

export default {
    components: {
        introdoc,
        tweendoc,
        tweenexample,
        apidoc,
    },
    data() {
        return {
            imgStructure,
        };
    },
};
</script>
