( function($) {
    /**
     * Our trigger event for opening the overlay. This class
     * should exist on the overlay trigger, as well as an
     * attribute (data-overlay) to identify the overlay to open.
    */
    $( '.trigger-overlay' ).on( 'click', function( event ) {
        event.preventDefault();
 
        /**
         * Set the overlay variable based on the data provided
         * by the overlay trigger.
         */
        var overlay = $( this ).data( 'overlay' );
        
 
        /**
         * If we've made it this far, we should have the data
         * needed to open a overlay. Here we set the id variable
         * based on overlay variable.
         */
        var id = '#' + overlay;
 
        /**
         * Let's open up the overlay and prevent the body from
         * scrolling, both by adding a simple class. The rest
         * is handled by CSS (awesome).
         */
        $( id ).addClass( 'overlay-open' );
        $( 'body#signUp' ).addClass( 'overlay-view' );
 
        /**
         * When the overlay outer wrapper or `overlay-close`
         * trigger is clicked, let's remove the classes from
         * the current overlay and body. Removal of these
         * classes restores the current state of the user
         * experience. Again, all handled by CSS (awesome).
         */
        $( id ).on( 'click', function( event ) {
            // Verify that only the outer wrapper was clicked.
            if ( event.target.id === overlay ) {
                $( id ).removeClass( 'overlay-open' );
                $( 'body' ).removeClass( 'overlay-view' );
            }
        });
 
        /**
         * Closes the overlay when the esc key is pressed. See
         * comment above on closing the overlay for more info
         * on how this is accomplished.
         */
        $( document ).keyup( function( event ) {
            // Verify that the esc key was pressed.
            if ( event.keyCode === 27 ) {
                $( id ).removeClass( 'overlay-open' );
                $( 'body' ).removeClass( 'overlay-view' );
            }
        });        

        
    });
}) (jQuery);