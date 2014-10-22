

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
	
	render: function ()
	{ 
		$('#app_content').removeClass('col-md-8');
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
		console.log(user);
		if (user.username && user.pswd){
			if (login){
				this.userLogueado = app.user_collection.findWhere(user);
				
				if (this.userLogueado.get('admin')){
					console.log("you're an admin");
					location.hash = '#admin-page';
				}else{
					console.log("your're a guest");
					location.hash = '#home';	
				}
				
			}else{
				console.log('not login!! ');
			}			
		}else{
			if (!$('#username_input').val()){
				$('#username_input').addClass('has-error');
			}
			
			if (!$('#pswd_input').val()){
				$('#pswd_input').addClass('has-error');
			}
		}

	},
	
	register: function ()
	{ 
		location.hash = '#register';
	},
	
	logout: function()
	{
		var logout = app.session_collection.logout();
		console.log(logout, 'this is the logout method from auth_view object');
		if (logout){
			window.location.href = '';
		}
	}
});

app.RegisterView = Backbone.View.extend({
	
	el: '#app_content',
	
	template: _.template($('#tpl_register').html()),
	
	events: {
		'click #btn-create' :	'createAccount',
		'click #btn-cancel'	  :	'notCreateAccount'
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
		//console.log(this.validate());
		var result = app.user_collection.createNewUser(user);
		console.log(result, 'resultado de la registracion');
		console.log(app.user_collection.models,' models in user_collection');
		if (result) {
			window.location.href = '';	
		}else{
			$('.text-danger').removeClass('hidden');
		}
	/*	if (this.validate(user)){

		}else{
			$('.text-danger').removeClass('hidden');
		} */
	},
	
/*	validate: function (user)
	{
		if (user.username  && user.pswd){
			return true;
		}
		return false;
	}, */ 
	
	notCreateAccount: function ()
	{ 
		window.location.href = ''; 
		
	}
	
});

app.register_view = new app.RegisterView();
app.auth_view = new app.AuthView();
