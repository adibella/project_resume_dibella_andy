$( document ).ready( function() {
	$( 'h1' ).addClass( 'namechange' );
} );

//Nested jQuery plugin


//FlowType jQuery plugin
$( 'body' ).flowtype( {
	minimum: 500,
	maximum: 1200,
	minFont: 8,
	maxFont: 22,
	fontRatio: 30
} );


// jQuery .hover() trying to get working
//$( 'h1' ).hover( function() {
//	$( this ).addClass( 'namechage' ); },
//
//	function() {
//		$( this ).removeClass( 'namechage' );
//	} );
