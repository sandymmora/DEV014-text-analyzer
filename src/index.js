import analyzer from './analyzer.js';

const primerMetrica = document.querySelector("li:nth-child(1)");
const segundaMetrica = document.querySelector("li:nth-child(2)");
const tercerMetrica = document.querySelector("li:nth-child(3)");
const cuartaMetrica = document.querySelector("li:nth-child(4)");
const quintaMetrica = document.querySelector("li:nth-child(5)");
const sextaMetrica = document.querySelector("li:nth-child(6)");

function limpiarMetricas(){
  primerMetrica.innerText= "Palabras: " +  0;
  segundaMetrica.innerText= "Caracteres: " + 0;
  tercerMetrica.innerText  = "Caracteres sin espacios: " + 0;
  cuartaMetrica.innerText  = "Números: " + 0;
  quintaMetrica.innerText  = "Suma Números: " + 0;
  sextaMetrica.innerText  = "Longitud media: " + 0;
  inputText.value = "";
}

function analizarTexto() {
  const text = inputText.value; 
  const words = analyzer.getWordCount(text);
  primerMetrica.textContent= "Palabras: " +  words;
  
  const caracteres = analyzer.getCharacterCount(text);
  segundaMetrica.textContent = "Caracteres: " + caracteres;

  const caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(text);
  tercerMetrica.textContent  = "Caracteres sin espacios: " + caracteresSinEspacios;
  
  const numeros = analyzer.getNumberCount(text);
  cuartaMetrica.textContent  = "Números: " + numeros;
  
  const sumaNumeros = analyzer.getNumberSum(text);
  quintaMetrica.textContent  = "Suma Números: " + sumaNumeros;

  const promedioPalabras = analyzer.getAverageWordLength(text);
  sextaMetrica.textContent  = "Longitud media: " + promedioPalabras;
}

const inputText = document.querySelector("textarea");
inputText.addEventListener("input", analizarTexto) 

const boton = document.getElementById("reset-button");
boton.addEventListener("click", limpiarMetricas);
