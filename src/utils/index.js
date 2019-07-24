import requestHelper from './request-helper'

export default {
    install: Vue => {
        Vue.prototype.$util = {
            requestHelper
        }
    }
}