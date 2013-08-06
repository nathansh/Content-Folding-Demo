jQuery(document).ready(function($) {

	Modernizr.load({
		test: window.matchMedia,
		nope: ['js/matchMedia.js', 'js/matchMedia.addListener.js'],
		both: 'js/enquire.min.js',
		complete: function() {
			contentFolding.init();
		}
	});

	var contentFolding = {
		obj: $('#secondary_nav'),
		foldSecondaryNav: function() {
			$('#masthead .wrapper').append(contentFolding.obj);
		},
		unfoldSecondaryNav: function() {
			$('#sidebar').prepend(contentFolding.obj);
		},
		init: function() {
			enquire.register("screen and (max-width: 680px)", {
				match: function() {
					contentFolding.foldSecondaryNav();
				},
				unmatch: function() {
					contentFolding.unfoldSecondaryNav();
				}
			}) // enquire.register
		} // init
	}; // contentFolding

});