import imageHandler from './image-handler'
import subText from './sub-text'

export default {
    install: (Vue: any) => {
        Vue.filter('imageHandler', imageHandler);

        Vue.filter('subText', subText);
    }
}