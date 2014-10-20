

/*
 *  navbar view render the navigation bar needed to the guest/admin user to move througth the site
 */

app.navbarView = Backbone.View.extend({

	el: '#app_navbar',
	tagName: 'div',
	model: app.userModel,
	template: $('#tpl_navbar_partial').html(),

	render: function (user) {
		var tpl = _.template(this.template, { guest : user });
		this.$el.html( tpl );
		return this;
	}

});


app.navbar_guest_view = new app.navbarView();
