// Desafio 1
function compareTrue(entrada1, entrada2) {
  if((entrada1===true)&&(entrada2===true)){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura)/2;
  return area;  
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(" ");
  return array;
}

// Desafio 4
function concatName(arrayConcat) {
  let fraseConcat = arrayConcat[arrayConcat.length-1] + ", " + arrayConcat[0];
  return fraseConcat;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let total = (vitorias * 3) + empates;
  return total;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
