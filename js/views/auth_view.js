

/*
 * view: login/sign in page
 */



app.AuthView = Backbone.View.extend({
	
	el: '#app_content',
	
	template: _.template($('#tpl_login').html()),
	
	events: {
		'click #btn-signin'   : 'login',
		'click #btn-register' : 'register',
	},
	
	initialize: function ()
	{ 
		this.render(); 
	},
	
	render: function ()
	{ 
		this.$el.html(this.template); 
	}, 
	
	login: function (evt)
	{
		if (evt) evt.preventDefault();
		
		var user = {
			username: $('#username_input').val(),
			pswd: $('#pswd_input').val()
		};
		var login = app.session_collection.login(user);
		console.log(login);
		
		if (login){
			this.userLogueado = app.user_collection.findWhere(user);
			
			if (this.userLogueado.get('admin')){
				console.log("you're an admin");
				location.hash = '#admin-page';
			}else{
				console.log("your're a guest");
				location.hash = '#home';	
				app.footer_view.render();
			}
			
		}else{
			console.log('not login!! ');
		}
	},
	
	register: function (){ location.hash = '#register'; },
	
	logout: function()
	{
		var logout = app.session_collection.logout();
		if (logout){
			location.hash = '';
		}
	}
});

app.RegisterView = Backbone.View.extend({
	
	el: '#app_content',
	
	template: _.template($('#tpl_register').html()),
	
	events: {
		'click #btn-register' :	'createAccount',
		'click #btn-cancel'	  :	'notCreateAccount'
	},
	
	initialize: function ()
	{ 
		this.render(); 
	},
	
	render: function ()
	{ 
		this.$el.html(this.template); 
		return this;	
	},
	
	createAccount: function(evt)
	{
		if (evt) evt.preventDefault();
		var user = {
				fullname: $('#fullname_input').val(),
				email: $('#email_input').val(),
				address: $('#address_input').val(),
				username: $('#username_input').val(),
				pswd: $('#pswd_input').val()
			};
		console.log(this.validate(user));
		if (this.validate(user)){

			var result = app.user_collection.createNewUser(user);
			console.log(result, 'resultado de la registracion');
			console.log(app.user_collection.models,' models in user_collection');
			if (result) {
				location.hash = '#' ;	
			}else{
				$('.text-danger').removeClass('hidden');
			}
		}else{
			$('.text-danger').removeClass('hidden');
		}
	},
	
	validate: function (user)
	{
		if (user.fullname != '' && user.email != '' && user.address != '' && user.username != '' && user.pswd != ''){
			return true;
		}
		return false;
	},
	
	notCreateAccount: function ()
	{ 
		location.hash = '#'; 
	}
	
});

app.register_view = new app.RegisterView();
app.auth_view = new app.AuthView();
