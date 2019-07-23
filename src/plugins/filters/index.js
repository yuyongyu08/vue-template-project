import imageHandler from './image-handler'
import subText from './sub-text'

export default {
    install: Vue => {
        Vue.filter('imageHandler', imageHandler);

        Vue.filter('subText', subText);
    }
}