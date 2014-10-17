

/*
 * COMIC COLLECTION
 * 
 */


app.comicCollection = Backbone.Collection.extend({
	
	model: app.comicModel,
	localStorage: new Backbone.localStorage('comics_store'),
});


app.comic_collection = new app.comicCollection();

