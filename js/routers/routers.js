

/*
 *  Routers --> url
 */


app.Routers = Backbone.Router.extend({
	
	routes: {
		''          : 'login',
		'register'  : 'register',
		'home'      : 'home',
		'admin-page': 'admin',
		'logout'	: 'logout'			
	},
	
	login: function ()
	{
		app.auth_view.render();
	},
	register: function ()
	{
		app.register_view.render();
	},
    home : function () 
    { 
    	var login = app.session_collection.check_login();
	
    	if (login){
    		app.home_view.render();
    		app.navbar_guest_view.render();	
    	}else{
    		location.hash = '';
    	}
     },
	admin: function ()
	{
		var login = app.session_collection.check_login(); // bool 
		console.log(login);
		if (login){
			app.admin_view.render();	
		}else{
			location.hash = '';
		}
		
	},
	logout: function () 
	{ 
		app.auth_view.logout(); 
	}
	
});


app.router = new app.Routers();
Backbone.history.start(); 
