
/*
 * model name: user
 * extension: js
 * description: set the attributes that we need from a user of the system
 */


app.userModel = Backbone.Model.extend({
	//url:'/user',
	defaults:{
		id:0,
		fullname:'',
		email:'',
		address:'',
		username: '',
		pswd: '',
		admin:false // profile
	},
	
});

