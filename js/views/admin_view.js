

/*
 * ADMIN VIEW
 */





app.AdminView = Backbone.View.extend({
	
	el: '#app_content',
	template: $('#tpl_admin').html(),
	model: app.user_collection.get(0),
    render: function () 
    {
    	console.log('view');
        var tmpl = _.template(this.template); //tmpl is a function that takes a JSON object and returns html
       
        this.$el.html(tmpl); //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        return this;
    }
	
});

app.admin_view = new app.AdminView();
