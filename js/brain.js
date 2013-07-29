var $selectedArea = null;

$(function() {
	
	var $layer = $('#layerArrow');

	$('.region path').each(function(i) {
	    var $area = $(this);
		$area.attr('opacity', '1.0');
		$area.attr('cursor', 'pointer');

		var marginTop 	= {'RegionFilm': -20, 'RegionSortie':40, 'RegionInformatique':40, 'RegionLivre':70, 'RegionMusique':50};
		var marginLeft 	= {'RegionFilm': 65, 'RegionSortie':10, 'RegionInformatique':-20, 'RegionLivre':70, 'RegionMusique':80 };
		var arrowSrc 	= {'RegionFilm': 'images/fleche_films.png', 'RegionSortie':'images/fleche_sorties.png', 'RegionInformatique':'images/fleche_informatique.png', 'RegionLivre':'images/fleche_livres.png', 'RegionMusique':'images/fleche_musique.png'};

		var top = $(this).offset().top - $layer.offset().top;
		var left = $(this).offset().left - $layer.offset().left;
		var $arrow = $('<img class="arrow" src="' + arrowSrc[this.id] + '" />').css({
			top: top + marginTop[this.id],
			left: left + marginLeft[this.id],
			position: 'absolute'
		});
		$layer.append($arrow);
		$area.data('$arrow', $arrow);
		
		$area.add($arrow).hover(function() {
		    // Inside.
			showOnlyRegion($area);
		}, function() {
		    // Outside.
    		showOnlyRegion($selectedArea);
		});
	});
});

function showOnlyRegion($region) {
	var $layer = $('#layerArrow');
	$('.region path').each(function(i) {
		var $arrow = $(this).data('$arrow');
		if ($region && $region[0] == this) {
			$arrow.appendTo($layer);
			$(this).attr('opacity', 1);
		} else {
		    // Important: Do not use remove, since it would also remove event listeners.
			$arrow.detach();
			$(this).attr('opacity', 0);
		}
	});
}