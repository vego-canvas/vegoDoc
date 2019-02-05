# SpriteSheet

*SpriteSheet* can play the Sprite animation and differentiate the animation stages based on Settings. For example:
```vue
<template>
    <vego-canvas :width="canvasWidth" :height="canvasHeight">
        <sprite-sheet
            :configs="conf"
            :pattern.sync="pattern"></sprite-sheet>
    </vego-canvas>
</template>

<script>
import { SpriteSheet } from 'vego';
const sheet = require('../assets/spritesheet_grant.png');
export default {
    components: {
        'sprite-sheet': SpriteSheet,
    },
    data() {
        return {
            canvasWidth: 800,
            canvasHeight: 360,
            conf: {
                framerate: 30,
                image: sheet,
                frames: {
                    width: 165,
                    height: 292,
                    count: 64,

                },
                // "regX": 82, "height": 292, "count": 64, "regY": 0, "width": 165},
                // define two animations, run (loops, 1.5x speed) and jump (returns to run):
                patterns: {
                    run: {
                        frame: [0, 25],
                        next: 'run',
                    },
                    jump: {
                        frame: [26, 63],
                        next: 'run',
                    },
                },
            },
            pattern: 'run',
        };
    },

};
</script>
```