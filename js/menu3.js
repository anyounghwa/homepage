$(function(){
    // 모달팝업
	
	$( "#dialog-link" ).click(function( event ) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});
	
	$( "#dialog" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "Cancel",
				click: function() {
					$( this ).dialog( "close" );
				}
			}
		]
	});
})