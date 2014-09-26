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
		};
	};


	var iFunc = function(inputVal) {
		for( i=0; i <=num; i++) {
			fbFunction(i);
		}
		console.log(numbers);
		solution.prepend(numbers);
	};

	$('#solutionBtn').on('click', function(){
		var inputVal = $('#value').val();
		inputVal = +inputVal;
		$('#value').submit(function(){
			console.log(inputVal);
		})
	};
});