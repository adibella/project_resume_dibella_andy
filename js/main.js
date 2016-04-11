$( document ).ready( function() {
	$( 'h1' ).addClass( 'namechange' );
} );

//FitText jQuery plugin

jQuery( 'h2' ).fitText();

//FlowType jQuery plugin
$( 'body' ).flowtype( {
	minimum: 500,
	maximum: 1200,
	minFont: 8,
	maxFont: 20,
	fontRatio: 20
} );


// jQuery .hover() trying to get working
//$( 'h1' ).hover( function() {
//	$( this ).addClass( 'namechage' ); },
//
//	function() {
//		$( this ).removeClass( 'namechage' );
//	} );
