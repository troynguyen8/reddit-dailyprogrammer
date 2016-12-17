/**
 * @author Troy Nguyen
 * 12/16/16
 * reddit.com/r/dailyprogrammer easy challenge #277: Simplifying Fractions bonus
 */
 
var input = [
3      ,
'x cb ',
'y ab ',
'z xa ',
'ab cb',
'ab x ',
'x y  ',
'z y  ',
'z xay'
];

for(var i = input[0]; i >= 1; i--) {
	var equation = input[i].match(/\w+/g);
	for(var j = input[0] + 1; j < input.length; j++) {
		var regex = new RegExp(equation[0], 'g');
		input[j] = input[j].replace(regex, equation[1]);
	}
}

for(var k = input[0] + 1; k < input.length; k++) {
	var fraction = input[k].match(/\w+/g);
	
	for(var m = 0; m < fraction[0].length; m++) {
		for(var n = 0; n < fraction[1].length; n++) {
			if(fraction[0].charAt(m) === fraction[1].charAt(n)) {
				fraction[0] = fraction[0].replace(fraction[0].charAt(m), '');
				fraction[1] = fraction[1].replace(fraction[1].charAt(n), '');
				
				m = -1;
				break;
			}
		}
	}
	
	if(fraction[0].length === 0) {
		fraction[0] = '1';
	}
	
	if(fraction[1].length === 0) {
		fraction[1] = '1';
	}
	
	console.log(fraction[0] + " " + fraction[1]);
}