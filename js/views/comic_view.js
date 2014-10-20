


app.comicView = Backbone.View.extend({
	
	el: '#app_content',
	
	initialize: function()
	{
		// get all the comics from local storage
		app.comic_collection.fetch();
	},
		// render comics view list
	renderList: function ()
	{
		var list_view;

		list_view = new app.comicListView();
		list_view.render(app.comic_collection);
	},
	renderMostRecommended: function ()
	{
		var most_recommended = app.comic_collection.most_recommended();
		var sidebar = new app.sidebarView();
		sidebar.render(most_recommended);
	},
	
	renderComicDetail: function (id)
	{
		var comic = app.comic_collection.get(id);
		var comic_detail_view = app.comicDetailView({ model: comic.toJSON() });
	}
});


app.comicListView = Backbone.View.extend({
	
	el:'#app_content',
	template: $('#list_comics').html(),
	model: app.comicModel,
	
	render: function (comics)
	{
		$('#app_content').addClass('col-md-8');
		var tpl = _.template(this.template,{jsonComics: comics.toJSON()});
		this.$el.html( tpl );
		return this;
	}
});

app.comicDetailView = Backbone.View.extend({
	
	el:'#app_content',
	template: $('#comic_detail').html(),
	model:app.comicModel,
	
	render: function (comic)
	{
		$('#app_content').addClass('col-md-8'); 
		var tpl = _.template(this.template, this.model );
		this.$el.html( tpl );
		return this;
	}
});



app.comic_view = new app.comicView();

