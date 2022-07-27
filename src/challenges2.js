// Desafio 11
function generatePhoneNumber(numeros) {
  let numerosString = numeros.toString();
  let numPronto = numerosString.replace(/,/g, "");
  let condicao = 0;
  let conta = {};
  numeros.forEach(function (i) { conta[i] = (conta[i] || 0) + 1; });
  for (let index in conta) {
    if (conta[index] >= 3) { condicao = 1; }
    else if (index < 0 || index > 9) { condicao = 1; }
  }
  if (numeros.length != 11) {
    let erro = 'Array com tamanho incorreto.';
    return erro;
  } else if (condicao === 1) {
    let teste = 'não é possível gerar um número de telefone com esses valores';
    return teste;
  } else {
    let telefone = "(" + numPronto.substring(0, 2) + ") " + numPronto.substring(2, 7) + "-" + numPronto.substring(7, 12);;
    return telefone;
  }
}

// Desafio 12
function triangleCheck(linhaA, linhaB, linhaC) {
  if (linhaA < (linhaB+linhaC)) {
    if (linhaA > Math.abs(linhaB-linhaC)){
      return true;
    }
    else {return false;}
  }
  else if (linhaB < (linhaA+linhaC)) {
    if (linhaB > Math.abs(linhaA-linhaC)){
      return true;
    }
    else {return false;}
  }
  else if (linhaC < (linhaA+linhaB)) {
    if (linhaC > Math.abs(linhaA-linhaB)){
      return true;
    }
    else {return false;}
  }
  else {return false;}
}

// Desafio 13
function hydrate(recebida) {
  let soma = 0;
  for (let index of recebida){
    for(let cont=0; cont<=9; cont++){
      if(index==cont){
        soma+=cont;
      }
    }
  }
  if(soma === 1) {
    let hidratacao = soma + " copo de água"
    return hidratacao;
  }
  else {
    let hidratacao = soma + " copos de água"
    return hidratacao;
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
