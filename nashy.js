var pitches = {};
//pitch dictionary via numerical index. not zero based. I might regret that.
pitches['_1'] = ['C', 'B#'];
pitches['_2'] = ['C#', 'Db'];
pitches['_3'] = ['D', 'C*'];
pitches['_4'] = ['D#', 'Eb'];
pitches['_5'] = ['E', 'Fb'];
pitches['_6'] = ['F', 'E#'];
pitches['_7'] = ['F#', 'Gb'];
pitches['_8'] = ['G', 'F*'];
pitches['_9'] = ['G#', 'Ab'];
pitches['_10'] = ['A', 'G*'];
pitches['_11'] = ['A#', 'Bb'];
pitches['_12'] = ['B', 'Cb'];
    // //all the pitches?
    // pitches['c'] = pitches._1[0];
    // pitches['cSharp'] = pitches._2[0];
    // pitches['d'] = pitches._3[0];
    // pitches['dSharp'] = pitches._4[0];
    // pitches['e'] = pitches._5[0];
    // pitches['f'] = pitches._6[0];
    // pitches['fSharp'] = pitches._7[0];
    // pitches['g'] = pitches._8[0];
    // pitches['gSharp'] = pitches._9[0];
    // pitches['a'] = pitches._10[0];
    // pitches['aSharp'] = pitches._11[0];
    // pitches['b'] = pitches._12[0];
    // //and now for flats and weird doublesharps
    // pitches['bSharp'] = pitches._1[1];
    // pitches['dFlat'] = pitches._2[1];
    // pitches['cDoubleSharp'] = pitches._3[1];
    // pitches['eFlat'] = pitches._4[1];
    // pitches['fFlat'] = pitches._5[1];
    // pitches['eSharp'] = pitches._6[1];
    // pitches['gFlat'] = pitches._7[1];
    // pitches['fDoubleSharp'] = pitches._8[1];
    // pitches['aFlat'] = pitches._9[1];
    // pitches['gDoubleSharp'] = pitches._10[1];
    // pitches['bFlat'] = pitches._11[1];
    // pitches['cFlat'] = pitches._12[1];

//search through the pitches object for the given chord, return its "index" in the chord dictionary
function findChordByName(chord){
  var counter = 1;
  for (counter; counter <= 12; counter++){
    for(var i=0; i<pitches['_' + counter].length; i++){
      if (chord === pitches['_' + counter][i]){
        return counter;
      }
    }
  }
}

function getInterval(original, destination){
  console.log("getInterval original: " + original);
  console.log("getInterval destination: " + destination);
  return original - destination;
}

//given a chord
function transposeChord(chord, original, destination){
  var chordIndex = findChordByName(chord);
  var originalIndex = findChordByName(original);
  var destinationIndex = findChordByName(destination);
  console.log("transposeChord chord: " + chord + " and chordIndex: " + chordIndex);
  var interval = getInterval(originalIndex, destinationIndex);
  var invertedInterval = interval + 12;
  console.log("interval: " + interval + "   invertedInterval: " + invertedInterval);

  var result = pitches['_' + (chordIndex - interval)];
  //if the result is undefined, invert the interval
  if (!result){
    result = pitches['_' + (chordIndex - invertedInterval)];
  }
  
  return result;
}

console.log(transposeChord('C', 'C', 'C#'));
console.log(transposeChord('D', 'C', 'C#'));
console.log(transposeChord('E', 'C', 'C#'));
console.log(transposeChord('F', 'C', 'C#'));
console.log(transposeChord('G', 'C', 'C#'));
console.log(transposeChord('A', 'C', 'C#'));
console.log(transposeChord('B', 'C', 'C#'));
console.log(transposeChord('Bb', 'C', 'C#'));
console.log(transposeChord('Ab', 'C', 'C#'));
console.log(transposeChord('Eb', 'C', 'C#'));
//old code - let's revisit this
// function findNextToken(token, index, text){
//   return text.indexOf(token, index);
// }
  
// function processText(text, originalKey, destinationKey){

//   var result = '';
//   var reNotes = new RegExp("([A-G])");
//   var reSharpsAndFlats = new RegExp("[A-G]#|[A-G]b");
//   var reNumbersOnly = new RegExp("([1-7])");
//   var reNumbersTo9 = new RegExp("([1-9])");
//   var reNumbersWithTones = new RegExp("[1-7][1-9]|[A-G][1-9]"); //4ths, 7ths, 2nds, etc
//   var reAddTonesAfterLetters = new RegExp("[msdg][1-9]|[msdg][1-9][0-3]"); //sus4, dim7, add13, etc

//   for (var i=0; i<text.length; i++){
//     var character = text[i];

//     if (text[i] == '<'){
//       var endDiamond = findNextToken('>', i, text);
//       //do something to mark the diamonds
//     }

//     if (text[i] == '_'){
//       var endUnderscore = findNextToken('_', i, text);
//       //do something to mark the split bars
//     }

//     if (text[i] == '['){
//       var endBracket = findNextToken(']', i, text);
//       //mark section names and ignore transposition
//       result += text.slice(i, endBracket);
//       i = endBracket;
//     }

//     if (text.slice(i, i+2).match(reSharpsAndFlats)){
//       result += transposeChord(text.slice(i, i+2), pitches[originalKey], pitches[destinationKey]);
//       i+=2; // skip over the sharp or flat
//     }

//     if (text[i].match(reNotes)){
//       result += transposeChord(text[i], pitches[originalKey], pitches[destinationKey]);
//     }

//     if (text[i].match(reNumbersOnly)){
//       result += transposeChord(text[i], pitches[originalKey], pitches[destinationKey]);
//       // need to handle numbers with tones after them. also numbers after dim,sus,add, etc
//     }

//     else
//       result += text[i];
//    }

//   return result; 
// }

// $(document).ready(function(){

//   $('.processText').click(function(){

//     $('div.destination').text(processText($('.source').text(), $('#originalKey').val(), $('#destinationKey').val()));
//   });

// });


