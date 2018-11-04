<template>
    <div>
        <introdoc></introdoc>
        <spriteSheetExample></spriteSheetExample>
        <spriteApidoc></spriteApidoc>
    </div>
</template>
<script>
import introdoc from '../docs/spritesheet.md';
import spriteSheetExample from './spriteSheetExample.vue';
import spriteApidoc from '../docs/spritesheetapi.md';

export default {
    components: {
        introdoc,
        spriteSheetExample,
        spriteApidoc,
    },
};
</script>
