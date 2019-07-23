import toast from './toast'

export default {
    install: Vue => {
        Vue.prototype.$toast = toast
    }
}