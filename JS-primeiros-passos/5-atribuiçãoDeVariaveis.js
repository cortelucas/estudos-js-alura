console.log('--- Trabalhando com atribuição de variáveis ---');

const nome = 'Lucas'
const sobrenome = 'Corte'
const idade = 27;
const cpf = 41193772885;

console.log(`
Interpolar com as templates string é mais simples.
por exemplo vc prefere fazer um console.log assim?
Meu nome é + nome + ' ' + sobrenome!
ou prefere assim? Ps, não esqueça de tirar os espaços;
Meu nome é $ {nome} $ {sobrenome}`);

console.log(`
Não podemos atribuir um novo valor a variável declarada com const.
POis como o nome diz, ela é uma constante.
Quando precisarmos fazer está ação, é aconselhável declarar com let.
por exemplo:
não podemos criar um contador com a variavel const, por isso devemos fazer da seguinte maneira:
for(let i = 0; i <= 10; i++) console.log(i) = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

Além destes dois, há o var, porém este não é aconselhavel, pois ele vaza do escopo.

`);