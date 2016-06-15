import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    save3(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    }
  }
});
