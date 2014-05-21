var keys = {
	c: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
	cSharp: ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
	dFlat: ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
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

var reNotes = new RegExp("([A-G])");
var reSharpsAndFlats = new RegExp("[A-G]#|[A-G]b");
var reNumbersOnly = new RegExp("([1-7])");
var reNumbersTo9 = new RegExp("([1-9])");
var reNumbersWithTones = new RegExp("[1-7][1-9]|[A-G][1-9]"); //4ths, 7ths, 2nds, etc
var reAddTonesAfterLetters = new RegExp("[msdg][1-9]|[msdg][1-9][0-3]"); //sus4, dim7, add13, etc

function findNextToken(token, index, text){
	return text.indexOf(token, index);
}

function transpose(chord, originalKey, destinationKey){

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
		default:
			return transpose(chord[0], originalKey, destinationKey);

	}
}	
function processChord(chord, originalKey, destinationKey){
		var transposedChord = '['
		var chordEndsAt = 0;

		//bracket should always be at chord[0], so let's see if there's a chord with sharps or flats
		if (chord.slice(1,3).match(reSharpsAndFlats)){
			transposedChord += transpose(chord.slice(1,3), keys[originalKey], keys[destinationKey]);
			chordEndsAt = 3;
		}
		else if (chord[1].match(reNotes) || chord[1].match(reNumbersOnly)){
			transposedChord += transpose(chord[1], keys[originalKey], keys[destinationKey]);
			chordEndsAt = 2;
		}
		else
			console.log("for loop hit");
			for(var i=chordEndsAt; i<chord.length; i++){
				transposedChord += chord[i];
			}
			
		
			
		
			// if (chord.slice(i, i+2).match(reSharpsAndFlats)){
			// 	console.log("sharps and flats chord: " + chord);
			// 	transposedChord += transpose(chord.slice(i, i+2), keys[originalKey], keys[destinationKey]);
			// 	i+=2; // skip over the sharp or flat
			// }

			// else if (chord[0].match(reNotes)){
			// 	console.log("boring old note chord: " + chord);
			// 	transposedChord += transpose(chord[i], keys[originalKey], keys[destinationKey]);
			// }

			// else if (chord[0].match(reNumbersOnly)){
			// 	console.log("something weird happens here and the chord is " + chord);
			// 	transposedChord += transpose(chord[i], keys[originalKey], keys[destinationKey]);
			// 	// need to handle numbers with tones after them. also numbers after dim,sus,add, etc
			// }
			// else transposedChord += chord[i];
		
		console.log("chord after processing: " + transposedChord);
		return transposedChord;
}

function processText(text, originalKey, destinationKey){

	var result = '';

	for (var i=0; i<text.length; i++){
		var character = text[i];
		
		if (text[i] == '['){
			var endBracket = findNextToken(']', i, text);
			result += processChord(text.slice(i, endBracket+1), originalKey, destinationKey);
			i = endBracket;
		}

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
