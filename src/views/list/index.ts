import Vue from 'vue'
import plugins from '../../plugins'
import utils from '../../utils'
import IndexView from './index.vue'

Vue.config.productionTip = false;

Vue.use(plugins);
Vue.use(utils);

new Vue({
    el: '#app',
    render: (h) => h(IndexView)
});
