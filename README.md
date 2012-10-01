# Content folding with harvey.js and jQuery Demo

View demo at http://nathanshubert.github.com/Content-Folding-Demo

Harvey is available on GitHub at https://github.com/harvesthq/harvey.

## Harvey's syntax

	Harvey.attach('screen and (min-width:600px) and (max-width:900px)', {
	  setup: setup_function,
	  on: on_function,
	  off: off_function
	});

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

Functions for a breakpoint as a whole

	function foldMidsizeBreakpoint() {
		foldSecondaryNavIntoHeader();
		...
	}

## With Harvey

	Harvey.attach('screen and (min-width:600px) and (max-width:900px)', {
		setup: setupMidsizeBreakpoint,
		on: foldMidsizeBreakpoint,
		off: unfoldMidsizeBreakpoint
	});