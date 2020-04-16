import Vue from 'vue';
import App from './App.vue';
import Loading from './Loading.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify'; // path to vuetify export
import syncRouterWithGas from './router-gas-sync';
import settings from './settings.json';
import { VNode } from 'vue/types/umd';
import { INITIALIZE } from './action-types';
console.info(settings);

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    render: (h): VNode => h(Loading),
}).$mount('#loading');

syncRouterWithGas(router);

(async (): Promise<void> => {
    await store.dispatch(INITIALIZE);

    new Vue({
        vuetify,
        router,
        store,
        render: (h): VNode => h(App),
    }).$mount('#app');
})();
