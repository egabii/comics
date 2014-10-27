

/*
 * 
 * 
 */


app.characterView = Backbone.View.extend({
	
	el: '#app_content',
	
	initialize: function (){
		app.character_collection.fetch();		
	},
	
	renderList: function ()
	{
		var list_view = new app.characterListView({ collection: app.character_collection });
		list_view.render();
	},
	
	renderSingleCharacter: function (id)
	{
		var character = app.character_collection.get(id);
//		console.log(character, ' character from character single view ');
		var single_view = new app.characterSingleView({ model: character });
		single_view.render();
	}
});


app.characterListView = Backbone.View.extend({
	
	el: '#app_content',
	template: $('#tpl_list_character').html(),
	
	render: function ()
	{
		$('#app_content').addClass('col-md-9');
		var tpl = _.template(this.template, { jsonCharacter: this.collection.toJSON() });
		this.$el.html( tpl );
		return this;
	}
});


app.characterSingleView = Backbone.View.extend({
	
	el: '#app_content',
	template: $('#tpl_character_single').html(),
	
	render: function ()
	{
		var tpl_star = 'glyphicon glyphicon-star'; // create template for stars
		$('#app_content').addClass('col-md-9');
		var tpl = _.template(this.template, { jsonCharacter: this.model.toJSON() });
		this.$el.html( tpl );
		return this;
	}
});

app.character_view = new app.characterView();
