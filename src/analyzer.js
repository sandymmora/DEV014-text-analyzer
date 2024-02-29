const analyzer = {  

  getWordCount: (text) => { 
    const words = text.split(" ");
    let numWords = 0;
    for(let i=0; i<words.length; i++) { 
      if(words[i].length !== 0) {
        numWords++;      
      }
    }
    return numWords;
    //Funcion que retorna el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCount: (text) => {
    const characterCount = text.length;
    return characterCount;
    //Función que retorna el recuento de caracteres  que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {
    let characterCountExcludingSpaces = 0;
    for (let i = 0; i < text.length ; i++) {
      if(((text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) | (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122))) {
        characterCountExcludingSpaces ++;
      }
    }
    return characterCountExcludingSpaces;
    //Funcion que retorna el recuento de caracteres  excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => { 
    const suma = analyzer.getNumberSum(text);
    //console.log(suma);
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    let numberCount = 0;
    for(let i=0; i<text.length; i++) {
      if(text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57) {  
        numberCount++;
      }
    }
  return numberCount;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    let sum = 0;
    for(let i=0; i<text.length; i++) {
      if(text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57) {
        const numberSum = parseInt(text[i]); 
        sum = sum + numberSum;
      }
    }
    return sum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;
