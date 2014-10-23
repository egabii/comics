

/*
 * 
 */


app.mainView = Backbone.View.extend({
	
	el:$('#main'),
	
	renderLogin: function ()
	{
		this.login_view = new app.LoginView();
		this.login_view.render();
	},
	
	renderRegister: function ()
	{
		this.register_view = new app.RegisterView({ model:app.userModel });
		this.register_view.render();
	},
	
	renderGuestHome: function ()
	{
		this.guest_home_view = new app.homeView();
		this.guest_home_view.render();
	}
});

app.main_view = new app.mainView;
