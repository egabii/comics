

/*
 * HOME VIEW
 */


/*
 * var compiled = _.template("hello: <%= name %>");
compiled({name: 'moe'});
=> "hello: moe" 
 */


app.HomeView = Backbone.View.extend({
	
	el: '#app_content',
	
	template: $('#tpl_home').html(),
	
	initialize: function() { this.render(); },
	render: function(){
		this.$el.html(this.template);
		var compiled = _.template("hello: <%= name %>");
		compiled({name: user.get('username')});
	},
	
});

app.home_view = new app.HomeView();
