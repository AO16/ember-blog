window.App = Ember.Application.create();

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
	firebase: new Firebase("https://andysblog.firebaseio.com/")
});

App.PostSerializer = DS.FirebaseSerializer.extend();
