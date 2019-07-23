import directives from './directives';
import filters from './filters';
import widgets from './widgets';


export default {
    install:  Vue => {
        Vue.use(directives);

        Vue.use(filters);

        Vue.use(widgets);
    }
}