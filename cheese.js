function Cheese($container) {
	this.$container = $container;
	this.radius = 70;
	this.strokeWidth = 35;
	this.center = new Point(115, 115);
	this.alphaDuration = 200 /* ms */;
	this.sets = [];
	this.selectedSet = null;

	var paper = this.paper = new Raphael($container[0], $container.width(), $container.height());
	
	// Ratios are between 0 and 1.
	paper.customAttributes.arc = function (centerX, centerY, startRatio, endRatio, radius) {
		var startAlpha = (90 - startRatio * 360) * Math.PI / 180;
		var endAlpha = (90 - endRatio * 360) * Math.PI / 180;
		var x1 = centerX + radius * Math.cos(startAlpha);
		var y1 = centerY - radius * Math.sin(startAlpha);
		var x2 = centerX + radius * Math.cos(endAlpha);
		var y2 = centerY - radius * Math.sin(endAlpha);
		var largeArc = +(Math.abs(endAlpha - startAlpha) > Math.PI);
		var path = [['M', x1, y1], ['A', radius, radius, 0, largeArc, 1, x2, y2]];
		return {path: path};
	};
}

Cheese.prototype.remove = function() {
	this.$container.empty();
}
	
Cheese.prototype.createArc = function(center, radius, strokeWidth, startRatio, endRatio) {
	var arc = this.paper.path().attr({'stroke': '#fff', 'stroke-width': strokeWidth, arc: [center.x, center.y, startRatio, endRatio, radius + strokeWidth / 2]});
	this.activeArcOptions = {
		'stroke': '#f00',
		'cursor': 'pointer'
	};
	this.inactiveArcOptions = {
		'stroke': '#cccccc'
	};
	arc.attr(this.inactiveArcOptions);
	return arc;
}

Cheese.prototype.showOnlySet = function(set) {
	var self = this;
	// TODO: Generalize.
	var colors = ['#2bacc3', '#28c26a', '#94c229', '#c2b229', '#c27c29', '#c22d29', '#2bacc3', '#28c26a', '#94c229', '#c2b229', '#c27c29', '#c22d29', '#2bacc3', '#28c26a', '#94c229', '#c2b229'];
	var index = -1;
	$.each(this.sets, function(i, otherSet) {
		if (otherSet != set) {
			otherSet.animate({
				'opacity': 0
			}, self.alphaDuration);
			otherSet.arc.attr(self.inactiveArcOptions);
		} else {
			index = i;
		}
	});
	set.animate({
		'opacity': 1
	}, this.alphaDuration);
	set.arc.attr(self.activeArcOptions);
	set.arc.attr({
		'stroke': colors[index]
	});
}

Cheese.prototype.setData = function(data) {
	var self = this;
	
	var totalQuantity = 0;
	for (var i = 0, n = data.length; i < n; i++) {
		totalQuantity += data[i].quantity;
	}
	var currentRatio = 0;
	
	$.each(data, function(i, row) {
		var ratio = row.quantity / totalQuantity;
		var image = self.paper.image(row.image, self.center.x - self.radius, self.center.y - self.radius, self.radius * 2, self.radius * 2);
		image.toBack(); // Avoid some focus issues.
		var nameBackgroundWidth = self.radius * 2;
		var nameBackgroundHeight = self.radius * 0.3;
		var nameBackground = self.paper.rect(self.center.x - nameBackgroundWidth / 2, self.center.y - nameBackgroundHeight / 2, nameBackgroundWidth, nameBackgroundHeight);
		nameBackground.attr({
			'fill': 'rgba(255, 255, 255, 0.8)',
			'stroke-width': 0
		});
		var name = self.paper.text(self.center.x, self.center.y, row.name);
		name.attr({
			'font-size': 12,
			'fill': '#000',
			'font-weight': 'bold'
		});
		var set = self.paper.set(image, nameBackground, name);
		set.attr({
			'opacity': 0
		});
		self.sets.push(set);
		var arc = set.arc = self.createArc(self.center, self.radius, self.strokeWidth, currentRatio, currentRatio + ratio);
		arc.hover(function() {
			// Inside.
			self.showOnlySet(set);
			$("#cheese").append("<div class='cheesepercent'>"+Math.floor(ratio*100)+"%</div>")
		}, function() {
			// Outside.
			if (self.selectedSet) {
				self.showOnlySet(self.selectedSet);
				$("#cheese .cheesepercent").remove()
			}
		});
		arc.click(function() {
			self.clickIndex(i);
		});
		currentRatio += ratio;
	});
}

Cheese.prototype.clickIndex = function(index) {
	this.selectedSet = this.sets[index];
	this.showOnlySet(this.selectedSet);
	this.clickDelegate(index);
}
