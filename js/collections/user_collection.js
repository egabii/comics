

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
		//this.on('change', console.log('a new user was created'), this);
	},
	
	createNewUser: function (data)
	{
		if (!app.auth_collection.isEmpty(data)) {
			
			if (!this.ifExist(data)){
				// becareful if you use id property, .add() is sensitive to id custom property
				// advice: let Backbone to add the identifier "cid" to every model that you will create
				/* The collection simply prevents you from adding models that have the same id. If you were to add models with 
				 * different ids everything should work just fine. In your case if you really don't intend to manage the ids by 
				 * yourself you could omit them upon model instantiation and have backbone generate them for you
				 */
				this.add(data); 
				
			}else{
				console.log('error '+data.get('email')+' already exist');
			}
			
		}else{
			console.log('the argument is empty');
		}
	},
	
	ifExist: function (data)
	{
		var result = this.find(function (model){ 
			return model.get('email') === data.get('email'); 
		});
		console.log(result);
		if (result != undefined){
			return true;
		}
		return false;
	},
	
	deleteUser: function (data)
	{
		if (app.auth_collection.isEmpty(data)){
			
			if (this.ifExist(data)) {
				this.remove(user);
				
			}else{
				console.log('error this user doesn\'t exist');
			}
		}
	},
	
	editProfile: function()
	{
		console.log('edit profile');
	},
	
	comparator: 'username'
	
});


app.auth_collection = new app.AuthCollection();
app.user_collection = new app.UserCollection();

var obj1 = new app.UserModel({
	username:"fo@21",
	pswd:'1234',
	email:'foo@example.com',
	fullName:'cosme fulanito'
});

var obj2 = new app.UserModel({
	username:"bar12",
	pswd:'1234',
	email:'foo@example.com',
	fullName:'bart simpson'
});

var obj3 = new app.UserModel({
	username:"bar12",
	pswd:'1234',
	email:'bar.grosso@example.com',
	fullName:'homer simpson'
});  

var obj4 = new app.UserModel({
	username: 'canalla31',
	pswd: '1234',
	email:'carc@example.com',
	fullname:'larguirucho'
});

app.user_collection.createNewUser(obj1);
app.user_collection.createNewUser(obj2);
app.user_collection.createNewUser(obj3);
app.user_collection.createNewUser(obj4);
console.log(app.user_collection.toJSON());












