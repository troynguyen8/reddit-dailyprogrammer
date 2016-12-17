/**
 * @author Troy Nguyen
 * 12/17/16
 * reddit.com/r/dailyprogrammer easy challenge #294: Rack management 1 normal
 */

var input = [['ladilmy', 'daily'], ['eerriin', 'eerie'], ['orrpgma', 'program'], ['orppgma', 'program']];

function scrabble(letterTiles, desiredWord) {
	for(var j = 0; j < desiredWord.length; j++) {
		if(!(letterTiles.includes(desiredWord.charAt(j)))) {
			return false;
		}
		
		letterTiles = letterTiles.replace(desiredWord.charAt(j), '');
	}
	
	return true;
}

for(var i = 0; i < input.length; i++) {
	console.log(scrabble(input[i][0], input[i][1]));
}