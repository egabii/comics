


/* ********************************* */

app.SessionCollection = Backbone.Collection.extend({
	
	model: app.SessionModel, // always say what model belongs to this collection
	localStorage: new Backbone.LocalStorage('session_store'), // sth that you need to 
	
/*	initialize: function ()
	{
		//app.auth_collection.fetch();
		app.user_collection.fetch();
		var admin = new app.AdminModel();
		var users = app.user_collection.toJSON();
		console.log(users);
	},*/
	
	login: function ( data )
	{
			// brings the user data
			var user = app.user_collection.where({
				username: data.usrname,
				pswd: data.pswd
			}); // return an array of models searching by attributes
			
			// ask if the user is logged
			if (user.length > 0){
				
				app.session_collection.fetch();
				var session = app.session_collection.get(0); // return a model searching by id
				
				if (!session){
					session = new app.SessionModel({ session: true });
					app.session_collection.add(session);
					session.save();
					app.session_collection.fetch();	
				}else{
					session.set({
						session: true
					});
					session.save();
					app.session_collection.fetch();					
				}
				// login succeessed
				return true; 
			}else{
				// login failed
				return false;
			}	
	},
	
	check_login: function () {

		// GET USER DATA
		app.session_collection.fetch();
		var session = app.session_collection.get(0);
		console.log(session);
		// CHECK IF EXIST
		if (session.toJSON().session == true){
			// STILL LOGIN
			return true;
		}
		else{
			// NOT LOGGED IN
			window.location.href = '#sign-in';
		}
	},

	logout: function () {

		// GET USER DATA
		app.session_collection.fetch();
		var session = app.session_collection.get(0);

		if (!session){
			// CHANGE STATUS TO FALSE
			session.set({
				session: false
			});
			session.save();
			app.session_collection.fetch();
		}

		window.location.href = '#sign-in';
	}
});

app.session_collection = new app.SessionCollection();
