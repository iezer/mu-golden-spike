import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    sayHello() {
      alert('Hello from the future');
    }
  }
})