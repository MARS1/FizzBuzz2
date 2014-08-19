$(document).ready(function(){

	var numbers = [];
	var solution = $('.solutionWrapper');

	var fizzBuzz = " FizzBuzz ";
	var fizz = " Fizz ";
	var buzz = " Buzz ";

	function fbFunction(i) {
		if( i % 3 === 0 && i % 5 === 0) {
			numbers.push( fizzBuzz + "<br/>");
		} else if ( i % 3 === 0 ) {
			numbers.push( fizz + " <br/>");
			return undefined;
		} else if ( i % 5 === 0 ) {
			numbers.push( buzz + "<br/>");
			return undefined;
		} else {
			numbers.push([i] + "<br/>");
			return undefined;
		}
	};

	for (i=1; i <=100; i++){
		fbFunction([i]);
		console.log(numbers);
		solution.prepend(numbers);
	}


});


