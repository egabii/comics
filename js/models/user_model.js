
/*
 * model name: user
 * extension: js
 * description: set the attributes that we need from a user of the system
 */


app.UserModel = Backbone.Model.extend({
	
	defaults:{
		username: '',
		pswd: '',
		email:'',
		fullName: ''
	},
	
	// poco comun que este aqui, gralmente la validacion suele estar en la vista
	validate: function (data)
	{
		if (data.username != '') {
			return 'you must set up an username';
		}
		
		if (data.pswd != ''){
			return 'you must set up a password in order to login to your session';
		}
	}
	
});

