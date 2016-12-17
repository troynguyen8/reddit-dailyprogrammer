/**
 * @author Troy Nguyen
 * 12/16/16
 * reddit.com/r/dailyprogrammer easy challenge #277: Simplifying Fractions
 */
 
var input = [
'4 8         ',
'1536 78360  ',
'51478 5536  ',
'46410 119340',
'7673 4729   ',
'4096 1024	 '
];

function simplifyFraction(numerator, denominator) {
	for(var j = 2; j <= Math.min(numerator, denominator); j++) {
		if(numerator % j === 0 && denominator % j === 0) {
			numerator /= j;
			denominator /= j;
			
			j = 1;
		}
	}
	
	var fraction = {
		top: numerator,
		bottom: denominator
	};
	
	return fraction;
}

for(var i = 0; i < input.length; i++) {
	var regex = /\d+/g;
	var numbers = input[i].match(regex);
	
	var numerator = parseInt(numbers[0]);
	var denominator = parseInt(numbers[1]);
	
	var currentFraction = simplifyFraction(numerator, denominator);
	
	console.log(currentFraction.top + " " + currentFraction.bottom);
}