// Empty for now. Maybe used later.
var window$ = $(window)

$(function() {
	var isDescShowing = false;
	

	$('#toggle-site-desc').on('click', function() {
		var el$ = $(this);
		var desc$ = $('#site-desc-wrapper');

		event.preventDefault();

		console.log(event);
		
		if (desc$.hasClass('show-desc')) {
			desc$.removeClass('show-desc');
		} else {
			desc$.addClass('show-desc');
		}		
	});

	/*window$.resize(function() {
		//if (isDescShowing) return;
		var width = window$.width();
		if (width > 800) {
			desc$.show();
			//isDescShowing = true;
		}	    
	});*/
});