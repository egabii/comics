
/*
 * model name: user
 * extension: js
 * description: set the attributes that we need from a user of the system
 */


app.UserModel = Backbone.Model.extend({
	
	defaults:{
		id:0,
		username: '',
		pswd: ''
	},
	
});

