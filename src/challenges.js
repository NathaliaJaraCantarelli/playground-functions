// Desafio 1
function compareTrue(entrada1, entrada2) {
  let retorno;
  if ((entrada1 === true) && (entrada2 === true)) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let array = frase.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayConcat) {
  let fraseConcat = arrayConcat[arrayConcat.length - 1].concat(', ', arrayConcat[0]);
  return fraseConcat;
}

// Desafio 5
function footballPoints(vitorias, empates) {
  let total = (vitorias * 3) + empates;
  return total;
}

// Desafio 6
function highestCount(numeros) {
  let maior = null;
  let cont = 0;
  for (let index in numeros) {
    if ((maior === null) || ((numeros[index]) > maior)) {
      maior = numeros[index];
      cont = 1;
    } else if ((numeros[index]) === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(ratoP, gato1P, gato2P) {
  let distanciaGato1;
  let distanciaGato2;
  let frase;
  distanciaGato1 = Math.abs(ratoP - gato1P);
  distanciaGato2 = Math.abs(ratoP - gato2P);
  if (distanciaGato1 > distanciaGato2) {
    frase = 'cat2';
  } else if (distanciaGato1 < distanciaGato2) {
    frase = 'cat1';
  } else {
    frase = 'os gatos trombam e o rato foge';
  }
  return frase;
}

// Desafio 8
function fizzBuzz(entradaArray) {
  let resultado = [];
  for (let index in entradaArray) {
    if ((entradaArray[index] % 3 === 0) && (entradaArray[index] % 5 === 0)) {
      resultado.push('fizzBuzz');
    } else if (entradaArray[index] % 3 === 0) {
      resultado.push('fizz');
    } else if (entradaArray[index] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(paraCodificar) {
  paraCodificar = paraCodificar.replace(/a/g, '1');
  paraCodificar = paraCodificar.replace(/e/g, '2');
  paraCodificar = paraCodificar.replace(/i/g, '3');
  paraCodificar = paraCodificar.replace(/o/g, '4');
  let saida = paraCodificar.replace(/u/g, '5');
  return saida;
}
function decode(paraDecodificar) {
  paraDecodificar = paraDecodificar.replace(/1/g, 'a');
  paraDecodificar = paraDecodificar.replace(/2/g, 'e');
  paraDecodificar = paraDecodificar.replace(/3/g, 'i');
  paraDecodificar = paraDecodificar.replace(/4/g, 'o');
  let saida = paraDecodificar.replace(/5/g, 'u');
  return saida;
}

// Desafio 10
function techList(arrayEntrada, stringEntrada) {
  let ordenado = arrayEntrada.sort();
  let tecnologias = [];
  if (arrayEntrada.length === 0) {
    tecnologias = 'Vazio!';
  } else {
    for (let index of ordenado) {
      let itens = {
        tech: null,
        name: null,
      };
      itens.tech = index;
      itens.name = stringEntrada;
      tecnologias.push(itens);
    }
  }
  return tecnologias;
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
