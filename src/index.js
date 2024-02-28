import analyzer from './analyzer.js';

let inputText = document.querySelector("textarea");
inputText.addEventListener("input", analizarTexto) 

function analizarTexto() {
    let text = inputText.value;
    
    let words = analyzer.getWordCount(text);
    const primerMetrica = document.querySelector("li:nth-child(1)");
    primerMetrica.innerText= "Palabras: " +  words;
    
    let caracteres = analyzer.getCharacterCount(text);
    const segundaMetrica = document.querySelector("li:nth-child(2)");
    segundaMetrica.innerText= "Caracteres: " + caracteres;

    let caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(text);
    const tercerMetrica = document.querySelector("li:nth-child(3)");
    tercerMetrica.innerText  = "Caracteres sin espacios: " + caracteresSinEspacios;

    

}



