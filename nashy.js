// Nashy.js
// version 0.1.0
// https://github.com/allenjprice/Nashy
// Allen J Price
// twitter: @allenjprice

var PITCHES = {};
  //pitch dictionary via numerical index. not zero based. I might regret that.
  PITCHES['_1'] = ['C', 'B#'];
  PITCHES['_2'] = ['C#', 'Db'];
  PITCHES['_3'] = ['D', 'C*'];
  PITCHES['_4'] = ['D#', 'Eb'];
  PITCHES['_5'] = ['E', 'Fb'];
  PITCHES['_6'] = ['F', 'E#'];
  PITCHES['_7'] = ['F#', 'Gb'];
  PITCHES['_8'] = ['G', 'F*'];
  PITCHES['_9'] = ['G#', 'Ab'];
  PITCHES['_10'] = ['A', 'G*'];
  PITCHES['_11'] = ['A#', 'Bb'];
  PITCHES['_12'] = ['B', 'Cb'];
    // pitches by name [0 index group]
    PITCHES['c'] = PITCHES['_1'][0];
    PITCHES['cSharp'] = PITCHES._2[0];
    PITCHES['d'] = PITCHES._3[0];
    PITCHES['dSharp'] = PITCHES._4[0];
    PITCHES['e'] = PITCHES._5[0];
    PITCHES['f'] = PITCHES._6[0];
    PITCHES['fSharp'] = PITCHES._7[0];
    PITCHES['g'] = PITCHES._8[0];
    PITCHES['gSharp'] = PITCHES._9[0];
    PITCHES['a'] = PITCHES._10[0];
    PITCHES['aSharp'] = PITCHES._11[0];
    PITCHES['b'] = PITCHES._12[0];
    // pitches by name [1 index group]
    PITCHES['bSharp'] = PITCHES._1[1];
    PITCHES['dFlat'] = PITCHES._2[1];
    PITCHES['cDoubleSharp'] = PITCHES._3[1];
    PITCHES['eFlat'] = PITCHES._4[1];
    PITCHES['fFlat'] = PITCHES._5[1];
    PITCHES['eSharp'] = PITCHES._6[1];
    PITCHES['gFlat'] = PITCHES._7[1];
    PITCHES['fDoubleSharp'] = PITCHES._8[1];
    PITCHES['aFlat'] = PITCHES._9[1];
    PITCHES['gDoubleSharp'] = PITCHES._10[1];
    PITCHES['bFlat'] = PITCHES._11[1];
    PITCHES['cFlat'] = PITCHES._12[1];

//SCALES: Dictionary containing the diatonic pitches for each key.
var SCALES = {
  c: {},
  cSharp: {},
  dFlat: {},
  d: {},
  dSharp: {},
  eFlat: {},
  e: {},
  f: {},
  fSharp: {},
  gFlat: {},
  g: {},
  gSharp: {},
  aFlat: {},
  a: {},
  aSharp: {},
  bFlat: {},
  b: {}
};

  SCALES['c']['_1'] = PITCHES['c']; 
  SCALES['c']['_2'] = PITCHES['cSharp']; 
  SCALES['c']['_3'] = PITCHES['d']; 
  SCALES['c']['_4'] = PITCHES['eFlat']; 
  SCALES['c']['_5'] = PITCHES['e']; 
  SCALES['c']['_6'] = PITCHES['f']; 
  SCALES['c']['_7'] = PITCHES['fSharp']; 
  SCALES['c']['_8'] = PITCHES['g']; 
  SCALES['c']['_9'] = PITCHES['aFlat']; 
  SCALES['c']['_10'] = PITCHES['a']; 
  SCALES['c']['_11'] = PITCHES['bFlat']; 
  SCALES['c']['_12'] = PITCHES['b']; 

  SCALES['cSharp']['_1'] = PITCHES['bSharp'];
  SCALES['cSharp']['_2'] = PITCHES['cSharp'];
  SCALES['cSharp']['_3'] = PITCHES['cDoubleSharp'];
  SCALES['cSharp']['_4'] = PITCHES['dSharp'];
  SCALES['cSharp']['_5'] = PITCHES['e'];
  SCALES['cSharp']['_6'] = PITCHES['eSharp'];
  SCALES['cSharp']['_7'] = PITCHES['fSharp'];
  SCALES['cSharp']['_8'] = PITCHES['g'];
  SCALES['cSharp']['_9'] = PITCHES['gSharp'];
  SCALES['cSharp']['_10'] = PITCHES['a'];
  SCALES['cSharp']['_11'] = PITCHES['aSharp'];
  SCALES['cSharp']['_12'] = PITCHES['b'];

  SCALES['dFlat']['_1'] = PITCHES['c'];
  SCALES['dFlat']['_2'] = PITCHES['dFlat'];
  SCALES['dFlat']['_3'] = PITCHES['d'];
  SCALES['dFlat']['_4'] = PITCHES['eFlat'];
  SCALES['dFlat']['_5'] = PITCHES['fFlat'];
  SCALES['dFlat']['_6'] = PITCHES['f'];
  SCALES['dFlat']['_7'] = PITCHES['gFlat'];
  SCALES['dFlat']['_8'] = PITCHES['g'];
  SCALES['dFlat']['_9'] = PITCHES['aFlat'];
  SCALES['dFlat']['_10'] = PITCHES['a'];
  SCALES['dFlat']['_11'] = PITCHES['bFlat'];
  SCALES['dFlat']['_12'] = PITCHES['cFlat'];

  SCALES['d']['_1'] = PITCHES['bSharp'];
  SCALES['d']['_2'] = PITCHES['cSharp']; //7
  SCALES['d']['_3'] = PITCHES['d']; //1
  SCALES['d']['_4'] = PITCHES['eFlat'];
  SCALES['d']['_5'] = PITCHES['e']; //2
  SCALES['d']['_6'] = PITCHES['eSharp'];
  SCALES['d']['_7'] = PITCHES['fSharp']; //3
  SCALES['d']['_8'] = PITCHES['g']; //4
  SCALES['d']['_9'] = PITCHES['gSharp'];
  SCALES['d']['_10'] = PITCHES['a'];//5
  SCALES['d']['_11'] = PITCHES['aSharp'];
  SCALES['d']['_12'] = PITCHES['b'];//6

  SCALES['dSharp']['_1'] = PITCHES['bSharp']; //6
  SCALES['dSharp']['_2'] = PITCHES['cSharp'];
  SCALES['dSharp']['_3'] = PITCHES['cDoubleSharp']; //7
  SCALES['dSharp']['_4'] = PITCHES['dSharp']; //1
  SCALES['dSharp']['_5'] = PITCHES['e'];
  SCALES['dSharp']['_6'] = PITCHES['eSharp']; //2
  SCALES['dSharp']['_7'] = PITCHES['fSharp'];
  SCALES['dSharp']['_8'] = PITCHES['fDoubleSharp']; //3
  SCALES['dSharp']['_9'] = PITCHES['gSharp']; //4
  SCALES['dSharp']['_10'] = PITCHES['a'];
  SCALES['dSharp']['_11'] = PITCHES['aSharp'];//5
  SCALES['dSharp']['_12'] = PITCHES['b'];

  SCALES['eFlat']['_1'] = PITCHES['c']; //6
  SCALES['eFlat']['_2'] = PITCHES['dFlat'];
  SCALES['eFlat']['_3'] = PITCHES['d']; //7
  SCALES['eFlat']['_4'] = PITCHES['eFlat']; //1
  SCALES['eFlat']['_5'] = PITCHES['e'];
  SCALES['eFlat']['_6'] = PITCHES['f']; //2
  SCALES['eFlat']['_7'] = PITCHES['fSharp']; 
  SCALES['eFlat']['_8'] = PITCHES['g']; //3
  SCALES['eFlat']['_9'] = PITCHES['aFlat']; //4
  SCALES['eFlat']['_10'] = PITCHES['a'];
  SCALES['eFlat']['_11'] = PITCHES['bFlat'];//5
  SCALES['eFlat']['_12'] = PITCHES['b'];

  SCALES['e']['_1'] = PITCHES['c'];  
  SCALES['e']['_2'] = PITCHES['cSharp'];  //6
  SCALES['e']['_3'] = PITCHES['d'];  
  SCALES['e']['_4'] = PITCHES['dSharp'];  //7
  SCALES['e']['_5'] = PITCHES['e'];  //1
  SCALES['e']['_6'] = PITCHES['f'];  
  SCALES['e']['_7'] = PITCHES['fSharp'];  //2
  SCALES['e']['_8'] = PITCHES['g'];  
  SCALES['e']['_9'] = PITCHES['gSharp'];  //3
  SCALES['e']['_10'] = PITCHES['a']; //4
  SCALES['e']['_11'] = PITCHES['as'];
  SCALES['e']['_12'] = PITCHES['b']; //5

  SCALES['f']['_1'] = PITCHES['c'];  //5
  SCALES['f']['_2'] = PITCHES['cSharp'];
  SCALES['f']['_3'] = PITCHES['d'];  //6
  SCALES['f']['_4'] = PITCHES['eFlat'];
  SCALES['f']['_5'] = PITCHES['e'];  //7
  SCALES['f']['_6'] = PITCHES['f'];  //1
  SCALES['f']['_7'] = PITCHES['fSharp'];
  SCALES['f']['_8'] = PITCHES['g'];  //2
  SCALES['f']['_9'] = PITCHES['gSharp'];
  SCALES['f']['_10'] = PITCHES['a']; //3
  SCALES['f']['_11'] = PITCHES['bFlat']; //4
  SCALES['f']['_12'] = PITCHES['b'];

  SCALES['fSharp']['_1'] = PITCHES['c'];
  SCALES['fSharp']['_2'] = PITCHES['cSharp'];   //5
  SCALES['fSharp']['_3'] = PITCHES['d'];
  SCALES['fSharp']['_4'] = PITCHES['dSharp'];   //6
  SCALES['fSharp']['_5'] = PITCHES['e'];
  SCALES['fSharp']['_6'] = PITCHES['eSharp'];   //7
  SCALES['fSharp']['_7'] = PITCHES['fSharp'];   //1
  SCALES['fSharp']['_8'] = PITCHES['g'];
  SCALES['fSharp']['_9'] = PITCHES['gSharp'];   //2
  SCALES['fSharp']['_10'] = PITCHES['a'];  
  SCALES['fSharp']['_11'] = PITCHES['aSharp'];  //3
  SCALES['fSharp']['_12'] = PITCHES['b'];  //4

  SCALES['gFlat']['_1'] = PITCHES['c'];    
  SCALES['gFlat']['_2'] = PITCHES['dFlat'];    //5
  SCALES['gFlat']['_3'] = PITCHES['d'];
  SCALES['gFlat']['_4'] = PITCHES['eFlat'];    //6
  SCALES['gFlat']['_5'] = PITCHES['e'];
  SCALES['gFlat']['_6'] = PITCHES['f'];    //7
  SCALES['gFlat']['_7'] = PITCHES['gFlat'];    //1
  SCALES['gFlat']['_8'] = PITCHES['g'];
  SCALES['gFlat']['_9'] = PITCHES['aFlat'];    //2
  SCALES['gFlat']['_10'] = PITCHES['a'];
  SCALES['gFlat']['_11'] = PITCHES['bFlat'];   //3
  SCALES['gFlat']['_12'] = PITCHES['cFlat'];   //4

  SCALES['g']['_1'] = PITCHES['c'];  //4
  SCALES['g']['_2'] = PITCHES['cSharp'];
  SCALES['g']['_3'] = PITCHES['d'];  //5
  SCALES['g']['_4'] = PITCHES['dSharp'];
  SCALES['g']['_5'] = PITCHES['e'];  //6
  SCALES['g']['_6'] = PITCHES['f'];
  SCALES['g']['_7'] = PITCHES['fSharp'];  //7
  SCALES['g']['_8'] = PITCHES['g'];  //1
  SCALES['g']['_9'] = PITCHES['gSharp'];
  SCALES['g']['_10'] = PITCHES['a']; //2 
  SCALES['g']['_11'] = PITCHES['aSharp'];
  SCALES['g']['_12'] = PITCHES['b']; //3

  SCALES['gSharp']['_1'] = PITCHES['bSharp'];   //3
  SCALES['gSharp']['_2'] = PITCHES['cSharp'];   //4
  SCALES['gSharp']['_3'] = PITCHES['d'];
  SCALES['gSharp']['_4'] = PITCHES['dSharp'];   //5
  SCALES['gSharp']['_5'] = PITCHES['e'];
  SCALES['gSharp']['_6'] = PITCHES['eSharp'];   //6
  SCALES['gSharp']['_7'] = PITCHES['fSharp'];
  SCALES['gSharp']['_8'] = PITCHES['fDoubleSharp'];   //7
  SCALES['gSharp']['_9'] = PITCHES['gSharp'];   //1
  SCALES['gSharp']['_10'] = PITCHES['a'];
  SCALES['gSharp']['_11'] = PITCHES['aSharp'];  //2
  SCALES['gSharp']['_12'] = PITCHES['b'];

  SCALES['aFlat']['_1'] = PITCHES['c'];    //3
  SCALES['aFlat']['_2'] = PITCHES['dFlat'];    //4
  SCALES['aFlat']['_3'] = PITCHES['d'];
  SCALES['aFlat']['_4'] = PITCHES['eFlat'];    //5
  SCALES['aFlat']['_5'] = PITCHES['e'];
  SCALES['aFlat']['_6'] = PITCHES['f'];    //6
  SCALES['aFlat']['_7'] = PITCHES['gFlat'];
  SCALES['aFlat']['_8'] = PITCHES['g'];    //7
  SCALES['aFlat']['_9'] = PITCHES['aFlat'];    //1
  SCALES['aFlat']['_10'] = PITCHES['a'];
  SCALES['aFlat']['_11'] = PITCHES['bFlat'];   //2
  SCALES['aFlat']['_12'] = PITCHES['b'];

  SCALES['a']['_1'] = PITCHES['c'];
  SCALES['a']['_2'] = PITCHES['cSharp'];  //3
  SCALES['a']['_3'] = PITCHES['d'];  //4
  SCALES['a']['_4'] = PITCHES['dSharp']; 
  SCALES['a']['_5'] = PITCHES['e'];  //5
  SCALES['a']['_6'] = PITCHES['f'];
  SCALES['a']['_7'] = PITCHES['fSharp'];  //6
  SCALES['a']['_8'] = PITCHES['g'];
  SCALES['a']['_9'] = PITCHES['gSharp'];  //7
  SCALES['a']['_10'] = PITCHES['a']; //1
  SCALES['a']['_11'] = PITCHES['aSharp'];
  SCALES['a']['_12'] = PITCHES['b']; //2

  SCALES['aSharp']['_1'] = PITCHES['bSharp'];   //2
  SCALES['aSharp']['_2'] = PITCHES['cSharp'];
  SCALES['aSharp']['_3'] = PITCHES['cDoubleSharp'];   //3
  SCALES['aSharp']['_4'] = PITCHES['dSharp'];   //4
  SCALES['aSharp']['_5'] = PITCHES['e'];   
  SCALES['aSharp']['_6'] = PITCHES['eSharp'];   //5
  SCALES['aSharp']['_7'] = PITCHES['fSharp'];
  SCALES['aSharp']['_8'] = PITCHES['fDoubleSharp'];   //6
  SCALES['aSharp']['_9'] = PITCHES['gSharp'];
  SCALES['aSharp']['_10'] = PITCHES['gDoubleSharp'];  //7
  SCALES['aSharp']['_11'] = PITCHES['aSharp'];  //1
  SCALES['aSharp']['_12'] = PITCHES['b'];

  SCALES['bFlat']['_1'] = PITCHES['c'];    //2
  SCALES['bFlat']['_2'] = PITCHES['dFlat'];
  SCALES['bFlat']['_3'] = PITCHES['d'];    //3
  SCALES['bFlat']['_4'] = PITCHES['eFlat'];    //4
  SCALES['bFlat']['_5'] = PITCHES['e'];
  SCALES['bFlat']['_6'] = PITCHES['f'];    //5
  SCALES['bFlat']['_7'] = PITCHES['gFlat'];
  SCALES['bFlat']['_8'] = PITCHES['g'];    //6
  SCALES['bFlat']['_9'] = PITCHES['aFlat'];
  SCALES['bFlat']['_10'] = PITCHES['a'];   //7
  SCALES['bFlat']['_11'] = PITCHES['bFlat'];   //1
  SCALES['bFlat']['_12'] = PITCHES['b'];

  SCALES['b']['_1'] = PITCHES['c'];
  SCALES['b']['_2'] = PITCHES['cSharp'];  //2
  SCALES['b']['_3'] = PITCHES['d'];
  SCALES['b']['_4'] = PITCHES['dSharp'];  //3
  SCALES['b']['_5'] = PITCHES['e'];  //4
  SCALES['b']['_6'] = PITCHES['f'];
  SCALES['b']['_7'] = PITCHES['fSharp'];  //5
  SCALES['b']['_8'] = PITCHES['g'];
  SCALES['b']['_9'] = PITCHES['gSharp'];  //6
  SCALES['b']['_10'] = PITCHES['a'];
  SCALES['b']['_11'] = PITCHES['aSharp']; //7
  SCALES['b']['_12'] = PITCHES['b']; //1

var originalKeyX = 'c';
var destinationKeyX = 'b';

function processText(text, originalKeyX, destinationKeyX){



  function findIndexX(key){
    var keyIndex;
    switch (key){
      case 'c':
        keyIndex = 1;
        break;
      case 'cSharp':
        keyIndex = 2;
        break;
      case 'dFlat':
        keyIndex = 2;
        break;
      case 'd':
        keyIndex = 3;
        break;
      case 'dSharp':
        keyIndex = 4;
        break;
      case 'eFlat':
        keyIndex = 4;
        break;
      case 'e':
        keyIndex = 5;
        break;
      case 'f':
        keyIndex = 6;
        break;
      case 'fSharp':
        keyIndex = 7;
        break;
      case 'gFlat':
        keyIndex = 7;
        break;
      case 'g':
        keyIndex = 8;
        break;
      case 'gSharp':
        keyIndex = 9;
        break;
      case 'aFlat':
        keyIndex = 9;
        break;
      case 'a':
        keyIndex = 10;
        break;
      case 'aSharp':
        keyIndex = 11;
        break;
      case 'bFlat':
        keyIndex = 11;
        break;
      case 'b':
        keyIndex = 12;
        break;
    }
    return keyIndex;
  }

    //search through the PITCHES object for the given chord, return its index in the PITCHES dictionary
  function findChordByName(chord){
    var counter = 1;
    for (counter; counter <= 12; counter++){
      for(var i=0; i<PITCHES['_' + counter].length; i++){
        if (chord === PITCHES['_' + counter][i]){
          return counter;
        }
      }
    }
  }

  function transposeX(chord){

    var interval = findIndexX(originalKeyX) - findIndexX(destinationKeyX);
    if (interval>0)
      interval -= 12;
    var invertedInterval = interval + 12;
    // var chordIndexX = findChordByName(chord);
    var difference = findChordByName(chord) - interval;
    var differenceInverted = findChordByName(chord) - invertedInterval;

    var result = SCALES[destinationKeyX]['_' + difference];
    if (!result)
      result = SCALES[destinationKeyX]['_' + differenceInverted];
    return result;
  }

  
  function processChord(chord){
    var processed = '';

    if(chord[1] === '#' || chord[1] === 'b'){
      processed += transposeX(chord.slice(0,2));
    }
    else
      processed += transposeX(chord[0]);

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
    // $('.destination').multiline(processText($('.source').val(), $('#originalKey').val(), $('#destinationKey').val()));
  });
});

