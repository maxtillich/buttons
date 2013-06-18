jQuery(document).ready(function($){
	for (var i = 0; i < 4; i++) {
		$('.btn.shrink').mouseup(function(event) {
			event.preventDefault();

			$('.btn.shrink').addClass('shrink-0');
			$('.btn.shrink').addClass('flat');

			$('.btn.shrink').mouseup(function(event) {

				$('.btn.shrink').addClass('shrink-1');

				$('.btn.shrink').mouseup(function(event) {
					$('.btn.shrink').addClass('shrink-2');
				});
			});
		});


		$('.btn.heart').mouseup(function(event) {
			event.preventDefault();

			$('.btn.heart').addClass('heart-0');

			$('.btn.heart').mouseup(function(event) {

				$('.btn.heart').addClass('heart-1');

				$('.btn.heart').mouseup(function(event) {
					$('.btn.heart').addClass('heart-2');
				});
			});
		});


		$('.btn.jump').mouseover(function(event) {
			event.preventDefault();
			
			var jumpClass = '';
			var items = Array(1,2,3,4);
			var item = items[Math.floor(Math.random()*items.length)];
			jumpClass = 'jump-'+item;
			
			console.log(jumpClass);
			
			$('.btn.jump').removeClass('jump-1');
			$('.btn.jump').removeClass('jump-2');
			$('.btn.jump').removeClass('jump-3');
			$('.btn.jump').removeClass('jump-4');
			$('.btn.jump').addClass(jumpClass);
		});
	};

});