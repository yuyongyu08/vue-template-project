import Vue from 'vue';
import Main from './main.vue';

let instance;

function createInstance () {
  if (!instance) {
    instance = new (Vue.extend(Main))({
      el: document.createElement('div')
    });
    document.body.appendChild(instance.$el);
  }
  return instance;
}

export default (options = {}) => {
  const customInstance = createInstance();
  if (typeof options === 'string') {
    options = {content: options}
  }
  options = {
    ...options
  };
  Object.assign(customInstance, options);
  return customInstance;
};
