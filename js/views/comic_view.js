


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
		var recommendedView = new app.comicRecommendedView();
		recommendedView.render(most_recommended);
	},
	
	renderTopSearched: function ()
	{
		var top_searched = app.comic_collection.top_searched();
		var top_searched_view = new app.comicTopSearchedView();
		top_searched_view.render(top_searched);
	},
	
	renderQualification: function ()
	{
		var q = app.comic_collection.most_qualifications();
		var q_view = new app.comicQualificationView();
		q_view.render(q);
	},
	
	renderListByGenre: function (genre)
	{
		var list_by_genre = app.comic_collection.list_byGenre(genre);
		var list_byGenre_view = new app.comicListByGenreView();
		list_byGenre_view.render(list_by_genre);	
	},
	
	// render a model view
	renderComicDetail: function (id)
	{	
		app.comic_collection.fetch();
		var comic = app.comic_collection.get(id);
		var comic_detail_view = new app.comicSingleView({ model: comic });
		comic_detail_view.render();
	}, 
	
});


app.comicListView = Backbone.View.extend({
	
	el:'#app_content',
	template: $('#list_comics').html(),
//
	render: function ()
	{
		$('#app_content').addClass('col-md-9');
		var tpl = _.template(this.template,{ jsonComics: this.collection.toJSON()});
		this.$el.html( tpl );
		return this;
	}
});

/*app.comicSingleView = Backbone.View.extend({
	
	el:'#app_content',
	template: $('#tpl_comic_detail').html(),
	
	render: function ()
	{
		$('#app_content').addClass('col-md-9'); 
		var tpl = _.template(this.template, { jsonComic: this.model.attributes });
		this.$el.html( tpl );
		return this;
	}
}); */ 

app.comicRecommendedView = Backbone.View.extend({
	el:'#app_content',
	template: $('#tpl_reco_comics').html(),
	
	render: function (comics)
	{
		$('#app_content').addClass('col-md-9'); 
		var tpl = _.template(this.template, { jsonComic: comics });
		this.$el.html( tpl );
		return this;
	}
	
});

app.comicTopSearchedView = Backbone.View.extend({
	el:'#app_content',
	template: $('#tpl_top_searched').html(),
	
	render: function (comics)
	{
		$('#app_content').addClass('col-md-9'); 
		var tpl = _.template(this.template, { jsonComic: comics });
		this.$el.html( tpl );
		return this; 
	}
});

app.comicQualificationView = Backbone.View.extend({
	el:'#app_content',
	template: $('#tpl_qualification').html(),
	
	render: function (comics)
	{
		$('#app_content').addClass('col-md-9'); 
		var tpl = _.template(this.template, { jsonComic: comics });
		this.$el.html( tpl );
		return this; 
	}
});

app.comicListByGenreView = Backbone.View.extend({
	el:'#app_content',
	template: $('#tpl_list_byGenre').html(),
	
	render: function (comics)
	{
		$('#app_content').addClass('col-md-9'); 
		var tpl = _.template(this.template, { jsonComic: comics });
		this.$el.html( tpl );
		return this; 
	}
});



app.comic_view = new app.comicView();

