	

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
		'comics/:id'					: 'comicDetail',
		'characters/all'				: 'listCharacters',
		'characters/:id'				: 'singleCharacter',		
		'genre/:type'					: 'listByGenre',
		'news/games/all'				: 'gameList',
		'news/games/:id'				: 'gameSingle', // No-Op		
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
	
	listByGenre: function(type)
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
			$('header').removeClass('hidden');
			app.comic_view.renderListByGenre(type);
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}			
	},

	// COMIC SINGLE VIEW  
	comicDetail: function (id)
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
			$('header').removeClass('hidden');
			app.comic_view.renderComicDetail(id);
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}	
	},  
	
	listCharacters: function ()
	{
		var login = app.session_collection.check_login();
		if (login){
			$('#sidebar_content').removeClass('hidden');
			app.character_view.renderList();
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}			
	},

	singleCharacter: function (id)
	{
		var login = app.session_collection.check_login();
		
		if (login){
			$('#sidebar_content').removeClass('hidden');
			$('header').removeClass('hidden');
			app.character_view.renderSingleCharacter(id);
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}	
	},

	gameList: function ()
	{
		var login = app.session_collection.check_login();
		
		if (login){
			$('#sidebar_content').removeClass('hidden');
			$('header').removeClass('hidden');
			app.game_view.renderList();
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}			
	},
	gameSingle: function (id)
	{
		var login = app.session_collection.check_login();
		
		if (login){
			$('#sidebar_content').removeClass('hidden');
			$('header').removeClass('hidden');
			app.game_view.renderSingleGame(id);
			app.navbar_guest_view.render(app.session_collection.get(0).get('id_user'));
    		app.footer_view.render();		
		}				
	},
		
	logout: function () 
	{ 
		if (app.auth_view.logout()){
			this.login();
			//window.location.href = '';
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
