jQuery(document).ready(function($) {

	var secondaryNav = $('#secondary_nav');

	function foldSecondaryNav() {
		$('#masthead .wrapper').append(secondaryNav);
	}
	
	function unfoldSecondaryNav() {
		$('#sidebar').prepend(secondaryNav);
	}

	Harvey.attach('screen and (max-width:680px)', {
		on: foldSecondaryNav,
		off: unfoldSecondaryNav
	});

});