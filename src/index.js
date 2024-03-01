import analyzer from './analyzer.js';

function analizarTexto() {
  const text = inputText.value; 
  const words = analyzer.getWordCount(text);
  const primerMetrica = document.querySelector("li:nth-child(1)");
  primerMetrica.innerText= "Palabras: " +  words;
  
  const caracteres = analyzer.getCharacterCount(text);
  const segundaMetrica = document.querySelector("li:nth-child(2)");
  segundaMetrica.innerText= "Caracteres: " + caracteres;
  const caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(text);
  const tercerMetrica = document.querySelector("li:nth-child(3)");
  tercerMetrica.innerText  = "Caracteres sin espacios: " + caracteresSinEspacios;
  
  const numeros = analyzer.getNumberCount(text);
  const cuartaMetrica = document.querySelector("li:nth-child(4)");
  cuartaMetrica.innerText  = "Números: " + numeros;
  
  const sumaNumeros = analyzer.getNumberSum(text);
  const quintaMetrica = document.querySelector("li:nth-child(5)");
  quintaMetrica.innerText  = "Suma Números: " + sumaNumeros;
  
  const promedioPalabras = analyzer.getAverageWordLength(text);
  const sextaMetrica = document.querySelector("li:nth-child(6)");
  sextaMetrica.innerText  = "Longitud media: " + promedioPalabras;
}

const inputText = document.querySelector("textarea");
inputText.addEventListener("input", analizarTexto) 


