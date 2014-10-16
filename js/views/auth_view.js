

/*
 * view: login/sign in page
 */



app.AuthView = Backbone.View.extend({
	
	el: '#app_content',
	
	template: _.template($('#tpl_login').html()),
	
	events: {
		'click #btn-signin'   : 'login',
		'click #btn-register' : 'register'
	},
	
	initialize: function (){ 
		this.render(); 
		//console.log(this.template());	
	},
	
	render: function ()
	{ 
		this.$el.html(this.template); 
		console.log(this.$el.html(this.template));
	}, 
	
	login: function (e)
	{
		//e.preventDefault();
		var userlog = {
			username: $('#username_input').val(),
			pswd: $('#pswd_input').val()
		};
		
		if (app.user_collection.ifExist(userlog)){
			this.userLogueado = app.user_collection.findWhere(userlog);
			
			if (this.userLogueado.get('admin')){
				console.log("you're an admin");
				window.location.replace('#admin-page');
			}else{
				console.log('user login');
				window.location.replace('#home');	
			}
			
		}
		
		
	},
	
	register: function (){ window.location.replace('#register'); }
});

app.RegisterView = Backbone.View.extend({
	
	el: '#app_content',
	
	template: _.template($('#tpl_register').html()),
	
	events: {
		'click #btn-register' :	'createAccount',
		'click #btn-cancel'	  :	'notCreateAccount'
	},
	
	initialize: function (){ this.render(); },
	
	render: function (){ 
		this.$el.html(this.template); 
		return this;	
	},
	
	createAccount: function(e)
	{
		//e.preventDefault();
		if ($('#username_input').val() && $('#pswd_input').val()){
			var user = {
				username: $('#username_input').val(),
				pswd: $('#pswd_input').val()
			};
			var result = app.user_collection.createNewUser(user);
			window.location.hash = '' ;	
		}else{
			$('.text-danger').removeClass('hidden');
		}
	},
	
	notCreateAccount: function (){ window.location.replace(''); }
	
});

app.register_view = new app.RegisterView();
app.auth_view = new app.AuthView();
