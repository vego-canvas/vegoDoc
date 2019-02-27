import Index from './Index.vue';
import Introduction from './views/Introduction.vue';
import Canvascomp from './views/Canvascomp.vue';
import SpriteSheet from './views/SpriteSheetIntro.vue';
import Demos from './views/Demos.vue';
import Donuts from './views/demos/Donuts.vue';
import Edit from './views/demos/Edit.vue';
import NBody from './views/demos/NBody.vue';
export default [
    {
        path: '/', component: Index,
        children: [
            { path: '/', redirect: '/introduction' },
            { path: '/introduction', component: Introduction },
            { path: '/canvascomp', component: Canvascomp },
            { path: '/spritesheet', component: SpriteSheet },
            { path: '/demos', component: Demos, children: [
                {path: '/', redirect: 'donuts'},
                {path: 'donuts', component: Donuts},
                {path: 'edit', component: Edit},
                {path: 'nbody', component: NBody},
            ]},
        ],
    },
];
