

/*
 *  Routers --> url
 */


app.Routers = Backbone.Router.extend({
	
	routes: {
		''          : 'login',
		'register'  : 'register',
		'home'      : 'home',
		'admin-page': 'admin',
		'logout'	: 'logout',
		'comics'	: 'comics',
		'comics/:id': 'comicDetail'	
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
    		app.navbar_guest_view.render(app.session_collection.get(0).get('username'));
    		app.comic_view.renderMostRecommended();

    		app.footer_view.render();
    	}else{
    		location.hash = '';
    	}
    },	
	comics: function ()
	{
		var login = app.session_collection.check_login();
		if(login){
			app.comic_view.renderList();
			app.navbar_guest_view.render(app.session_collection.get(0).get('username'));
    		app.comic_view.renderMostRecommended();
    		app.footer_view.render();
		}
		
	},
	comicDetail: function(id)
	{
		var login = app.session_collection.check_login();
		if(login){
			app.comic_view.renderComicDetail(id);
			app.navbar_guest_view.render(app.session_collection.get(0).get('username'));
    		app.comic_view.renderMostRecommended();
    		app.footer_view.render();
		}
	},  
	logout: function () 
	{ 
		if (app.auth_view.logout()){
			location.hash = '';
			app.navbar_guest_view.remove();
			app.footer_view.remove();
			app.sidebar_view.remove();
		}
	},
	
	admin: function ()
	{
		var login = app.session_collection.check_login(); // bool 
		if (login){
			app.admin_view.render();	
		}else{
			location.hash = '';
		}
		
	}
	
});


app.router = new app.Routers();
Backbone.history.start(); 
