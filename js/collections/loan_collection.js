

app.loanCollection = Backbone.Collection.extend({
	
	
	model: app.loanModel,
	localStorage: new Backbone.LocalStorage('loans_store'),
	
	nextOrder: function ()
	{
		if (!this.length){
			return 1;
		}
		return this.last().get('id') + 1;
	},
	
	mostLoans: function (){
		console.log(' most loans ');		
	}

});






app.loan_collection = new app.loanCollection();
app.loan_collection.fetch();
