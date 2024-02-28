const analyzer = {  

  getWordCount: (text) => {
    let words = text.split(" ");
    return words.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCount: (text) => {
    let characterCount = text.length;
    return characterCount;
    //TODO: esta función debe retornar el recuento de caracteres  que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
   
    let CharacterCountExcludingSpaces = 0;

    for (var i = 0; i < text.length ; i++) {
      if((text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) | (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122)) {
        CharacterCountExcludingSpaces ++;
         } 
    }
    
    return CharacterCountExcludingSpaces;
    //TODO: esta función debe retornar el recuento de caracteres  excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => { 
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {

    let numberCount = 0;

    for(var i=0; i<text.length; i++) {
      if(text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57){ 
        numberCount++;
      }
    }
  return numberCount;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {

    let sum = 0;

    for(var i=0; i<text.length; i++) {
      if(text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57){
        let numberSum = parseInt(text[i]); 
        sum = sum + numberSum;
      }
    }
    return sum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
