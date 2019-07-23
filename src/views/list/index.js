import Vue from 'vue'
import plugins from '../../plugins'
import IndexView from './index.vue'

Vue.config.productionTip = false;

Vue.use(plugins);

new Vue({
    el: '#app',
    render: (h) => h(IndexView)
});
