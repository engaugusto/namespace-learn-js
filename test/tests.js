test( "Soma 1 + 5 Test", function(){
	var sumCalcTest = new Calc();
	var result = sumCalcTest.Sum(1,5);
    ok( result == "6", 'It should return 6. But Returned '+ result);
});

test( "Sum Word A + B Test", function(){
	var sumWord = new String();
	var result = sumWord.Sum('A', 'B');
    ok( result == "AB", 'It should return "AB". But Returned '+ result);
});

test( "Function names, variable name, and instances", function(){
	var sumWord = new String();
	sumWord.Sum('A', 'B');
	
	var sumCalcTest = new Calc();
	sumCalcTest.Sum(1,5);
	
	var result1 = sumWord.GetTotal();
	var result2 = sumCalcTest.GetTotal();
	
    ok( result1 == "AB", 'It should return "AB". But Returned '+ result1);
	ok( result2 == "6", 'It should return 6. But Returned '+ result2);
});