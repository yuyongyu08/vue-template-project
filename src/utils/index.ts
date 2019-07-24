import requestHelper from './request-helper'

export default {
    install: (Vue: any) => {
        Vue.prototype.$util = {
            requestHelper
        }
    }
}