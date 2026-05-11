//Exemplo 2
/*
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

console.log(saudacao("Rafael"));
*/

//Função anônima
/*
const soma = function (num1, num2) {
    return num1 + num2;
}

console.log(soma(15,32))
*/

//Arrow function(função seta)
/*
const multiplicacao = (x,y) => x * y;
console.log(multiplicacao(5,4));
*/

const pessoa = {
    nomeUsuario: "Higor Honório",
    idade: 21,
    email: "higorhonorio@unipam.edu.br",
    usuario: "aluno",
    saudar: function() {
        return "Oi, meu nome é " + this.nomeUsuario + " e eu sou um " + this.usuario + ".";
    }
}

console.log(pessoa.nomeUsuario);
console.log(pessoa.saudar());

