// Nashy.js
// version 0.1.0
// https://github.com/allenjprice/Nashy
// Allen J Price
// twitter: @allenjprice

var originalKeyX = 'C';
var destinationKeyX = 'B';
var CHROMATIC_INDEX = [['C'],
                    ['C#', 'Db'],
                    ['D'],
                    ['D#', 'Eb'],
                    ['E', 'Fb'],
                    ['F'],
                    ['F#', 'Gb'],
                    ['G'],
                    ['G#', 'Ab'],
                    ['A'],
                    ['A#', 'Bb'],
                    ['B']];

var FLAT_KEYS = ['Bb', 'Db', 'Eb', 'Fb', 'F', 'Gb', 'Ab', 'Cb'];

function processText(text, originalKeyX, destinationKeyX){

  toIndex = function(note) {
    for (var n = 0; n < 12; n ++) {
      if ( CHROMATIC_INDEX[n].indexOf(note) > -1 ){
        return n;
      }
    }
  }

  isFlatKey = function(key) {
    if ( FLAT_KEYS.indexOf(key) > -1 ) {
      return true;
    }
    return false;
  }

  transposeChord = function(chord, originKey, destinationKey) {
    var chordParts = getChordParts(chord);
    var root = chordParts[0];
    var modifier = chordParts[1];
    var transposition = toIndex(originKey) - toIndex(destinationKey);

    var newRoot;

    var newRootIndex = toIndex( root ) - transposition;
    if (newRootIndex > 11) {
      newRootIndex -= 12;
    } else if (newRootIndex < 0){
      newRootIndex += 12;
    }

    if ( isFlatKey(destinationKey) && CHROMATIC_INDEX[newRootIndex].length > 1) {
      newRoot = CHROMATIC_INDEX[newRootIndex][1];
    } else {
      newRoot = CHROMATIC_INDEX[newRootIndex][0];
    }

    return newRoot + modifier;
  }

  getChordParts = function(chord) {
    if (chord.indexOf('#') > -1 || chord.indexOf('b') > -1 ) {
      return [chord.slice(0,2), chord.slice(2)];
    } else {
      return [chord.slice(0,1), chord.slice(1)];
    }
  }
  
  function processChord(chord){
    return transposeChord(chord, originalKeyX, destinationKeyX);
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

