console.log("hello world!");

// let fruta = "banana";

// fruta = "Morango";

// // const é uma variavél constante, não pode ser alterada

// let comida = "Lasanha";

// //BOOLEAN (true or false)
// let estaChovendo = true;
// let estaSol = false;

// //ARRAY
let list = [9, "julho", false, ["oi", 14]];

//Para acessar um eemento do array, usa-se o índice
// lista[0]
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(list[3]);

// Para saber o comprimentodo Array
console.log(list.length);

//Para adicionar um elemento no array
let cidadeNatal = "Londrina/PR";

list.push(cidadeNatal);
console.log(list);

list.push(cidadeNatal);

console.log(list);

//OBJETO
/*
- NOME
- IDADE
- CIDADE
*/

let pessoa = {
  nome: "João",
  idade: 20,
  cidade: "Londrina/PR",
};

console.log("----------------------------------------------------");

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa.idade);

/*

Sintaxe para criar uma nova chave

nomevarialvel: ["nome da chave"] = valor

*/
pessoa["comida"] = "Podrão";
console.log(pessoa);

//operadores lógicos
/*
=== Extritamente igual => verifica se o valor e o tipo são iguais 
*/

console.log("----------------------------------------------------");

let numeroUm = 10;
let numeroDois = 22;
let numeroTres = "30";
let numeroQuatro = "20";
let numeroCinco = 10;

numeroQuatro === numeroDois; //false
numeroUm === numeroCinco; //true

/*
 == Igualdade => avalia se os valores são iguais (idependentes do tipo)
*/

numeroDois == numeroQuatro; //true
numeroUm == numeroDois; //false

/*
"!=" Diferente => avalia se os valores são diferentes (idependentes do tipo)
*/

numeroDois != numeroQuatro; //false
numeroUm != numeroTres; //true

/*
!== Nao identico => avalia se os valores e o tipo são diferentes
*/

console.log(numeroDois !== numeroQuatro); //true

console.log("----------------------------------------------------");

/*
TABELAS VERDADE

&& => E
    TRUE && TRUE = TRUE
    TRUE && FALSE = FALSE
    FALSE && TRUE = FALSE
    FALSE && FALSE = FALSE
*/

let situacaoUm = true;
let situacaoDois = false;

console.log(situacaoUm && situacaoDois); //false
console.log(situacaoUm && situacaoUm); //true
console.log("----------------------------------------------------");

/*
|| => OU
    TRUE || TRUE = TRUE
    TRUE || FALSE = TRUE
    FALSE || TRUE = TRUE
    FALSE || FALSE = FALSE
*/

console.log(situacaoUm || situacaoDois); //true
console.log(situacaoDois || situacaoDois); //false
console.log("----------------------------------------------------");

/*
Estrutura de repetição => for loop

sintaxe:
for (inicialização (variável contadora)); condição; incremento) {
  
}
*/

let cidades = [
  "Londrina",
  "Curitiba",
  "Joinville",
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
];

// for (let i = 0; i < cidades.length; i++) {
//   console.log(cidades[i]);
// }

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    console.log("par " + i);
  } else {
    console.log("impar " + i);
  }
}

/*
FUNÇÃO 

function nomeDaFuncao(parametros => são opcionais) {

}
*/

function soma(x, y) {
  return x + y;
}

let sum = soma(10, 20);
console.log(sum);
