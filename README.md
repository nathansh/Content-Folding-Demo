# Content folding with enquire.js and jQuery Demo

Enquire download and syntax documentation is available at [the enquire.js website](http://wicky.nillia.ms/enquire.js/).

## Moving DOM elements with jQuery

Cache the element you want to move around:

	var secondaryNav = $('#sidebar .secondary_nav');

Write a fold and unfold functions. jQuery's .append() and .prepend() methods going to do most of the work here.

Fold function:

	function foldSecondaryNavIntoHeader() {
		$("#masthead").append(secondaryNav);
	}

Unfold function:

	function unfoldSecondaryNavIntoSidebar() {
		$("#sidebar").prepend(secondaryNav);
	}


## With Enquire

    enquire.register("screen and (max-width: 680px)", {
    	match: function() {
    		foldSecondaryNavIntoHeader();
    	},
    	unmatch: function() {
    		unfoldSecondaryNavIntoHeader();
    	}
    });
