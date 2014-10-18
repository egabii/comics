

/*
 * collection of: Users
 * description: set all the methode needed to create new user, edit user 
 * profile and delete the account
 * 
 */




app.UserCollection = Backbone.Collection.extend({
	model: app.UserModel,
	localStorage: new Backbone.LocalStorage('user_store'),
	
	initialize: function ()
	{
		var admin = {
		username: 'sheldon',
		pswd: 'bazinga',
		admin: true
		};
		this.create(admin);
		//this.fetch();
	},

	createNewUser: function (data)
	{	
		var regexp = /[A-Za-z0-9]+/; // regex for user
		var regexp_pswd = /[A-Za-z0-9]{7,20}$/; // regex for password
		
		if (!this.ifExist(data)){
			// data is a litary object data === {}
			
			// becareful if you use id property, .add() is sensitive to id custom property
			// advice: let Backbone to add the identifier "cid" to every model that you will create
			/* The collection simply prevents you from adding models that have the same id. If you were to add models with 
			 * different ids everything should work just fine. In your case if you really don't intend to manage the ids by 
			 * yourself you could omit them upon model instantiation and have backbone generate them for you
			 */

			var user_auth = regexp.exec(data.username); // return an array
			console.log(user_auth,'result of regex');
			var pswd_auth = regexp_pswd.exec(data.pswd); // return an array
			var lastOne = this.length == 0 ? 0: (this.length - 1); // assign id !
			
			if (user_auth[0] === data.username && data.pswd === pswd_auth[0]){
				data.id = lastOne + 1;
				var user = new app.UserModel(data);
				this.push(user);
				user.save();
				this.fetch();
				return true;
			}
			return false;
		}else{
			console.log(data,' ya existe');
		}
	},
	
	ifExist: function (data)
	{
		var result = this.findWhere(data);
		/*var result = this.find(function (model){ 
			return model.get('username') === data.username; 
		}); */
		
		if (result != undefined){
			return true;
		}
		return false;
	},
	
	deleteUser: function (data)
	{
		if (this.ifExist(data)) {
			this.remove(user);
			
		}else{
			console.log('error this user doesn\'t exist');
		}
	},
	
	editProfile: function(){ console.log('edit profile'); },
	
	comparator: 'username'
	
});


app.user_collection = new app.UserCollection();
// brings all the models save in the localStorage
app.user_collection.fetch();


//console.log(app.user_collection.localStorage);











