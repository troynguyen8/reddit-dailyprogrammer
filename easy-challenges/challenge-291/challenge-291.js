/**
 * @author Troy Nguyen
 * 12/17/16
 * reddit.com/r/dailyprogrammer easy challenge #291: Goldilocks' Bear Necessities
 */

// var input = [
// '100 80 ',
// '30 50  ',
// '130 75 ',
// '90 60  ',
// '150 85 ',
// '120 70 ',
// '200 200',
// '110 100'
// ];

var input = [
'100 120',
'297 90 ',
'66 110 ',
'257 113',
'276 191',
'280 129',
'219 163',
'254 193',
'86 153 ',
'206 147',
'71 137 ',
'104 40 ',
'238 127',
'52 146 ',
'129 197',
'144 59 ',
'157 124',
'210 59 ',
'11 54  ',
'268 119',
'261 121',
'12 189 ',
'186 108',
'174 21 ',
'77 18  ',
'54 90  ',
'174 52 ',
'16 129 ',
'59 181 ',
'290 123',
'248 132'
];

var regex = /\d+/g;
var goldiSpecs = input[0].match(regex);

var goldiWeight = parseInt(goldiSpecs[0]);
var goldiTempTol = parseInt(goldiSpecs[1]);

function isValidSeat(chairWeightTol, porridgeTemp) {
	return (chairWeightTol >= goldiWeight && porridgeTemp <= goldiTempTol);
}

var chairString = '';
for(let i = 1; i < input.length; i++) {
	let currentSeat = input[i].match(regex);
	let chairWeightTol = parseInt(currentSeat[0]);
	let porridgeTemp = parseInt(currentSeat[1]);
	
	if(isValidSeat(chairWeightTol, porridgeTemp)) {
		chairString = chairString + i + ' ';
	}
}

console.log(chairString);