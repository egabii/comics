
/*
 * model name: user
 * extension: js
 * description: set the attributes that we need from a user of the system
 */


app.userModel = Backbone.Model.extend({
	
	url: '/user',
	
	idAttribute: '_id',
	
	defaults:{
		email:'',
		username: '',
		pswd: '',
		photo: '', // path 
		admin:false // profile
	},
	
	validate: function (attrs, options)
	{
		var errors = [];
		var regexp_common = new RegExp('^[A-Za-z0-9_]{3,25}$');
		var regexp_email = new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$');
		var regexp_pswd = new RegExp('^[a-z0-9]{7,15}$');
		
		if (!regexp_common.test(attrs.username)){
			errors.push({
				field: 'username',
				type:'special character',
				msg:'the special character are not allow'
			});
		}
		
		if (!attrs.username){
			errors.push({
				field:'username',
				type:'empty field',
				msg:' the field is empty, please fill it'
			});
		} 
		
		if (!regexp_email.test(attrs.email)){
			errors.push({
				field:'email',
				type:'special character',
				msg:'the special character are not allow'
			});
		}
		
		if (!attrs.email){
			errors.push({
				field:'email',
				type:'special character',
				msg:' the field is empty, please fill it'
			});
		}
		
		if (!regexp_pswd.test(attrs.pswd)){
			errors.push({
				field:'pswd',
				type:'special character',
				msg:'the special character are not allow'
			});
		}
		
		if (!attrs.pswd){
			errors.push({
				field:'email',
				type:'special character',
				msg:' the field is empty, please fill it'
			});			
		}
		
		return errors.length > 0 ? errors : false;
	}
	
});

