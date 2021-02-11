console.log('--- Trabalhando com variáveis. ---');

const nome = 'Lucas Corte'
const idade = 27;
const cpf = 41193772885;

console.log(`
Aqui trabalhamos guardando 3 valores em 3 variáveis.
e podemos concatená-la da seguinte maneira.

Eu ${nome}, inscrito sob o CPF ${cpf}, declaro que tenho a idade de ${idade} anos.
`)

const pessoa = {
    nome: 'Lucas Corte',
    cpf: 41193772885,
    idade: 27
}
console.log(typeof(pessoa))

console.log(`
Mas também podemos declarar em uma unica variavel, no qual chamamos de Objeto.
Aqui declarei o objeto pessoa que recebe nela todas as informações.
Para acessarmos as mesmas, devemos colocar o nome da variável, seguida de um ponto.
Demonstro abaixo:

Eu ${pessoa.nome}, inscrito sob o CPF ${pessoa.cpf}, declaro que tenho a idade de ${pessoa.idade} anos.
`);