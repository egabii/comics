

app.loanCollection = Backbone.Collection.extend({
	
	
	model: app.loanModel,
	localStorage: new Backbone.LocalStorage('loans_store'),
	
	
});


app.loan_collection = new app.loanCollection();
app.loan_collection.fetch();
