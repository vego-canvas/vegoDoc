``` html
<template>
    <div></div>
</template>

<script>
import { VegoComponent } from 'vego';
export default {
    mixins: [VegoComponent],
    props: {
        content: String,
    },
    draw(g) {
        g.beginPath()
            .setFillStyle('#000')
            .setFont('bold 48px serif')
            .setTextBaseline('bottom')
            .fillText(this.content, 0, 0);
    },
};
</script>
```