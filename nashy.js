var keys = {
	c: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
	cSharp: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
	d: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
	dSharp: ['D#', 'E#', 'Fx', 'G#', 'A#', 'Bx', 'C#'],
	eFlat: ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
	e: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
	f: ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
	fSharp: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
	gFlat: ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
	g: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
	gSharp: ['G#', 'A#', 'Bx', 'C#', 'D#', 'E#', 'Fx'],
	aFlat: ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F'],
	a: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
	aSharp: ['A#', 'B#', 'Cx', 'D#', 'E#', 'F#', 'Gx'],
	bFlat: ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
	b: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
	numbers: ['1', '2', '3', '4', '5', '6', '7']
}

function findNextToken(token, index, text){
	return text.indexOf(token, index);
}

function transpose(chord, originalKey, destinationKey){
	console.log("chord: " + chord);
	console.log("originalKey: " + originalKey);
	console.log("destinationKey: " + destinationKey);
	switch (chord){
		case originalKey[0]:
			return destinationKey[0];
			break;
		case originalKey[1]:
			return destinationKey[1];
			break;
		case originalKey[2]:
			return destinationKey[2];
			break;
		case originalKey[3]:
			return destinationKey[3];
			break;
		case originalKey[4]:
			return destinationKey[4];
			break;
		case originalKey[5]:
			return destinationKey[5];
			break;
		case originalKey[6]:
			return destinationKey[6];
			break;
		case originalKey[7]:
			return destinationKey[7];
			break;

	}
}

function processText(text, originalKey, destinationKey){
	
	var result = '';

	for (var i=0; i<text.length; i++){
		var character = text[i];
		var reNotes = new RegExp("([A-G])");
		var reSharpsAndFlats = new RegExp("[A-G]#|[A-G]b");
		var addedTones = new RegExp("[1-7][1-9]|[A-G][1-9]"); //4ths, 7ths, 2nds, etc
		var reOtherTokens = new RegExp(""); // regex wizardry
		var processNote = true;

		if (text[i] == '<'){
			var endDiamond = findNextToken('>', i, text);
			//do something to mark the diamonds
		}

		if (text[i] == '_'){
			var endUnderscore = findNextToken('_', i, text);
			//do something to mark the split bars
		}

		if (text[i] == '['){
			var endBracket = findNextToken(']', i, text);
			//do something to mark section names and ignore transposition
			result += text.slice(i, endBracket);
		}

		if (text.slice(i, i+2).match(reSharpsAndFlats)){
			console.log("sliced chord: " + text.slice(i, i+2))
			result += transpose(text.slice(i, i+2), keys[originalKey], keys[destinationKey]);
			i+=2; // skip over the sharp or flat
		}

		if (text[i].match(reNotes)){
			result += transpose(text[i], keys[originalKey], keys[destinationKey]);
		}

		// if (text[i].match(reNotes) && processNote){
		// 	switch (text[i]){
		// 		case keys[originalKey][0]:
		// 			result += keys[destinationKey][0];
		// 			break;
		// 		case keys[originalKey][1]:
		// 			result += keys[destinationKey][1];
		// 			break;
		// 		case keys[originalKey][2]:
		// 			result += keys[destinationKey][2];
		// 			break;
		// 		case keys[originalKey][3]:
		// 			result += keys[destinationKey][3];
		// 			break;
		// 		case keys[originalKey][4]:
		// 			result += keys[destinationKey][4];
		// 			break;							
		// 		case keys[originalKey][5]:
		// 			result += keys[destinationKey][5];
		// 			break;
		// 		case keys[originalKey][6]:
		// 			result += keys[destinationKey][6];
		// 			break;
		// 		case keys[originalKey][7]:
		// 			result += keys[destinationKey][7];
		// 			break;	
		// 		}
		// 	}
		else
			result += text[i];
	 }
	
	return result;
}

$(document).ready(function(){

	$('.processText').click(function(){

		$('div.destination').text(processText($('.source').text(), $('#originalKey').val(), $('#destinationKey').val()));
	});

});
