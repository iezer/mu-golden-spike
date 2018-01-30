import Controller from '@ember/controller';
import  { inject as service } from '@ember/service'

export default Controller.extend({
  addonMain: service('mu-first-post'),
  addonSecondary: service('mu-first-post::secondary'),

  actions: {
    sayHello() {
      alert('Hello from the future');
    }
  }
})
