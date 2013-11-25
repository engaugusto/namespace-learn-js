var String;
String = (function(){
	var total;
	
	function String(){
		this.total = '';
	}
	
	String.prototype.GetTotal = function(){
		return this.total;
	}
	
	String.prototype.Sum = function(word1, word2){
		var localSum = word1 + word2;
		this.total += localSum;
		return localSum;
	}
	
	return String;
})();