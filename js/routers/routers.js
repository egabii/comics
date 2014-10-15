

/*
 *  Routers --> url
 */


app.Routers = Backbone.Router.extend({
	
	routes: {
		'sign-in'  : 'login',
		'register' : 'register',
		'home'     : 'home'				
	},
	
	login: function ()
	{
		app.auth_view.render();
	},
	
	register: function ()
	{
		app.register_view.render();
	},
	
	home: function ()
	{
		app.home_view.render();
	}
	
});


app.router = new app.Routers();
Backbone.history.start(); 
