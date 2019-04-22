// Nashy.js
// version 0.1.0
// https://github.com/allenjprice/Nashy
// Allen J Price
// twitter: @allenjprice

// Save the relative positions of each potential chord base
var chordBasePositions = {
  "Cb": 11, "C": 0,  "C#": 1, "C*": 2,
  "Db": 1,  "D": 2,  "D#": 3,
  "Eb": 3,  "E": 4,  "E#": 5,
  "Fb": 4,  "F": 5,  "F#": 6, "F*": 7,
  "Gb": 6,  "G": 7,  "G#": 8, "G*": 9,
  "Ab": 8,  "A": 9,  "A#": 10,
  "Bb": 10, "B": 11, "B#": 0
};

// Save the key names with their relative position and chromatic scales
var keys = {
  "C": {
    Position: 0,
    ChromaticScale: [ "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B" ]
  },
	"C#": {
    Position: 1,
    ChromaticScale: [ "B#", "C#", "C*", "D#", "E", "E#", "F#", "G", "G#", "A", "A#", "B" ]
  },
  "Db": {
    Position: 1,
    ChromaticScale: [ "C", "Db", "D", "Eb", "Fb", "F", "Gb", "G", "Ab", "A", "Bb", "Cb" ]
  },
  "D": {
    Position: 2,
    ChromaticScale: [ "B#", "C#", "D", "Eb", "E", "E#", "F#", "G", "G#", "A", "A#", "B" ]
  },
  "D#": {
    Position: 3,
    ChromaticScale: [ "B#", "C#", "C*", "D#", "E", "E#", "F#", "F*", "G#", "A", "A#", "B" ]
  },
  "Eb": {
    Position: 3,
    ChromaticScale: [ "C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B" ]
  },
  "E": {
    Position: 4,
    ChromaticScale: [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ]
  },
  "F": {
    Position: 5,
    ChromaticScale: [ "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B" ]
  },
  "F#": {
    Position: 6,
    ChromaticScale: [ "C", "C#", "D", "D#", "E", "E#", "F#", "G", "G#", "A", "A#", "B" ]
  },
  "Gb": {
    Position: 6,
    ChromaticScale: [ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "Cb" ]
  },
  "G": {
    Position: 7,
    ChromaticScale: [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ]
  },
  "G#": {
    Position: 8,
    ChromaticScale: [ "B#", "C#", "D", "D#", "E", "E#", "F#", "F*", "G#", "A", "A#", "B" ]
  },
  "Ab": {
    Position: 8,
    ChromaticScale: [ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B" ]
  },
  "A": {
    Position: 9,
    ChromaticScale: [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ]
  },
  "A#": {
    Position: 10,
    ChromaticScale: [ "B#", "C#", "C*", "D#", "E", "E#", "F#", "F*", "G#", "G*", "A#", "B" ]
  },
  "Bb": {
    Position: 10,
    ChromaticScale: [ "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B" ]
  },
  "B": {
    Position: 11,
    ChromaticScale: [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ]
  }
};

var originalKey = 'C';
var destinationKey = 'B';

function processText(text, originalKey, destinationKey){

  function transpose(chord){
    var transpositionInterval = keys[ destinationKey ].Position - keys[ originalKey ].Position;
    var destinationPosition = chordBasePositions[ chord ] + transpositionInterval;
    
    // This ugliness is to account for index-wrapping
    if ( destinationPosition < 0 ) destinationPosition += 12;
    if ( destinationPosition > 11 ) destinationPosition -= 12;
    
    var destinationChordBase = keys[ destinationKey ].ChromaticScale[ destinationPosition ];
    return destinationChordBase;
  }

  function processChord(chord){
    console.log(chord);
    var processed = '';

    if(chord[1] === '#' || chord[1] === 'b'){
      processed += transpose(chord.slice(0,2));
    }
    else
      processed += transpose(chord[0]);

    var chordEnd = processed.length;

    if (processed[chordEnd-1] === '#' || processed[chordEnd-1] === 'b'){
      chordEnd--;
    }


    for(var i=chordEnd; i<chord.length; i++){
      switch(chord[i]){
        case '/':
          processed += '/' + transposeX(chord.slice(i+1)); 
          i++;
          break;
        case '#':
          break;
        case 'b':
          break;
        default:
          processed += chord[i];
      }
    }

    return processed;

  }

  function findNextToken(token, index, text){
    return text.indexOf(token, index);
  }

  function processLine(line){
    var chordLine = '';
    var lyricLine = '';
    var cumulativeChordLength = 0;
    var lastChordIndex = 0;

    for (var i=0; i<line.length; i++){
      if(line[i] === '['){
        var endBracket = findNextToken(']', i, line);
        

        for (var j=lastChordIndex; j<(i - cumulativeChordLength); j++){
          chordLine += ' ';
        }

        currChord = line.slice(i+1, endBracket)
        cumulativeChordLength += (currChord.length + 2);
        chordLine += processChord(currChord);
        lastChordIndex = chordLine.length;
        i = endBracket;
      }
      else
        lyricLine += line[i];
    }
    return chordLine + '\n' + lyricLine + '\n';

  }

//actual main function code. finally.
  var lines = text.split('\n');
  var finalAnswer = '';
  for (var i=0; i<lines.length; i++){
    finalAnswer += processLine(lines[i]);
  }
  return finalAnswer;
}

//event handler
$(document).ready(function(){
    $('.process-text').click(function(){

    $('.destination').val(processText($('.source').val(), $('#original-key').val(), $('#destination-key').val()));

  });
});

