


/* ********************************* */

app.SessionCollection = Backbone.Collection.extend({
	
	model: app.SessionModel, // always say what model belongs to this collection
	localStorage: new Backbone.LocalStorage('session_store'), // sth that you need to 

	login: function ( data )
	{	
		// verify if the user exist and ask if the user is logged
		if (!this.check_login()){
			session = new app.SessionModel({ session: true, username:data.username });
			this.add(session);
			session.save();	
			// login succeessed
			return true;
		}
		// login failed
		return false;
	},
	
	check_login: function () {

		// GET SESSION DATA
		var session = this.get(0);
		// CHECK IF EXIST
		if (session){
			// STILL LOGIN
			return true;
		}
		return false;
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
			this.fetch();
		}

		window.location.replace('#sign-in');
	}
});

app.session_collection = new app.SessionCollection();
