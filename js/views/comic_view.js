


app.comicView = Backbone.View.extend({
	
	el: '#app_content',
	
/*	events: {
		'click .btn-comic-detail' : renderComicDetail
	},¨*/   
	
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
		app.sidebar_view = new app.sidebarView();
		app.sidebar_view.render(most_recommended);
	},
	
	renderComicDetail: function (id,evt)
	{	
		if(evt) evt.preventDefault();
		
		var comic = app.comic_collection.get(id);
		var comic_detail_view = app.comicDetailView();
		comic_detail_view.render(comic.toJSON());
	},
	
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
		var tpl = _.template(this.template, {jsonComic: comic } );
		this.$el.html( tpl );
		return this;
	}
});



app.comic_view = new app.comicView();

