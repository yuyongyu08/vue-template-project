import toast from './toast'

export default {
    install: (Vue: any) => {
        Vue.prototype.$toast = toast
    }
}