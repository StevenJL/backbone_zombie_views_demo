// Instantiate BlogApp namespace object

BlogApp = {};

// Model

BlogApp.Entry = Backbone.Model.extend({ });

firstEntry = new BlogApp.Entry({ 
  title: '1st entry', 
  body: 'johnny football plays football'
})

// View

BlogApp.EntryView = Backbone.View.extend({
  template: _.template( $('#entry-template').html() ),

  initialize: function() {
    this.model.on('change', this.render, this)
  },

  render: function() {
    alert('render!');
    this.$el.html( this.template (this.model.toJSON()) );
    return this
  }
})

entryView = new BlogApp.EntryView({
  model: firstEntry
})

// Start it up!

entryView.render()
$('#entry').html(entryView.$el)

