

/*
 * COMIC COLLECTION
 * 
 */


app.comicCollection = Backbone.Collection.extend({
	
	model: app.comicModel,
	localStorage: new Backbone.LocalStorage('comics_store'),
	
	most_recommended: function ()
	{
		// only the 5 most recommended
		var comics = this.toJSON(); // array of models
		
		return comics.sort(function(a,b){
			return b.recommended - a.recommended;
		}).slice(0,5);
	},
	
	most_searched: function ()
	{
		var comics = this.toJSON(); // array of models
		
		return comics.sort(function(a,b){
			return b.searched - a.searched;
		}).slice(0,5);		
	},
	nextOrder: function()
	{
		if (!this.length){
			return 1;
		}
		return this.last().get('id') + 1;
	},
	
	comparator: function (comic)
	{
		return comic.get('id');
	}
});


app.comic_collection = new app.comicCollection();
//app.comic_collection.fetch();

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Batman Dectective Vol 2-22',
	creator:'lorem ipsum',
	edition:'fallen edition',
	cover: 'img/covers/Batman_Detective_Comics_Vol_2_22.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus',
	genre:'police',
	recommended:2,
	searched: 300
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Daredevil',
	creator:'universal comics',
	edition:'daredevil edition',
	cover: 'img/covers/daredevil_thManWithOutFear.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus',
	genre:'action',
	recommended:20,
	searched: 1
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Superman vs Booser Gold',
	creator:'universal comics',
	edition: 'special edition',
	cover: 'img/covers/superman_vs_voosterGold.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus',
	genre:'superheroe',
	recommended:12,
	searched: 50
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Thor',
	creator:'marvel comics',
	edition: 'thor edition',
	cover: 'img/covers/Thor.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus',
	genre:'superheroe',
	recommended:100,
	available: false,
	searched: 120
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Thor journey into mystery',
	creator: 'marvel comics',
	edition:'first edition',
	cover: 'img/covers/thor_journey_into_mystery.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus',
	genre:'superheroe',
	recommended:12,
	searched: 15
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Batman Detective Vol 2-2',
	creator:'lorem ipsum',
	edition:'fallen edition',
	cover: 'img/covers/Batman_Detective_Comics_Vol_2_2.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus',
	genre:'police',
	recommended:50,
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Iron Man',
	creator: 'Marvel Comic',
	edition: 'Custom Edition',
	cover: 'img/covers/iron_man_custom_edition.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus',	
	genre:'science-fiction',
	recommended:124,
	searched: 205,
	available: false
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Spawn',
	creator: 'Mad comics',
	edition: 'Mad Edition',
	cover: 'img/covers/spawn_comic.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus',
	genre:'thriller',
	recommended: 60,
	searched: 40
});




app.comic_collection.fetch();





