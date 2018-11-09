import Index from './Index.vue';
import Introduction from './views/Introduction.vue';
import Canvascomp from './views/Canvascomp.vue';
import SpriteSheet from './views/SpriteSheetIntro.vue';
import GameCenter from './views/GameCenter.vue';
export default [
    {
        path: '/', component: Index,
        children: [
            { path: '/', redirect: '/introduction' },
            { path: '/introduction', component: Introduction },
            { path: '/canvascomp', component: Canvascomp },
            { path: '/spritesheet', component: SpriteSheet },
            { path: '/game', component: GameCenter },
        ],
    },
];
