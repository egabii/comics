

/*
 * 
 */

app.gameCollection = Backbone.Collection.extend({
	
	model: app.gameModel,
	localStorage: new Backbone.LocalStorage('games_store'),
	
	nextOrder: function ()
	{
		if (!this.length){
			return 1;
		}
		
		return this.last().get('id') + 1;
	}
});


app.game_collection = new app.gameCollection();

app.game_collection.create({
	id: app.game_collection.nextOrder(),
	name: 'Iron Man Lego',
	year:'2012',
	detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	cover:'img/games/IronMan3_Lego.jpg'
	
});

app.game_collection.create({
	id: app.game_collection.nextOrder(),
	name: ' Ultimate Marvel vs Capcom',
	year:'2010',
	detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	cover:'img/games/marvelVsCapcom_ultimate.jpg'
	
});

app.game_collection.create({
	id: app.game_collection.nextOrder(),
	name: 'Marvel Superhero Squad',
	year:'2014',
	detail:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	cover:'img/games/Marvel_superhero_squad.jpg'
	
});

app.game_collection.fetch();
