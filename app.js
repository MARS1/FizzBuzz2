$(document).ready(function(){

	var x;
	var y;
	var numbers = [];
	var solution = $('.solutionWrapper');

	function fbFunction(i) {
		x = i / 3;
		y = i / 5;
		if( x === 3 ) {
			numbers.push("Fizz\n");
			solution.prepend(numbers);
		}
		if( y === 5 ) {
			numbers.push("Buzz\n");
			solution.prepend(numbers);
		}
		if( x === 3 && y === 5) {
			numbers.push("FizzBuzz\n");
			solution.prepend(numbers);
		}
		else {
			numbers.push([i]);
		}
	};

	for(i=0; i <=100; i++){
		fbFunction([i]);
		console.log(numbers);
		solution.prepend(numbers);
	}


});


