

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
	template: _.template($('#tpl_home').html()),
	
	// initialize: function() { this.render(); },
	render: function(){
		var tpl = this.template({});
		this.$el.html(tpl);
	}
	
});

app.home_view = new app.HomeView();
