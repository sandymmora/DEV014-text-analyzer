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
      if(((text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) | (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122))| (text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57)){
        characterCountExcludingSpaces++;
      }
    }
    return characterCountExcludingSpaces;
    //Funcion que retorna el recuento de caracteres  excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },

  getAverageWordLength: (text) => { 
    let wordsLength = 0;
    let wordCount = 0;
    const words = text.split(" ");
    for(let i=0; i<words.length; i++) { 
      if(words[i].length !== 0) {
        wordCount++;   
        wordsLength+=words[i].length;
      }
    }
    let averageWordLength = wordsLength / wordCount;
    averageWordLength = parseFloat(averageWordLength.toFixed(2));
    return averageWordLength;
    //console.log(suma);
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string` 
  },

  getNumberCount: (text) => {
    const  words = text.split(" ");
    let numberCount = 0;
    for(let i = 0; i<words.length; i++) {
      let word = words[i];
      if(word.length !== 0){
        if(word[word.length-1]==='.'){
          word = word.slice(0, -1);
        }
        if(!isNaN(word)){
          numberCount++
        }
      }
    } 
    return numberCount;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },

  getNumberSum: (text) => {
    const  words = text.split(" ");
    let numberSum = 0;
    for(let i = 0; i<words.length; i++) {
      if(words[i].length !== 0) {
        let word = words[i]
        if(word[word.length-1]==='.'){
          word = word.slice(0, -1);
        }
        if(!isNaN(word)){
          const number = Number(word);
          numberSum += number;
        }
      }
    } 
    return numberSum;
  },
};

export default analyzer;
