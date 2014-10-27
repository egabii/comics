

/*
 * 
 */


app.gameView = Backbone.View.extend({
	
	el: '#app_content',
	
	initialize: function ()
	{
		app.game_collection.fetch();		
	},
	
	renderList: function ()
	{
		var list_view = new app.gameListView({ collection: app.game_collection });
		list_view.render();
	},
	
	renderSingleGame: function (id)
	{
		var game = app.game_collection.get(id);
		console.log(game, ' game from game single view ');
		var single_view = new app.gameSingleView({ model: game });
		single_view.render();
	}
});


app.gameListView = Backbone.View.extend({
	
	el: '#app_content',
	template: $('#tpl_list_games').html(),
	
	render: function ()
	{
		$('#app_content').addClass('col-md-9');
		var tpl = _.template(this.template, { jsonGame: this.collection.toJSON() });
		this.$el.html( tpl );
		return this;
	}
});


app.gameSingleView = Backbone.View.extend({
	
	el: '#app_content',
	template: $('#tpl_game_single').html(),
	
	render: function ()
	{
		$('#app_content').addClass('col-md-9');
		var tpl = _.template(this.template, { jsonGame: this.model.toJSON() });
		this.$el.html( tpl );
		return this;
	}
});

app.game_view = new app.gameView();