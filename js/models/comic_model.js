

/*
 *  COMIC MODEL 
 * 
 */



app.comicModel = Backbone.Model.extend({
	
	
	defaults: {
		id:0,
		creator:'', // should be a full name
		title: '',
		date: '', // 1st edition
		edition: '', // collections !???
		description: '',
		img: '' // should be a path
	}
});
