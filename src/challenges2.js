// Desafio 11
function generatePhoneNumber(numeros) {
  let telefone = '(';
  let resposta;
  let numerosString = numeros.toString();
  let numPronto = numerosString.replace(/,/g, '');
  let condicao = 0;
  let conta = {};
  numeros.forEach(function (i) { conta[i] = (conta[i] || 0) + 1; });
  for (let index in conta) {
    if ((conta[index] >= 3) || (index < 0) || (index > 9)) { condicao = 1; } }
  if (numeros.length !== 11) {
    resposta = 'Array com tamanho incorreto.';
  } else if (condicao === 1) {
    resposta = 'não é possível gerar um número de telefone com esses valores';
  } else {
    resposta = telefone.concat(numPronto.substring(0, 2), ') ', numPronto.substring(2, 7));
    resposta = telefone.concat('-', numPronto.substring(7, 12));
  }
  return resposta;
}

// Desafio 12
function triangleCheck(linhaA, linhaB, linhaC) {
  let resultado;
  if (linhaA < (linhaB + linhaC)) {
    if (linhaA > Math.abs(linhaB - linhaC)) {
      resultado = true;
    } else { resultado = false; }
  } else if (linhaB < (linhaA + linhaC)) {
    if (linhaB > Math.abs(linhaA - linhaC)) {
      resultado = true;
    } else { resultado = false; }
  } else if (linhaC < (linhaA + linhaB)) {
    if (linhaC > Math.abs(linhaA - linhaB)) {
      resultado = true;
    } else { resultado = false; }
  } else { resultado = false; }
  return resultado;
}

// Desafio 13
function hydrate(recebida) {
  let soma = 0;
  let hidratacao;
  for (let index of recebida) {
    for (let cont = 0; cont <= 9; cont += 1) {
      if (index == cont) {
        soma += cont;
      }
    }
  }
  if (soma === 1) {
    hidratacao = soma.concat(' copo de água');
  } else {
    hidratacao = soma.concat(' copos de água');
  }
  return hidratacao;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
