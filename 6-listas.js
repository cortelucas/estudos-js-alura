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
`)

listaDeDestinos.push(`Curitiba`);

console.log(`
Destinos possíveis:
${listaDeDestinos}
`)