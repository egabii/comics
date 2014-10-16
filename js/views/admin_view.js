

/*
 * ADMIN VIEW
 */


/*
 * var compiled = _.template("hello: <%= name %>");
compiled({name: 'moe'});
=> "hello: moe" 
 */


app.AdminView = Backbone.View.extend({
	
	el: '#app_content',
	template: $('#tpl-admin').html(),
	initialize: function() { 
		//this.template = _.template($('#tpl-admin').html());
		this.render(); 
	},
	render: function(){
		this.$el.html( this.template);
	}
	
});

app.admin_view = new app.AdminView();
