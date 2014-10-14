





app.AuthCollection = Backbone.Collection.extend({
	
	model: app.AuthModel,
	localStorage: new Backbone.LocalStorage('auth_store'),
	isEmpty: function ( val ) 
	{
		if(val == 0 || val == false || val == '' || val == {} || val == [] || val == null || val == undefined)
		{
			return true;
		}
		return false;
		
		
	}
});


/* ********************************* */

app.SessionCollection = Backbone.Collection.extend({
	
	model: app.SessionModel, // always say what model belongs to this collection
	localStorage: new Backbone.LocalStorage('session_store'), // sth that you need to 
	
	initialize: function ()
	{
		app.auth_collection.fetch();
		var user = new app.AuthModel({
			usrname: 'gabriel',
			pswd: '1234'
		});
				
		if (app.auth_collection.isEmpty(user)){
			
			app.auth_collection.add(user);
			user.save();
			app.generic_collection.fetch();
		}
	},
	
	login: function ( data )
	{
			// brings the user data
			var user = app.auth_collection.where({
				usrname: data.usrname,
				pswd: data.pswd
			}); // return an array of models searching by attributes
			
			// ask if the user is logged
			if (!app.auth_collection.isEmpty(user[0])){
				
				app.session_collection.fetch();
				var session = app.session_collection.get(0); // return a model searching by id
				
				if (!app.auth_collection.isEmpty(session)){
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

		// CHECK IF EXIST
		if(session.toJSON().session == true)
		{
			// STILL LOGIN
			return true;
		}
		else
		{
			// NOT LOGGED IN
			window.location.href = '';
		}
	},

	logout: function () {

		// GET USER DATA
		app.session_collection.fetch();
		var session = app.session_collection.get(0);

		if(!app.generic_collection.isEmpty(session))
		{
			// CHANGE STATUS TO FALSE
			session.set({
				session: false
			});
			session.save();
			app.session_collection.fetch();
		}

		window.location.href = '';
	}
});
