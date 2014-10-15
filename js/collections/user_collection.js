

/*
 * collection of: Users
 * description: set all the methode needed to create new user, edit user 
 * profile and delete the account
 * 
 */




app.UserCollection = Backbone.Collection.extend({
	model: app.UserModel,
	localStorage: new Backbone.LocalStorage('user_store'),

	createNewUser: function (data)
	{
		if (!this.ifExist(data)){
			// data is a litary object data === {}
			
			// becareful if you use id property, .add() is sensitive to id custom property
			// advice: let Backbone to add the identifier "cid" to every model that you will create
			/* The collection simply prevents you from adding models that have the same id. If you were to add models with 
			 * different ids everything should work just fine. In your case if you really don't intend to manage the ids by 
			 * yourself you could omit them upon model instantiation and have backbone generate them for you
			 */
			var regexp = /[A-Za-z0-9]+/; // validating user with regex
			var regexp_pswd = /[A-Za-z0-9]{7,20}$/;
			var user_auth = regexp.exec(data.username); // return an array
			var password = regexp_pswd.exec(data.pswd); // return an array
			var lastOne = this.length == 0 ? 0: this.at(this.length - 1);
			
			if (user_auth[0] === data.username && data.pswd === password[0]){
				console.log('everything is ok!!');
				data.id = lastOne.get('id')+ 1;
				var user = new app.UserModel(data);
				this.add(user);
				user.save();
				return true;
			}
			return false;
		}
	},
	
	ifExist: function (data)
	{
		var result = this.find(function (model){ 
			return model.get('username') === data.username; 
		});
		
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

/* var obj1 = new app.UserModel({
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
console.log(app.user_collection.toJSON()); */











