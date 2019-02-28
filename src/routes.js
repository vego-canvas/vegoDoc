import Index from './Index.vue';
import Introduction from './views/Introduction.vue';
import Canvascomp from './views/Canvascomp.vue';
import SpriteSheet from './views/SpriteSheetIntro.vue';
import Demos from './views/Demos.vue';
import Donuts from './views/demos/Donuts.vue';
import Edit from './views/demos/Edit.vue';
import NBody from './views/demos/NBody.vue';
import D3Plugin from './views/d3plugin/index.vue';
import linechart from './views/d3plugin/linechart.vue';
import areachart from './views/d3plugin/areachart.vue';
import piechart from './views/d3plugin/piechart.vue';
import geochart from './views/d3plugin/geochart.vue';

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
            { path: '/d3plugin', component: D3Plugin, children: [
                {path: '/', redirect: 'linechart'},
                {path: 'linechart', component: linechart},
                {path: 'areachart', component: areachart},
                {path: 'piechart', component: piechart},
                {path: 'geochart', component: geochart},
            ]}
        ],
    },
];
