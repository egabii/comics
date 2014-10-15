

/*
 * view: login/sign in page
 */



app.AuthView = Backbone.View.extend({
	
	el: '#app_content',
	
	template: $('#tpl_login').html(),
	
	events: {
		'click #btn-signin'   : 'login',
		'click #btn-register' : 'register'
	},
	
	initialize: function (){ this.render(); },
	
	render: function (){ this.$el.html(this.template); }, 
	
	login: function (e)
	{
		e.preventDefault();
		var userlog = {
			username: $('#username_input').val(),
			pswd: $('#pswd_input').val()
		};
		// aca tendría que ir login! 
		if (!app.session_collection.check_login(userlog)){
			window.location.replace("#home");
		}else{
			console.log(" or you don't exist or you don't have an account ");	
		}
	},
	
	register: function (){ window.location.replace('#register'); }
});

app.RegisterView = Backbone.View.extend({
	
	el: '#app_content',
	
	template: $('#tpl_register').html(),
	
	events: {
		'click #btn-register' :	'createAccount',
		'click #btn-cancel'	  :	'notCreateAccount'
	},
	
	initialize: function (){ this.render(); },
	
	render: function (){ this.$el.html(this.template); },
	
	createAccount: function(e)
	{
		//e.preventDefault();
		if ($('#username_input').val() && $('#pswd_input').val()){
			var user = {
			username: $('#username_input').val(),
			pswd: $('#pswd_input').val()
			};
			var result = app.user_collection.createNewUser(user);
			window.location.replace('#home');	
		}else{
			$('.text-danger').removeClass('hidden');
			if ($('#username_input').val()){
				/*$('#username_input').on('blur',function(){}); */	
			}
		}
		
		
	},
	
	notCreateAccount: function (){ window.location.replace(''); }
	
});

app.register_view = new app.RegisterView();
app.auth_view = new app.AuthView();
