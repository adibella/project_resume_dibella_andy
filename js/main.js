$( document ).ready( function() {
	$( 'h1' ).hover( function() {
			$( this ).addClass( 'namechange' );
		},
		function() {
			$( this ).removeClass( 'namechange' );
		}
	);

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
} );
