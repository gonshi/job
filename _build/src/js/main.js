( function( global, doc, $, ns ) {
  'use strict';
  ns = ns || {};

  $(function() {
    var small = 1.5;
    var slotArr = [ 'first', 'second', 'third' ];
    var slotHeight = 438 / small;
    var slotTotalHeight = slotHeight * 3;
    var JOB = {
      first: 1,
      second: 0,
      third: 2
    };

    /*-----------------------------
      EVENT LISTENER 
    -----------------------------*/
    $( '#buttons .button' ).on( 'click', function(){
      $( this ).addClass( 'selected' );
    } );

    /*-----------------------------
      PRIVATE
    -----------------------------*/
    function _rotate( $elm, target, delay ){
      var _class = $elm.attr('class'); 
      var $button = $( '#buttons' ).find( '.' + _class );
      var loop = function(){
        $elm.animate( {
          'background-position': '0 ' + target + 'px'
        }, 200, 'linear', function(){
          if ( !$button.hasClass( 'selected' ) ){
            $elm.css( {
              'background-position': '0 0'
            } );
            loop();
          }
          else{
            // stop
            $elm.css( {
              'background-position': '0 ' + 
                ( -1 * JOB[ _class ] * slotHeight ) + 'px'
            } );
          }
        } );
      };
      
      setTimeout( function(){
        loop();
      }, delay );
    }

    /*-----------------------------
      INIT 
    -----------------------------*/
    for ( var i = 0; i < 3; i++ ){
      _rotate( $( '#slot .' + slotArr[ i ] ), -slotTotalHeight, 100 * i );
    }
  });
  global.namespace = ns;
})( this, document, jQuery, this.namespace );
