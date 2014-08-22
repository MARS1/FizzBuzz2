$(document).ready(function(){

	var x,
		y,
		numbers = [],
		solution = $('.solutionWrapper'),
		fizzBuzz = " FizzBuzz ",
		fizz = " Fizz ",
		buzz = " Buzz ";

	function fbFunction(i) {
		if( i % 3 === 0 && i % 5 === 0) {
			numbers.push( fizzBuzz + "<br/>");
		} else if ( i % 3 === 0 ) {
			numbers.push( fizz + " <br/>");
		} else if ( i % 5 === 0 ) {
			numbers.push( buzz + "<br/>");
		} else {
			numbers.push([i] + "<br/>");
		}
	};

	for(i=1; i <=100; i++){
		fbFunction(i);
	}
	console.log(numbers);
	solution.prepend(numbers);


});


