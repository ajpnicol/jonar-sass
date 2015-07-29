var Boxlayout = (function() {

	var $el = $( '#bl-main' ),
		$sections = $el.children( 'section' ),
		// solution section
		$section1 = $( '#solution1' ),
		$section2 = $( '#solution2' ),
		$section3 = $( '#solution3' ),
		$section4 = $( '#solution4' ),
		$currentSection
		// 2nd layer button groups
		$awesome = $( '#more1 > li' ),
		$customize = $( '#more2 > li' ),
		$implement = $( '#more3 > li' ),
		$save = $( '#more4 > li' ),
		// UX panels
		$firstPanelsContainer = $( '#bl-panel-work-items' ),
		$secondPanelsContainer = $( '#bl-panel-2-items' ),
		$thirdPanelsContainer = $( '#bl-panel-3-items' ),
		$fourthPanelsContainer = $( '#bl-panel-4-items' ),
<<<<<<< HEAD
		// var $containers = $( '#bl-container' ),
		// $sContainer = $containers.children( 'div.bl-panel-items' ),
		$group1 = $firstPanelsContainer.children( 'div' ),
		$group2 = $secondPanelsContainer.children( 'div' ),
		$group3 = $thirdPanelsContainer.children( 'div' ),
		$group4 = $fourthPanelsContainer.children( 'div' ),
		// $iPanels = $secondPanelsContainer.children( 'div' ),
		// totalWorkPanels = $workPanels.length,
		// navigating the UX panels
		// $nextWorkItem = $firstPanelsContainer.find( 'nav > span.bl-next-work' ),
=======
		// $sContainer = ,
		$workPanels = $workPanelsContainer.children( 'div' ),
		totalWorkPanels = $workPanels.length,
		// navigating the UX panels
		// $nextWorkItem = $workPanelsContainer.find( 'nav > span.bl-next-work' ),
		
>>>>>>> origin/master
		// if currently navigating the UX items
		isAnimating = false,

		// close UX panel trigger
		$closeWorkItem = $firstPanelsContainer.find( 'nav > span.close-icon' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},

		$closeSolutionItem = $secondPanelsContainer.find( 'nav > span.close-icon' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},

		$closeImplementItem = $thirdPanelsContainer.find( 'nav > span.close-icon' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
<<<<<<< HEAD

		$closeSaveItem = $fourthPanelsContainer.find( 'nav > span.close-icon' ),
=======
		$closeItem = $sections.('bl-panel-items')find( 'nav > span.close-icon' ),
>>>>>>> origin/master
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		// transition end event name
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		// support css transitions
		supportTransitions = Modernizr.csstransitions;

	function init() {
		initEvents();
	}

	function initEvents() {

		$sections.each( function() {

			var $section = $( this );

			// expand the clicked section and scale down the others
			$section.on( 'click', function() {

				if( !$section.data( 'open' ) ) {
					$section.data( 'open', true ).addClass( 'bl-expand bl-expand-top' );
					$el.addClass( 'bl-expand-item' );
				}

			} ).find( 'span.bl-icon-close' ).on( 'click', function() {

				// close the expanded section and scale up the others
				$section.data( 'open', false ).removeClass( 'bl-expand' ).on( transEndEventName, function( event ) {
					if( !$( event.target ).is( 'section' ) ) return false;
					$( this ).off( transEndEventName ).removeClass( 'bl-expand-top' );
				} );

				if( !supportTransitions ) {
					$section.removeClass( 'bl-expand-top' );
				}

				$el.removeClass( 'bl-expand-item' );

				return false;

			} );

		} );

		// clicking on a UX item: the current section scales down and the respective work panel slides up
<<<<<<< HEAD
		$awesome.on( 'click', function( event ) {
=======
		$workItems.on( 'click', function( event ) {
			$currentSection = $section1;
			$sContainer = $( '#bl-panel-work-items' );
			$sPanel = $secondPanelsContainer.children( 'div' );
			
>>>>>>> origin/master
			// scale down main section
			$currentSection.addClass( 'bl-scale-down' );

			// show panel for this work item
<<<<<<< HEAD
			$firstPanelsContainer.addClass( 'bl-panel-items-show' );

			var $panel = $firstPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentPanel = $panel.index();
=======
			$sContainer.addClass( 'bl-panel-items-show' );

			var $panel = $sContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentWorkPanel = $panel.index();
>>>>>>> origin/master
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

		$customize.on( 'click', function( event ) {
<<<<<<< HEAD
=======
			$currentSection = $section2;
			$sContainer = $( '#bl-panel-2-items' );
			$sPanel = $secondPanelsContainer.children( 'div' );
			
>>>>>>> origin/master
			// scale down main section
			$currentSection.addClass( 'bl-scale-down' );

			// show panel for this work item
			$sContainer.addClass( 'bl-panel-items-show' );

<<<<<<< HEAD
			var $panel = $secondPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
=======
			var $panel = $sContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
>>>>>>> origin/master
			currentPanel = $panel.index();
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

		$implement.on( 'click', function( event ) {
<<<<<<< HEAD
=======
			$currentSection = $section3;
			$sContainer = $( '#bl-panel-3-items' );
			$sPanel = $thirdPanelsContainer.children( 'div' );
			
>>>>>>> origin/master
			// scale down main section
			$currentSection.addClass( 'bl-scale-down' );

			// show panel for this work item
			$sContainer.addClass( 'bl-panel-items-show' );

<<<<<<< HEAD
			var $panel = $thirdPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
=======
			var $panel = $sContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
>>>>>>> origin/master
			currentPanel = $panel.index();
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

		$save.on( 'click', function( event ) {
<<<<<<< HEAD
=======
			$currentSection = $section4;
			$sContainer = $( '#bl-panel-4-items' );
			$sPanel = $fourthPanelsContainer.children( 'div' );
			
>>>>>>> origin/master
			// scale down main section
			$currentSection.addClass( 'bl-scale-down' );

			// show panel for this work item
			$sContainer.addClass( 'bl-panel-items-show' );

			var $panel = $fourthPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentPanel = $panel.index();
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

		// navigating the work items: current work panel scales down and the next work panel slides up
		// $nextWorkItem.on( 'click', function( event ) {

		// 	if( isAnimating ) {
		// 		return false;
		// 	}
		// 	isAnimating = true;
<<<<<<< HEAD

		// 	var $currentPanel = $workPanels.eq( currentWorkPanel );
		// 	currentWorkPanel = currentWorkPanel < totalWorkPanels - 1 ? currentWorkPanel + 1 : 0;
		// 	var $nextPanel = $workPanels.eq( currentWorkPanel );

		// 	$currentPanel.removeClass( 'bl-show-work' ).addClass( 'bl-hide-current-work' ).on( transEndEventName, function( event ) {
		// 		if( !$( event.target ).is( 'div' ) ) return false;
		// 		$( this ).off( transEndEventName ).removeClass( 'bl-hide-current-work' );
		// 		isAnimating = false;
		// 	} );

		// 	if( !supportTransitions ) {
		// 		$currentPanel.removeClass( 'bl-hide-current-work' );
		// 		isAnimating = false;
		// 	}

		// 	$nextPanel.addClass( 'bl-show-work' );

=======

		// 	var $currentPanel = $workPanels.eq( currentWorkPanel );
		// 	currentWorkPanel = currentWorkPanel < totalWorkPanels - 1 ? currentWorkPanel + 1 : 0;
		// 	var $nextPanel = $workPanels.eq( currentWorkPanel );

		// 	$currentPanel.removeClass( 'bl-show-work' ).addClass( 'bl-hide-current-work' ).on( transEndEventName, function( event ) {
		// 		if( !$( event.target ).is( 'div' ) ) return false;
		// 		$( this ).off( transEndEventName ).removeClass( 'bl-hide-current-work' );
		// 		isAnimating = false;
		// 	} );

		// 	if( !supportTransitions ) {
		// 		$currentPanel.removeClass( 'bl-hide-current-work' );
		// 		isAnimating = false;
		// 	}

		// 	$nextPanel.addClass( 'bl-show-work' );

>>>>>>> origin/master
		// 	return false;
		// } );

		// clicking the work panels close button: the current work panel slides down and the section scales up again
		$closeWorkItem.on( 'click', function( event ) {

			// scale up main section
			$section1.removeClass( 'bl-scale-down' );
			$firstPanelsContainer.removeClass( 'bl-panel-items-show' );
			$group1.eq( currentPanel ).removeClass( 'bl-show-work' );

				return false;
		});


		$closeSolutionItem.on( 'click', function( event ) {

			// scale up main section
<<<<<<< HEAD
			$section2.removeClass( 'bl-scale-down' );
			$secondPanelsContainer.removeClass( 'bl-panel-items-show' );
			$group2.eq( currentPanel ).removeClass( 'bl-show-work' );

				return false;
			});

		$closeImplementItem.on( 'click', function( event ) {
			// scale up main section
			$section3.removeClass( 'bl-scale-down' );
			$thirdPanelsContainer.removeClass( 'bl-panel-items-show' );
			$group3.eq( currentPanel ).removeClass( 'bl-show-work' );
=======
			$currentSection.removeClass( 'bl-scale-down' );
			$sContainer.removeClass( 'bl-panel-items-show' );
			$sPanel.eq( currentPanel ).removeClass( 'bl-show-work' );
>>>>>>> origin/master

				return false;
			});

		$closeSaveItem.on( 'click', function( event ) {

			// scale up main section
			$section4.removeClass( 'bl-scale-down' );
			$fourthPanelsContainer.removeClass( 'bl-panel-items-show' );
			$group4.eq( currentPanel ).removeClass( 'bl-show-work' );

				return false;
			});
		}

	return { init : init };

})();