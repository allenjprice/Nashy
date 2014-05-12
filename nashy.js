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

function processText(text, originalKey, destinationKey){
	
	var result = '';

	for (var i=0; i<text.length; i++){
		var character = text[i];
		var reNotes = new RegExp("([A-G])");

		if (text[i].match(reNotes)){
			switch (text[i]){
				case keys[originalKey][0]:
					result += keys[destinationKey][0];
					break;
				case keys[originalKey][1]:
					result += keys[destinationKey][1];
					break;
				case keys[originalKey][2]:
					result += keys[destinationKey][2];
					break;
				case keys[originalKey][3]:
					result += keys[destinationKey][3];
					break;
				case keys[originalKey][4]:
					result += keys[destinationKey][4];
					break;							
				case keys[originalKey][5]:
					result += keys[destinationKey][5];
					break;
				case keys[originalKey][6]:
					result += keys[destinationKey][6];
					break;
				case keys[originalKey][7]:
					result += keys[destinationKey][7];
					break;	
				}
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
