	

/*
 *  Routers --> url
 */


app.Routers = Backbone.Router.extend({
	
	routes: {
		''          					: 'login',
		'register'  					: 'register',
		'home'      					: 'home',
		'admin-page'					: 'admin',
		'logout'						: 'logout',
		'comics'						: 'comics',
		'comics/most_recommended'		: 'mostRecommended',
		'comics/top_searched'			: 'topSearched',
		'comics/qualifications'			: 'qualification',
		'characters/all'				: 'listCharacters',
		'genre/:type'					: 'listByGenre',		
		'user/profile/:id'				: 'profile'
	},
	
	login: function ()
	{
		$('#sidebar_content').addClass('hidden');
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
    		$('#sidebar_content').removeClass('hidden');
    		$('header').removeClass('hidden');
    		app.home_view.render();
    		app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();
    	}
    },
    
	comics: function ()
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
			$('header').removeClass('hidden');
			app.comic_view.renderList();
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();
		}
		
	},
	
	mostRecommended: function ()
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
    		$('header').removeClass('hidden');
			app.comic_view.renderMostRecommended();
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}
	},
	
	topSearched: function ()
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
    		$('header').removeClass('hidden');
			app.comic_view.renderTopSearched();
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}		
	},
	
	qualification: function ()
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
    		$('header').removeClass('hidden');
			app.comic_view.renderQualification();
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}		
	}, 
	
/*	comicDetail: function (id)
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
			app.comic_view.renderComicDetail(id);
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}	
	},  */
	
	listCharacters: function ()
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
			//app.comic_view.renderComicDetail(id);
			app.character_view.renderList();
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}			
	},
	
	listByGenre: function(type)
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
			app.comic_view.renderListByGenre(type);
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}			
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
