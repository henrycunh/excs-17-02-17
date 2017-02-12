// Função que vai realizar as operações da Primeira Questão
function operacoes(){
    // Lendo o valor do primeiro número
    // Pegando o elemento input pelo ID, e em seguida o seu valor ou 0 se o valor não existir.
    var num1 = document.getElementById('num1').value || 0;
    // Mesma coisa para o segundo número
    var num2 = document.getElementById('num2').value || 0;
    
    // Montando o HTML para a tabela
    // Nessa primeira linha, eu atribuo a tag da tabela, e a linha com os títulos
    var tabela = 
        "<table>"+
            "<tr>"+
                "<th>Operação</th>"+
                "<th>Valor</th>"+
            "</tr>";
    
    // Adicionando os valores das operações
    // Soma
    tabela += 
        "<tr>"+
            "<td>" + num1 + " + " + num2 + "</td>"+
            // É necessário transformar em Inteiro porque o + é usado pra concatenar
            "<td>" + (parseInt(num1) + parseInt(num2)) + "</td>"+
        "</tr>";
    // Subtração
    tabela += 
        "<tr>"+
            "<td>" + num1 + " - " + num2 + "</td>"+
            // Não é necessário dar parse nas demais operações, pois não são operadores de string
            "<td>" + (num1 - num2) + "</td>"+
        "</tr>";
    // Multiplicação
    tabela += 
        "<tr>"+
            "<td>" + num1 + " * " + num2 + "</td>"+
            "<td>" + (num1 * num2) + "</td>"+
        "</tr>";
    // Divisão
    tabela += 
        "<tr>"+
            "<td>" + num1 + " / " + num2 + "</td>"+
            "<td>" + (num1 / num2) + "</td>"+
        "</tr>";
    // Resto
    tabela += 
        "<tr>"+
            "<td>" + num1 + " % " + num2 + "</td>"+
            "<td>" + (num1 % num2) + "</td>"+
        "</tr>";
    // Fechando tabela
    tabela += "</table>";
    
    // Buscando o div com ID 'resultadoEx1', e atribuindo a tabela como HTML interno.
    document.getElementById('resultadoEx1').innerHTML = tabela;
    
}


// Função pedida na Segunda Questão
function calcularNota(notas){
    // Ver quantas notas foram passadas no vetor
    var args = notas.length;
    // Se foram passadas 4 notas, calcular normalmente
    if(args == 4){
        var media = 0;
        // Percorre o vetor e soma todas as notas;
        for(var i = 0; i < notas.length; i++)
            media += notas[i];
        // Divide a média pela quantidade de notas
        media /= 4;
        // E retorna o valor
        return media;
    }
    else if(args == 5){
        // Pegando a notal final (ultimo elemento do vetor), e o removendo, para que fique com 4 elementos
        var notaFinal = notas.pop();
        // Como o vetor agora tem 4 elementos, podemos usar essa mesma função para pegar a média
        // Isso se chama recursão
        var media = calcularNota(notas);
        // Retornar a média com a nota final
        return (notaFinal + media) / 2;
    }
}

// Função que usa a função acima junto ao HTML, para efeitos de teste e visualização
function testarNotas(){
    var notas = [];
    // Pegando as notas e atribuindo a um vetor
    for(var i = 0; i < 4; i++){
        // Pegando o valor dos inputs com o id 'notaX'
        var nota = document.getElementById('nota'+(i+1)).value;
        // Vê se o campo está vazio, pois são necessárias as 4 notas
        if(nota == '')
            // Se estiver, sai do loop
            break;
        // Atribui a nota ao vetor, como inteiro
        notas[i] = parseInt(nota);
    }
    // Vê se todas as notas foram preenchidas
    if(notas.length == 4){
        // Vê se existe uma nota final
        var notaFinal = document.getElementById('notaFinal').value;
        if(notaFinal != '')
            // Se existe, adiciona ao vetor, como Inteiro
            notas.push(parseInt(notaFinal));
        // Calcula a média e exibe no div de ID resultadoEx2
        document.getElementById('resultadoEx2').innerHTML = "<b>Média:</b>" + calcularNota(notas); 
    }
    // Se não, apresenta mensagem de erro no div de ID resultadoEx2
    else
        document.getElementById('resultadoEx2').innerHTML = "<b>São necessárias ao menos 4 notas.</b>";
    
}

// Função para efetuar a Terceira Questão
function calcularSalario(){
    // Pegando o salário
    var salario = document.getElementById('salario').value;
    var aumento = 0;
    // Checando limiares
    if(salario <= 280) aumento = .2;
    else if(salario > 280 && salario <= 700) aumento = .15;
    else if(salario > 700 && salario <= 1500) aumento = .1;
    else if(salario > 1500) aumento = .05;
    // Estruturar o HTML que vai servir como resposta
    var html = "<b>Salário antes do reajuste:</b> R$" + salario + "<br>";
    // Math.round é uma função que arredonda números reais
    html += "<b>Percentual de aumento:</b> %" + Math.round(aumento * 100) + "<br>";
    html += "<b>Valor do Aumento:</b> R$" + Math.round(salario * aumento) + "<br>";
    html += "<b>Salário após aumento:</b> R$" + Math.round(salario * (aumento + 1));
    
    // Pegando o div de ID 'resultadoEx3' e atribuindo um HTML interno
    document.getElementById('resultadoEx3').innerHTML = html;
}
