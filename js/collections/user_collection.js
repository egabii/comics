

/*
 * collection of: Users
 * description: set all the methode needed to create new user, edit user 
 * profile and delete the account
 * 
 */




app.UserCollection = Backbone.Collection.extend({
	model: app.userModel,
	localStorage: new Backbone.LocalStorage('user_store'),
	url:'/users',

	createNewUser: function (data)
	{	
		var regexp = new RegExp('[A-Za-z0-9]+'); // regex for user
		var regexp_pswd = new RegExp('[A-Za-z0-9]{7,20}$'); // regex for password
		
		if (!this.ifExist(data)){
			// data is a litary object data === {}
			
			// becareful if you use id property, .add() is sensitive to id custom property
			// advice: let Backbone to add the identifier "cid" to every model that you will create
			/* The collection simply prevents you from adding models that have the same id. If you were to add models with 
			 * different ids everything should work just fine. In your case if you really don't intend to manage the ids by 
			 * yourself you could omit them upon model instantiation and have backbone generate them for you
			 */
			if (regexp.test(data.username) && regexp_pswd.test(data.pswd)){
				
				if (data.username === 'sheldon'){
					data.admin = true;
				}
				
				data.id = this.nextOrder();
				var user = new app.userModel(data);
				this.add(user);
				user.save();
				//this.fetch();
				return true;
			}
			return false;
		}else{
			console.log(data,' already exist');
		}
	},
	
	ifExist: function (data){ return this.findWhere(data); },
	
	comparator: function (user)
	{
		return user.get('username');
	},
	
	nextOrder: function (){
		if (!this.length){
			return 1;
		}
		return this.last().get('id') + 1;
	}
	
});


app.user_collection = new app.UserCollection();
app.user_collection.fetch();












