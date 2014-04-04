App.PostsController = Ember.ArrayController.extend();

App.PostsNewController = Ember.ObjectController.extend({
	actions: {
		init: function() {
			this.set('post', Ember.Object.create());	
		},
		createNew: function() {
			var thisModel = this.get('model');
		
			var newPost = this.store.createRecord('post', {
				title: thisModel.get("title"),
				isCompleted: thisModel.get("copy")
			});
			
			newPost.save();
		}
	}
});
