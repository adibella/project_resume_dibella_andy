$( document ).ready( function() {
	$( 'h1' ).addClass( 'namechange' );
} );

//Nested jQuery plugin

$( document ).ready( function() {
    $( '#container' ).fullpage();
} );

//FlowType jQuery plugin

$( document ).ready( function() {
	$( 'body' ).flowtype( {
		minimum: 500,
		maximum: 800,
		minFont: 12,
		maxFont: 18,
		fontRatio: 30
	} );
} );

// jQuery .hover() trying to get working
//$( 'h1' ).hover( function() {
//	$( this ).addClass( 'namechage' ); },
//
//	function() {
//		$( this ).removeClass( 'namechage' );
//	} );
