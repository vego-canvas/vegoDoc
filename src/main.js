import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
import Vego from 'vego';
import routes from './routes.js';

Vue.config.productionTip = false;
Vue.use(Vego);
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});
new Vue({
    router,
}).$mount('#app');
