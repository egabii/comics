

/*
 *  Routers --> url
 */


app.Routers = Backbone.Router.extend({
	
	routes: {
		''          : 'login',
		'register'  : 'register',
		'home'      : 'home',
		'admin-page': 'admin'			
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
	},
	admin: function ()
	{
		app.admin_view.render();
	}
	
});


app.router = new app.Routers();
Backbone.history.start(); 
