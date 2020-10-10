//exercício 1

function recebeFrase(saudacao, oMundo) {
    var frase1 = saudacao;
    var frase2 = oMundo;

    return ("Olá " + "Mundo ");


}

document.write(recebeFrase("Olá " + "Mundo "));



//exercício 2

function recebeNome(nomePessoa, saudacaoPessoa) {
    var retornaPessoa = nomePessoa;
    var retornaSaudacao = saudacaoPessoa;


    return ("<br><br>" + " Olá "  + nomePessoa +"," + " Tudo bem " + retornaSaudacao + "? ");


}

document.write(recebeNome("Rafael ", "Rafael "));



//exercício 3 

function recebeNumero(numero) {
    var total = numero
    var divisao = numero / 9;


    return ("<br><br>" + " O resto de " + total + " divididos por 9 é: " + divisao + "<br><br>");
}

document.write(recebeNumero(400));



//exercício 4

    

    var idade = parseInt(prompt("Informe sua idade"));

    if (idade >= 18) {
        document.write("Você pode dirigir ");

    } else {
        document.write("Você não pode dirigir ");

    }




   


