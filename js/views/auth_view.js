

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
		$('header').remove();
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
		'click #btn-create'	:	'createAccount',
		'click #btn-cancel'	:	'notCreateAccount'
	},

	render: function ()
	{ 
		this.$el.html(this.template); 
		return this;	
	},
	
	pswdMatch: function (pswd)
	{
		if(pswd === user.pswd){
			return true;
		}
		return false;
	},
	
	createAccount: function(evt)
	{
		if(evt) evt.preventDefault();
		
		var me = this;
		var options = {
			successs: function ()
			{
				me.hideErrors();
			},
			error: function (model, errors)
			{
				me.showErrors(errors);	
			}
		};
		var user = {
				email: $('#email_input').val(),
				username: $('#username_input').val(),
				pswd: $('#pswd_input').val(),
		};
		
		this.model.save(user,options);		
	},
	
	hideErrors: function ()
	{
		me.$('.popover.fade.right.in').addClass('hidden');
	},
	
	showErrors: function (errors)
	{
        _.each(errors, function (error) {
            var controlGroup = this.$('#msg-' + error.field);
            controlGroup.removeClass('hidden');
            controlGroup.find('.popover-title').text(error.type);
            controlGroup.find('.popover-content').text(error.msg);
        }, this);
	},
	
	notCreateAccount: function ()
	{ 
		window.location.href = ''; 
		
	}
	
});

app.register_view = new app.RegisterView({ model:app.userModel });
app.auth_view = new app.AuthView();
