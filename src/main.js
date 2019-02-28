import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Vego, { d3Shape, d3Geo } from 'vego';
import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/github.css';
import routes from './routes.js';
// import tweenExample from './views/TweenExample.vue';

Vue.config.productionTip = false;
Vue.use(Vego, {
    enableMouseOver: 16,
    enableTouch: false,
    plugins: [d3Shape, d3Geo ],
});
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});
router.afterEach((to, from) => {
    const p = document.querySelector('#app > .main > .main');
    if(p) p.scrollTo(0, 0);
})
new Vue({
    router,
}).$mount('#app');
// new Vue(tweenExample).$mount('#app')
