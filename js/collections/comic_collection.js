

/*
 * COMIC COLLECTION
 * 
 */


app.comicCollection = Backbone.Collection.extend({
	
	model: app.comicModel,
	localStorage: new Backbone.LocalStorage('comics_store'),
	
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
	cover: 'img/covers/Batman_Detective_Comics_Vol_2_22.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus'
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Daredevil',
	creator:'universal comics',
	cover: 'img/covers/daredevil_thManWithOutFear.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus'
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Superman vs Booser Gold',
	creator:'universal comics',
	edition: 'special edition',
	cover: 'img/covers/superman_vs_voosterGold.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus'
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Thor',
	creator:'marvel comics',
	cover: 'img/covers/Thor.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus'
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Thor journey into mystery',
	creator: 'marvel comics',
	cover: 'img/covers/thor_journey_into_mystery.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus'
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Batman Detective Vol 2-2',
	creator:'lorem ipsum',
	edition:'fallen edition',
	cover: 'img/covers/Batman_Detective_Comics_Vol_2_2.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus'
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Iron Man',
	creator: 'Marvel Comic',
	edition: 'Custom Edition',
	cover: 'img/covers/iron_man_custom_edition.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus'	
});

app.comic_collection.create({
	id: app.comic_collection.nextOrder(), 
	title:'Spawn',
	creator: 'Mad comics',
	edition: 'Mad Edition',
	cover: 'img/covers/spawn_comic.jpg',
	detail: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras volutpat scelerisque diam ut accumsan. Vivamus'

});




app.comic_collection.fetch();





