function Graph($container, initialData) {
	var width = $container.width();
	var height = $container.height();
	this.graphWidth = width;
	this.graphHeight = height * 0.9;
	var paper = this.paper = new Raphael($container[0], width, height);
	
	this.circles = [];
	this.origin = new Point(8, this.graphHeight);
	
	var initialPoints = this.pointsFromData(initialData, 0 /* completely flat */);
	var graphPath = this.graphPath = paper.path(this.pathFromPoints(initialPoints));
	graphPath.attr(
		{
			'stroke': '#333333',
			'stroke-width': 4,
			'stroke-linejoin': 'round',
			'stroke-linecap': 'round'
		}  
	);
	
	// Horizontal axis.
	var HORIZONTAL_AXIS_MARGIN = 0;
	paper.path('M ' + new Point(HORIZONTAL_AXIS_MARGIN, HORIZONTAL_AXIS_MARGIN).toPath() + ' L ' + new Point(HORIZONTAL_AXIS_MARGIN, this.graphHeight - HORIZONTAL_AXIS_MARGIN).toPath());
	// Vertical axis.
	var VERTICAL_AXIS_MARGIN = 0;
	paper.path('M ' + new Point(VERTICAL_AXIS_MARGIN, this.graphHeight - VERTICAL_AXIS_MARGIN).toPath() + ' L ' + new Point(this.graphWidth - VERTICAL_AXIS_MARGIN, this.graphHeight - VERTICAL_AXIS_MARGIN).toPath());
}

Graph.prototype.createCircle = function(point) {
	const circleOptions = {
		'fill': '#3b4449',
		'cursor': 'pointer'
	};
	const inactiveCircleOptions = {
		'stroke': '#3b4449',
		'stroke-width': 2
	};
	const activeCircleOptions = {
		'stroke': '#000',
		'stroke-width': 2
	};
	var circle = this.paper.circle(point.x, point.y, 5);
	circle.attr(circleOptions);
	circle.attr(inactiveCircleOptions);
	circle.hover(function() {
		// Inside.
		circle.attr(activeCircleOptions);
	}, function() {
		// Outside.
		circle.attr(inactiveCircleOptions);
	});
	return circle;
}

Graph.prototype.pathFromPoints = function(points) {
	var path = 'M ' + points[0].toPath();
	for (var i = 1, n = points.length; i < n; i++) {
		// Compute where the control point will be.
		var diffY = -(points[i].y - points[i - 1].y) / 2;
		var diffX = -(points[i].x - points[i - 1].x) / 2;
		path += ' S ' + points[i].translate(diffX, diffY).toPath() + ' ' + points[i].toPath();
	}
	return path;
}

Graph.prototype.pointsFromData = function(data, animRatio) {
	// animRatio can be between 0 and 1. 0 = completely flat, 1 = completely up.
	if (typeof(animRatio) == 'undefined') {
		animRatio = 1;
	}
	const SPACING_X = 40; // TODO: Make it an optional argument.
	// Since we always use percent, the spacing should be one point = one percent.
	const SPACING_Y = this.graphHeight / 100;
	var points = [];
	for (var i = 0, n = data.length; i < n; i++) {
		points.push(new Point(this.origin.x + i * SPACING_X, this.origin.y - data[i].quantity * animRatio * SPACING_Y));
	}
	return points;
}	
	
	
Graph.prototype.animate = function(data, duration, easing) {
	var points = this.pointsFromData(data);
	this.graphPath.animate({path: this.pathFromPoints(points)}, duration, easing);
	for (var i = 0, n = points.length; i < n; i++) {
		var point = points[i];
		var circle = this.circles[i];
		if (!circle) {
			circle = this.createCircle(new Point(point.x, this.origin.y));
			this.circles.push(circle);
		}
		var twipsyLabel = data[i].name + ' : ' + data[i].quantity + '%';
		$(circle.node).twipsy({
			placement: 'right',
			offset: 30
		});
		$(circle.node).attr('title', twipsyLabel);
		
		circle.animate(Raphael.animation({cx: point.x, cy: point.y}, duration, easing));
	}
}
