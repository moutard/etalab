function RatioBar($container) {
	this.width = $container.width();
	this.height = $container.height();
	var paper = this.paper = new Raphael($container[0], this.width, this.height);
	this.rects = [];
}

RatioBar.prototype.clearData = function() {
	var self = this;
	$.each(this.rects, function(i, rect) {
		rect.animate({
			y: self.height,
			height: 0,
			opacity: 0
		}, self.speedForRatio(rect.attr('width') / self.width), function() {
			rect.remove();
		});
	});
	this.rects = [];
}

RatioBar.prototype.speedForRatio = function(ratio) {
	const MEDIUM_SPEED = 1500;
	return MEDIUM_SPEED * (ratio / 0.5);
}

RatioBar.prototype.setData = function(data) {
	this.clearData();
	
	// TODO: Generalize.
	var colors = ['#2bacc3', '#28c26a', '#94c229', '#c2b229', '#c27c29', '#c22d29', '#2bacc3', '#28c26a', '#94c229', '#c2b229', '#c27c29', '#c22d29', '#2bacc3', '#28c26a', '#94c229', '#c2b229'];

	var total = 0;
	for (var i = 0, n = data.length; i < n; i++) {
		total += data[i].quantity
	}
	
	var currentRatio = 0;
	for (var i = 0, n = data.length; i < n; i++) {
		var ratio = data[i].quantity / total;
		var x = this.width * currentRatio;
		var w = this.width * ratio;
		var rect = this.paper.rect(x, this.height, w, 0);
		rect.attr({
			'fill': colors[i],
			'stroke-width': 0
		});
		rect.animate({
			y: 0,
			height: this.height
		}, this.speedForRatio(ratio), 'bounce');
		$(rect.node).twipsy({
			placement: 'above',
			offset: 0,
			fallback: data[i].name + ' : ' + data[i].quantity + '%'
		});
		this.rects.push(rect);
		currentRatio += ratio;
	}
}
