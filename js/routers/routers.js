	

/*
 *  Routers --> url
 */


app.Routers = Backbone.Router.extend({
	
	routes: {
		''          			: 'login',
		'register'  			: 'register',
		'home'      			: 'home',
		'admin-page'			: 'admin',
		'logout'				: 'logout',
		'comics'				: 'comics',
		'comics/:id'			: 'comicDetail',
		'user/profile/:id'		: 'profile'
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
    		app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.comic_view.renderMostRecommended();

    		app.footer_view.render();
    	}
    },	
	comics: function ()
	{
		var login = app.session_collection.check_login();
		if (login){
			app.comic_view.renderList();
			app.navbar_guest_view.render(app.session_collection.get(0).get('username'));
    		app.comic_view.renderMostRecommended();
    		app.footer_view.render();
		}
		
	},
	
	comicDetail: function (id)
	{
		var login = app.session_collection.check_login();
		if (login){
			app.comic_view.renderComicDetail(id);
			app.navbar_guest_view.render(app.session_collection.get(0).get('username'));
    		app.comic_view.renderMostRecommended();
    		app.footer_view.render();			
		}
	},
	
	profile: function(id)
	{
		
	},
	logout: function () 
	{ 
		if (app.auth_view.logout()){
			window.location.href = '';
		} 
	},
	
	admin: function ()
	{
		var login = app.session_collection.check_login(); // bool 
		if (login){
			app.admin_view.render();	
		}
	}
	
});


app.router = new app.Routers();
Backbone.history.start(); 
