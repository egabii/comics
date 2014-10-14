

/*
 * model name: auth_model
 * extension: js
 * description: 
 */


app.AuthModel = Backbone.Model.extend({
	
	defaults:{
		id: 0,
		usrname:'',
		pswd: ''
	}
	
});


/*
 * model name: session_model
 * extension: js
 * description: allow user to login or logout of its session 
 */

app.SessionModel = Backbone.Model.extend({
	
	defaults:{
		id:0,
		session: ''
	}
	
});
