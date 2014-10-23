

/*
 *  navbar view render the navigation bar needed to the guest/admin user to move througth the site
 */

app.navbarView = Backbone.View.extend({

	el: '#app_navbar',
	tagName: 'div',
	model: app.userModel,
	template: $('#tpl_navbar_partial').html(),

	render: function (id) {
		var user = app.user_collection.get(id);
		console.log(user,' navbarView user parameter');
		var tpl = _.template(this.template, { guest : user.get('username') });
		this.$el.html( tpl );
		return this;
	}

});


app.navbar_guest_view = new app.navbarView();
