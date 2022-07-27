// Desafio 11
function generatePhoneNumber(numeros) {
  let numerosString = numeros.toString();
  let numPronto = numerosString.replace(/,/g, "");
  let teste;
  let condicao = 0;
  let conta = {};
  numeros.forEach(function (i) { conta[i] = (conta[i] || 0) + 1; });
  for (let index in conta) {
    console.log(index, conta[index])
    if (conta[index] >= 3) { condicao = 1; }
    else if (index < 0 || index > 9) { condicao = 1; }
  }
  if (numeros.length != 11) {
    let erro = 'Array com tamanho incorreto.';
    return erro;
  }
  else if (condicao === 1) {
    teste = 'não é possível gerar um número de telefone com esses valores';
    return teste;
  }
  else {
    let ddd = numPronto.substring(0, 2);
    console.log(ddd);
    let primeiro = numPronto.substring(2, 7);
    console.log(primeiro);
    let segundo = numPronto.substring(7, 12);
    console.log(segundo);
    let telefone = "(" + ddd + ") " + primeiro + "-" + segundo;
    return telefone;
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
