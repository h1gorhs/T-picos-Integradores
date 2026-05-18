/*const numList = [1,2,3,4,5];

numList.forEach(num => {
    console.log(`Número: ${num}`)
});
*/

//Map

/*
const numeros = [15,10,28,9];
const dobrados = numeros.map(num => num*2);

console.log(numeros);
console.log(dobrados);
*/

/*
const numeros = [15,2,35,4,52];
const maioresQue = numeros.filter(num => num > 15);

console.log(numeros);
console.log(maioresQue);
*/

/*
const numeros = [15,2,35,4,52];
const maioresQue = numeros.find(num => num > 15)

console.log(numeros);
console.log(maioresQue);
*/

/*
const numeros = [5,10,15];
const existeMaiorQue = numeros.every(num => num >= 5)

console.log(numeros);
console.log(existeMaiorQue);
*/

/*
const numeros = [5,10,15];
const existeMaiorQue = numeros.some(num => num >= 15)

console.log(numeros);
console.log(existeMaiorQue);
*/

/*
const numeros = [1,2,3,4];
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 10);

console.log(soma);
*/

/*
const cores = ['vermelho', 'verde', 'azul'];
for(const cor of cores) {
    console.log(cor);
}
*/

/*
const pessoa = {
    nome: "Higor",
    idade: 35,
    profissao: "Aluno"
};

//console.log(pessoa)
for(const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}
*/

/*
const mapa = new Map();
mapa.set('nome', 'Higor');
mapa.set('idade', 21);

console.log(mapa.get('nome'));
console.log(mapa.get('idade'));
*/

/*
const conjunto = new Set();

conjunto.add(1);
conjunto.add(45);
conjunto.add(3);
console.log(conjunto);

for (conj of conjunto){
    console.log(conj);
}
*/

/*
const obj = {id:1};
const weakmap = new WeakMap();
weakmap.set(obj, 'Valor referente ao objeto 1');

console.log(weakmap.get(obj));
*/

/*
const weakSet = new WeakSet();

const obj1 = {nome: "Higor"};
const obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));
console.log(weakSet.has(obj2));
*/

//Arrow Function, recebe dois parâmetros para realizar a soma dos valores;

/*
const valores = (a,b) => a + b;
console.log(valores(10,15));
*/
//receber dois parâmetros nome e idade;

const criarPessoa = (nome, idade) => ({nome, idade});

const pessoa1 = criarPessoa("Higor", 21);
console.log(pessoa1);