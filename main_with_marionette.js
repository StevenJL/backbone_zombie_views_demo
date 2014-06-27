// Instantiate BlogApp namespace object

BlogApp = {};

// Model

BlogApp.Entry = Backbone.Model.extend({ });

firstEntry = new BlogApp.Entry({ 
  title: '1st entry', 
  body: 'johnny football plays football' 
})

// View

BlogApp.EntryView = Marionette.ItemView.extend({
  template: _.template( $('#entry-template').html() ),

  initialize: function() {
    this.on(this.model, 'change', this.render);
  },

  render: function() {
    alert('rendered!');
    this.$el.html( this.template (this.model.toJSON()) );
    return this
  }
})

entryView = new BlogApp.EntryView({
  model: firstEntry
})

// Marionette Region 

entryRegion = new Marionette.Region({
  el: '#entry'
});

// Start it up!
entryRegion.show(entryView);
