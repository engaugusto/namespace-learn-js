var Parent;
//copied from Coffescript.org sample
__hasProp = {}.hasOwnProperty,
__extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Parent = (function(){
	var total;
	
	function Parent(){
		this.total = 0;
	}
	
	this.GetTotal = function(){
		return this.total;
	}
});