import autoFocus from './auto-focus'

export default {
    install: (Vue: any) => {
        Vue.directive('autoFocus', autoFocus);

    }
}