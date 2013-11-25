var Calc;
Calc = (function(){
	var total;
	
	function Calc(){
		this.total = 0;
	}
	
	Calc.prototype.GetTotal = function(){
		return this.total;
	}
	
	Calc.prototype.Sum = function(num1, num2){
		var localSum = num1 + num2;
		this.total += localSum;
		return localSum;
	}
	
	return Calc;
})();