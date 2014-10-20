

/*
 *  navbar view render the navigation bar needed to the guest/admin user to move througth the site
 */

app.navbarView = Backbone.View.extend({

	el: '#app_navbar',
	tagName: 'div',
	template: $('#tpl_navbar_partial').html(),

	render: function () {
		this.$el.html( this.template );
	}

});


app.navbar_guest_view = new app.navbarView();
