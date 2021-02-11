console.log(`--- Trabalhando com listas ---`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log(`
Quando temos varias variaveis que serão umas especie de lista, podemos fazer uma.
no lugar de declararmos, let Salvador = 'Salvador', let RioDeJaneiro = 'Rio de Janeiro'...
podemos declarar como um new Array ou um const lista = [];

para colocarmos novos dados dentro da lista usamos o push
`);
listaDeDestinos.push(`Curitiba`);
console.log(`
Destinos possíveis:
${listaDeDestinos}
`);

console.log(`Agora, para tirarmos algo, temos que usar o splice(), onde temos que passar o local que esta.
por exemplo, deletarei São Paulo, que esta na segunda posição;
listaDeDestinos.splice(1, 1);
Usamos este exemplo acima.
`);
listaDeDestinos.splice(1, 1);
console.log(`
Destinos possíveis:
${listaDeDestinos}
`);

console.log(`
Usamos para acessar a posição utilizando [i], por exemplo:
listaDeDestinos[1]
${listaDeDestinos[1]}
`)