


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
	
	// render a collection view 
	renderList: function ()
	{
		var list_view;

		list_view = new app.comicListView({ collection: app.comic_collection });
		list_view.render();
	},
	renderMostRecommended: function ()
	{
		var most_recommended = app.comic_collection.most_recommended();
		app.sidebar_view = new app.sidebarView();
		app.sidebar_view.render(most_recommended);
	},
	
	// render a model view
	renderComicDetail: function (id)
	{	
		app.comic_collection.fetch();
		var comic = app.comic_collection.get(id);
		var comic_detail_view = new app.comicDetailView({model: comic});
		comic_detail_view.render();
	},
	
});


app.comicListView = Backbone.View.extend({
	
	el:'#app_content',
	template: $('#list_comics').html(),
//
	
	render: function ()
	{
		$('#app_content').addClass('col-md-8');
		var tpl = _.template(this.template,{ jsonComics: this.collection.toJSON()});
		this.$el.html( tpl );
		return this;
	}
});

app.comicDetailView = Backbone.View.extend({
	
	el:'#app_content',
	template: $('#tpl_comic_detail').html(),
	
	render: function ()
	{
		$('#app_content').addClass('col-md-8'); 
		var tpl = _.template(this.template, { jsonComic: this.model.toJSON() });
		this.$el.html( tpl );
		return this;
	}
});



app.comic_view = new app.comicView();

