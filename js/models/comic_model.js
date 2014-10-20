

/*
 *  COMIC MODEL 
 * 
 */



app.comicModel = Backbone.Model.extend({
	
	
	defaults: {
		id:0,
		title: '',
		creator:'',
		edition: '', // collections !???
		cover: '', // should be a path
		detail: '',
		genre:'',
		recommended:0,
		searched:0,
		qualification:0,
	}
});
