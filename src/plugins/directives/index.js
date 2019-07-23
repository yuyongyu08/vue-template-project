import autoFocus from './auto-focus'

export default {
    install: Vue => {
        Vue.directive('autoFocus', autoFocus);
    }
}