//console.log("Olá, mundo!"); abre no F12

//document.write("Ola, documento!");

//window.alert("Ola, janela!");


// Logica da Programação
//PROBLEMA;  Obter 3 notas de um aluno, caucular a média,
//exibir a média e exibir a situação do aluno; aprovado,
// em exame ou reprovado.

console.log('inicio do programa');



//declaração das variaveis
//usa esses comandos:
//(const:) usa para variaveis que não variam ou seja (constantes) não permiti reatribuir o valor  EXEMPLO:
//(let:)   para variaveis que variam (permite reatirbuir o valor)


const nota1= parseInt(prompt ('Digite a nota 1')); //ParseInt converter um valor de texto (caracter) para numero
const nota2= parseInt(prompt ('Digite a nota 2')); // metodo prompt cria uma caixa de dialogo para ser prenchida
const nota3= parseInt(prompt ('Digite a nota 3'));

//caiculo da media
const media = (nota1+ nota2+ nota3) / 3;


console.log('a nota1 é:',nota1);
console.log('a nota2 é:', nota2);
console.log('a nota3 é:', nota3);

console.log('A media do aluno é:', media);

console.log ('Fim do Programa');
