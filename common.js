function Point(x, y) {
	this.x = x;
	this.y = y;
}

Point.prototype.toPath = function() {
	return this.x + ' ' + this.y;
};

Point.prototype.translate = function(tx, ty) {
	return new Point(this.x + tx, this.y + ty);
};
