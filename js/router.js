App.Router.map(function() {
	this.resource('posts', { path: '/' }, function() {
		this.route('new');
	});
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('post');
	}
});

App.NewPostsRoute = Ember.Route.extend({
	model: function() {
		return Ember.Object.create();
	}
});