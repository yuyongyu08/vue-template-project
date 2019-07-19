import Vue from 'vue'
import IndexView from './index.vue'

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: (h) => h(IndexView)
});
