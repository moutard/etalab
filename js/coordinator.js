function graphData(category, index /* index of the object, e.g. a movie */) {
	var globalData = DATA[category];
	var data = [];
	for (var k in globalData.title_ratios) {
		if (k == 'ensemble') {
			continue;
		}
		data.push({
			name: k,
			quantity: globalData.title_ratios[k][index]
		});
	}
	return data;
}

function cheeseData(category) {
	var globalData = DATA[category];
	var quantities = globalData.title_ratios['ensemble'];
	var names = globalData.titles;
	var images = globalData.images;
	var data = [];
	for (var i = 0, n = quantities.length; i < n; i++) {
		data.push({
			quantity: quantities[i],
			name: names[i],
			image: 'images/' + images[i]
		});
	}
	return data;
}

function sortNumber(a,b)
{
return a["quantity"] - b["quantity"];
}

function ratioBarData(category) {
	var globalData = DATA[category];
	var names = globalData.types;
	var quantities = globalData.type_ratios;
	var data = [];
	for (var i = 0, n = quantities.length; i < n; i++) {
		data.push({
			name: names[i],
			quantity: quantities[i]
		});
	}
	data = data
	return data ;
}

$(function() {
	const DEFAULT_DURATION = 800 /* ms */;
	const DEFAULT_EASING = 'backOut';
	
	var currentCheese = null;
	var graph = new Graph($('#graph'), [0]);
	var ratioBar = new RatioBar($('#ratiobar'));
	
	var AREA_IDS = {
		'RegionFilm': 'films',
		'RegionSortie': 'sorties',
		'RegionInformatique': 'informatique',
		'RegionLivre': 'livres',
		'RegionMusique': 'musique'
	};
	
	$('.region path').each(function() {
		var $area = $(this);
		var $arrow = $area.data('$arrow');
		$area.add($arrow).click(function(){
			var category = AREA_IDS[$area[0].id];
			selectCategory(category);
		});
	});
	
	function selectCategory(category) {
		for (var id in AREA_IDS) {
			var $area = $('#' + id);
			if (AREA_IDS[id] == category) {
				$area.data('selected', true);
				// TODO: Cleanup this mess.
				showOnlyRegion($area);
				$selectedArea = $area;
			} else {
				$area.data('selected', false);
			}
		}
		$('#titles_label').text(DATA[category].titles_label);
		$('#types_label').text(DATA[category].types_label);
		$('#graph_info_text').text(DATA[category].graph_label);
		
		ratioBar.setData(ratioBarData(category));
		if (currentCheese) {
			currentCheese.remove();
		}
		var cheese = new Cheese($('#cheese'));
		cheese.setData(cheeseData(category));
		cheese.clickDelegate = function(index) {
			graph.animate(graphData(category, index), DEFAULT_DURATION, DEFAULT_EASING);
		};
		cheese.clickIndex(0);
		currentCheese = cheese;
	}
	
	selectCategory('films');
});