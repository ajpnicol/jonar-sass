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
		$workItems = $( '#bl-work-items > li' ),
		$customize = $( '#more2 > li' ),
		$implement = $( '#more3 > li' ),
		$save = $( '#more4 > li' ),
		// UX panels
		$workPanelsContainer = $( '#bl-panel-work-items' ),
		$secondPanelsContainer = $( '#bl-panel-2-items' ),
		$thirdPanelsContainer = $( '#bl-panel-3-items' ),
		$fourthPanelsContainer = $( '#bl-panel-4-items' ),
		// $sContainer = ,
		$workPanels = $workPanelsContainer.children( 'div' ),
		totalWorkPanels = $workPanels.length,
		// navigating the UX panels
		// $nextWorkItem = $workPanelsContainer.find( 'nav > span.bl-next-work' ),
		
		// if currently navigating the UX items
		isAnimating = false,
		// close UX panel trigger
		$closeWorkItem = $workPanelsContainer.find( 'nav > span.bl-icon-close' ),
		transEndEventNames = {
			'WebkitTransition' : 'webkitTransitionEnd',
			'MozTransition' : 'transitionend',
			'OTransition' : 'oTransitionEnd',
			'msTransition' : 'MSTransitionEnd',
			'transition' : 'transitionend'
		},
		$closeItem = $sections.('bl-panel-items')find( 'nav > span.close-icon' ),
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
		$workItems.on( 'click', function( event ) {
			$currentSection = $section1;
			$sContainer = $( '#bl-panel-work-items' );
			$sPanel = $secondPanelsContainer.children( 'div' );
			
			// scale down main section
			$currentSection.addClass( 'bl-scale-down' );

			// show panel for this work item
			$sContainer.addClass( 'bl-panel-items-show' );

			var $panel = $sContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentWorkPanel = $panel.index();
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

		$customize.on( 'click', function( event ) {
			$currentSection = $section2;
			$sContainer = $( '#bl-panel-2-items' );
			$sPanel = $secondPanelsContainer.children( 'div' );
			
			// scale down main section
			$currentSection.addClass( 'bl-scale-down' );

			// show panel for this work item
			$sContainer.addClass( 'bl-panel-items-show' );

			var $panel = $sContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentPanel = $panel.index();
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

		$implement.on( 'click', function( event ) {
			$currentSection = $section3;
			$sContainer = $( '#bl-panel-3-items' );
			$sPanel = $thirdPanelsContainer.children( 'div' );
			
			// scale down main section
			$currentSection.addClass( 'bl-scale-down' );

			// show panel for this work item
			$sContainer.addClass( 'bl-panel-items-show' );

			var $panel = $sContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentPanel = $panel.index();
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

		$save.on( 'click', function( event ) {
			$currentSection = $section4;
			$sContainer = $( '#bl-panel-4-items' );
			$sPanel = $fourthPanelsContainer.children( 'div' );
			
			// scale down main section
			$currentSection.addClass( 'bl-scale-down' );

			// show panel for this work item
			$sContainer.addClass( 'bl-panel-items-show' );

			var $panel = $fourthPanelsContainer.find("[data-panel='" + $( this ).data( 'panel' ) + "']");
			currentWorkPanel = $panel.index();
			$panel.addClass( 'bl-show-work' );

			return false;

		} );

		// navigating the work items: current work panel scales down and the next work panel slides up
		// $nextWorkItem.on( 'click', function( event ) {

		// 	if( isAnimating ) {
		// 		return false;
		// 	}
		// 	isAnimating = true;

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

		// 	return false;
		// } );

		// clicking the work panels close button: the current work panel slides down and the section scales up again
		$closeWorkItem.on( 'click', function( event ) {

			// scale up main section
			$section1.removeClass( 'bl-scale-down' );
			$workPanelsContainer.removeClass( 'bl-panel-items-show' );
			$workPanels.eq( currentWorkPanel ).removeClass( 'bl-show-work' );

			return false;

		} );

		$closeSolutionItem.on( 'click', function( event ) {

			// scale up main section
			$currentSection.removeClass( 'bl-scale-down' );
			$sContainer.removeClass( 'bl-panel-items-show' );
			$sPanel.eq( currentPanel ).removeClass( 'bl-show-work' );

			return false;

		} );


	}

	return { init : init };

})();