


/* ********************************* */

app.SessionCollection = Backbone.Collection.extend({
	
	model: app.SessionModel, // always say what model belongs to this collection
	localStorage: new Backbone.LocalStorage('session_store'), // sth that you need to 
	
	login: function ( data ) {

		// GET USER DATA
		var user = app.user_collection.findWhere(data);
		console.log(user);
		// CHECK IF EXIST
		if(user)
		{
			this.fetch();

			var session = this.get(0);
			if(!session)
			{
				session = new app.SessionModel({ 
					session	 : true, 
					username : user.get('username') 
				});
				//console.log(session.toJSON());
				this.add(session);
				session.save();
				this.fetch();
			}
			else
			{
				session.set({
					session  : true,
					username : user.get('username')
				});
				session.save();
				this.fetch();
			}

			return true;
		}
		// LOGIN FAIL
		return false;
		
	},
	
	check_login: function () {
		
		this.fetch();
		// GET SESSION DATA
		var session = this.get(0);
		console.log(session, 'session ');
		// CHECK IF EXIST
		if (session){
			// STILL LOGIN
			return true;
		}
		return false; // not login anymore
	},

	logout: function () {

		// GET USER DATA
		this.fetch();
		var session = this.get(0);
		console.log(session);
		if (session.get('session')){
			// CHANGE STATUS TO FALSE
			var aux = this.remove(session);
			aux.destroy();
			this.fetch();
			return true;
		}
		return false;

	}
});

app.session_collection = new app.SessionCollection();
app.session_collection.fetch();
