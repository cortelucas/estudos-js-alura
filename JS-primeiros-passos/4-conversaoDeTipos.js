console.log('--- Conversão de tipos ---');

console.log(`
O JS faz a "soma" de string e inteiro.
Não é realmente a soma, e sim uma concatenação.
Por exemplo:

- "Ano" + 2021 = ${"Ano" + 2021}

Outro exemplo:

"2" + "2" = ${"2" + "2"}, WTF como assim oO? 22?

Para corrigir este "problema" temos que transformar a String em inteiro.
Conseguimos com o comando parseInt, então:

parseInt("2") + parseInt("2") = ${parseInt("2") + parseInt("2")}

Porém, caso tentamos fazer outras operações ele faz implicitamente as conversões;

"10" - "2" = ${"10" - "2"}
"10" * "2" = ${"10" * "2"}
"10" / "2" = ${"10" / "2"}

Todavia, quando tentamos por algum motivo do além tentar dividir "Lucas" / 2 :

"Lucas" / 2 = ${"Lucas" / 2} ??? kkkk! Retorna NaN, mas o que é isso??
NaN == Not a Number"

Ahhh estava esquecendo!
Não existe apenas o parseInt, para trabalharmos com casas decimais, temos que usar o parseFloat.
`);