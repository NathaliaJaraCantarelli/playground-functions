// Desafio 1
function compareTrue(entrada1, entrada2) {
  if ((entrada1 === true) && (entrada2 === true)){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
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
function highestCount(numeros) {
  let maior = 0;
  let cont = 0;
  for (let index in numeros) {
      console.log(numeros[index])
    if (index == 0) {
      maior = numeros[index];
      cont = 1;
    }
    else if ((numeros[index]) > maior) {
      maior = numeros[index];
      cont = 1;
        console.log(maior, cont);
    }
    else if ((numeros[index]) === maior) {
      cont += 1;
        console.log(maior, cont);
    }
  }
  return cont;
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
