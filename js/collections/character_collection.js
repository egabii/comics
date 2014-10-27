


/*
 * 
 * 
 */


app.characterCollection = Backbone.Collection.extend({
	
	model: app.characterModel,
	localStorage: new Backbone.LocalStorage('character_store'),
	
	nextOrder: function ()
	{
		if(!this.length){
			return 1;
		}
		
		return this.last().get('id') + 1;
	}
});


app.character_collection = new app.characterCollection();

app.character_collection.create({
		id: app.character_collection.nextOrder(),
		name:'Batman',
		powers:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo risus, consequat vel tristique pretium, pretium id felis.',
		cover:'img/characters/Batman.png'
});


app.character_collection.create({
		id: app.character_collection.nextOrder(),
		name:'Character2',
		powers:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo risus, consequat vel tristique pretium, pretium id felis.',
		cover:'img/characters/character2.png'
});


app.character_collection.create({
		id: app.character_collection.nextOrder(),
		name:'Iron Man',
		powers:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo risus, consequat vel tristique pretium, pretium id felis.',
		cover:'img/characters/IronMan.png'
});

app.character_collection.create({
		id: app.character_collection.nextOrder(),
		name:'Spider Man',
		powers:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo risus, consequat vel tristique pretium, pretium id felis.',
		cover:'img/characters/Spiderman.png'
});

app.character_collection.create({
		id: app.character_collection.nextOrder(),
		name:'Superman',
		powers:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo risus, consequat vel tristique pretium, pretium id felis.',
		cover:'img/characters/Superman.png'
});

app.character_collection.fetch();
