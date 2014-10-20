


app.footerView = Backbone.View.extend({
	el: '#footer_content',
	tagName:'footer',
	template: $('#footer_section').html(),
    render: function () {
        var tmpl = _.template(this.template); //tmpl is a function that takes a JSON object and returns html

        this.$el.html(tmpl); //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        return this;
    }
});

app.footer_view = new app.footerView();
