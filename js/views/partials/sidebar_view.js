


/*
 *  SIDEBAR VIEW
 *  DESCRIPTION: The side bar should contain minimum 
 * the following information: popular, qualifications, top searches and recommended.
 */



app.sidebarView = Backbone.View.extend({

	el: '#sidebar_content',

	template: $('#tpl_sidebar_section').html(),

	model: app.comicModel,

	render: function ( most_recommended ) {
		var tpl = _.template(this.template, { JsonData : most_recommended });	
		//var render = this.template();
		this.$el.html( tpl );
		return this;
	}

});
