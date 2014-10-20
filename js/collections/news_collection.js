


app.newsCollection = Backbone.Collection.extend({
	
	model: app.newsModel,
	localStorage: new Backbone.LocalStorage('news_store'),
	comparator: function (news)
	{
		return news.get('id');
	}
});
