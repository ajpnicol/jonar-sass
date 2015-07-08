
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=280161028800008&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)) {
        js=d.createElement(s);
        js.id=id;
        js.src="//platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,"script","twitter-wjs");


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-50
        }, 500);
        return false;
      }
    }
  });
});

function getCurrentSection(ypos) {
    for(var i = 0; i < sections.length; i++) {
        var sec = $(sections[i]);
        var top = $(sec).position().top;
        var height = $(sec).height();
        if(ypos+50 < (top + height)) return i;
    }
}


// Dropdown menu hover funtion *?

$('.dropdown-toggle').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});


//Scroll function for Why ERP Sucks page
;( function( window ) {
     
    'use strict';
 
    var docElem = window.document.documentElement;
 
    function getViewportH() {
        var client = docElem['clientHeight'],
            inner = window['innerHeight'];
         
        if( client < inner )
            return inner;
        else
            return client;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    // Find elements position relative to windpw (http://stackoverflow.com/a/5598797/989439)
    function getOffset( el ) {
        var offsetTop = 0, offsetLeft = 0;
        do {
            if ( !isNaN( el.offsetTop ) ) {
                offsetTop += el.offsetTop;
            }
            if ( !isNaN( el.offsetLeft ) ) {
                offsetLeft += el.offsetLeft;
            }
        } while( el = el.offsetParent )
 
        return {
            top : offsetTop,
            left : offsetLeft
        }
    }
 
    function inViewport( el, h ) {
        var elH = el.offsetHeight,
            scrolled = scrollY(),
            viewed = scrolled + getViewportH(),
            elTop = getOffset(el).top,
            elBottom = elTop + elH,
            // if 0, the element is considered in the viewport as soon as it enters.
            // if 1, the element is considered in the viewport only when it's fully inside
            // value in percentage (1 >= h >= 0)
            h = h || 0;
 
        return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
    }
 
    function extend( a, b ) {
        for( var key in b ) { 
            if( b.hasOwnProperty( key ) ) {
                a[key] = b[key];
            }
        }
        return a;
    }
 
    function cbpScroller( el, options ) {   
        this.el = el;
        this.options = extend( this.defaults, options );
        this._init();
    }
 
    cbpScroller.prototype = {
        defaults : {
            // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
            // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport. 
            // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
            viewportFactor : 0.2
        },
        _init : function() {
            if( Modernizr.touch ) return;
            this.sections = Array.prototype.slice.call( this.el.querySelectorAll( '.cbp-so-section' ) );
            this.didScroll = false;
 
            var self = this;
            // the sections already shown...
            this.sections.forEach( function( el, i ) {
                if( !inViewport( el ) ) {
                    classie.add( el, 'cbp-so-init' );
                }
            } );
 
            var scrollHandler = function() {
                    if( !self.didScroll ) {
                        self.didScroll = true;
                        setTimeout( function() { self._scrollPage(); }, 60 );
                    }
                },
                resizeHandler = function() {
                    function delayed() {
                        self._scrollPage();
                        self.resizeTimeout = null;
                    }
                    if ( self.resizeTimeout ) {
                        clearTimeout( self.resizeTimeout );
                    }
                    self.resizeTimeout = setTimeout( delayed, 200 );
                };
 
            window.addEventListener( 'scroll', scrollHandler, false );
            window.addEventListener( 'resize', resizeHandler, false );
        },
        _scrollPage : function() {
            var self = this;
 
            this.sections.forEach( function( el, i ) {
                if( inViewport( el, self.options.viewportFactor ) ) {
                    classie.add( el, 'cbp-so-animate' );
                }
                else {
                    // this add class init if it doesn´t have it. This will ensure that the items initially in the viewport will also animate on scroll
                    classie.add( el, 'cbp-so-init' );
                     
                    classie.remove( el, 'cbp-so-animate' );
                }
            });
            this.didScroll = false;
        }
    };
 
    // add to global namespace
    window.cbpScroller = cbpScroller;
 
} )( window );

// bootstrap function for timed fadeout of alert (on form-submit)

function createAutoClosingAlert(selector, delay) {
   var alert = $(selector).alert();
   window.setTimeout(function() { alert.alert('close') }, delay);
}

$(document).ready( function() {
    var fbbox = $(".fb-like-box");
    $("#facebook").click( function () {
        if( $("#twitter-widget-0").css("display") != "none") {
            $("#twitter-widget-0").css("display","none");
        }
        if( $(fbbox).css("display") === "none") {
            $(fbbox).css("display","inline-block");
            $(fbbox).css("opacity","1"); 
        } else {
            $(fbbox).css("display","none");
            $(fbbox).css("opacity","0");
        }
    });
    $("#twitter").click( function () {
        if( $(fbbox).css("display") != "none") {
            $(fbbox).css("display","none");
            $(fbbox).css("opacity","0");
        }
        var twitterbox = $("#twitter-widget-0");
        if( $(twitterbox).css("display") === "none") {
            $(twitterbox).css("display","inline-block");
        } else {
            $(twitterbox).css("display","none");
        }
    });
    $("#updown").click( function(e) {
        sections = $("section");
        if(sections === null) return;
        sections = jQuery.makeArray(sections);
        var elm = e.target;
        var ypos = $(window).scrollTop();
        var index = getCurrentSection(ypos);
        var section = "";
        if(elm.id === "uparrow") {
            if(index === 0 ) section = sections[index];
            else section = sections[index-1];
        } else if(elm.id === "downarrow") {
            if(index === sections.length-1) section = sections[index];
            else section = sections[index+1];
        }
        if(section != ""){
            $('html,body').animate({
                scrollTop: $(section).offset().top-50
            }, 500);
            return false;               
        }
    });
    $(".more").click( function(e) {
        var elm = $(this);
        $( $(this).next()[0] ).slideToggle();
        $('html,body').animate({
            scrollTop: elm.offset().top-100
        }, 1000);
    });
    var blog = $("#blogiframe");    
    $("#blogiframe").height( $(window).height());
});