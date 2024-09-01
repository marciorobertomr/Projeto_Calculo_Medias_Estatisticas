// ------- FUNÇÕES

function mediaSimples() {
    let numeros = prompt("Digite os números, separados por barras. Exemplo: 2/5,8/3 serão as notas: 2, 5,8 e 3.");
    
    numeros = numeros.split('/').map(Number); 
    // Método split() separa a string com base no valor informado e cria um array.
    // Método map() percorre cada elemento do array e aplica uma modificação comum para todos. No caso, está convertendo do tipo string para number

    let media = numeros.reduce((acumulador, valorAtual, indice, numeros) => {
        acumulador += valorAtual;
        if(indice === numeros.length - 1) {
            return acumulador / numeros.length;
        } else {
            return acumulador;
        }
    }, 0);

    alert(`
        A Média Aritmética Simples é: ${media}
        Valores informados: ${numeros.map(String).join(', ')}.
    `)
}

function mediaPonderada() {
    let quantidadePesos = parseInt(prompt("Quantos notas deseja informar?"));

    if(isNaN(quantidadePesos)) {
        alert("Valro inválido. Digite um número.");
        return;
    }

    let notas = [];
    let pesos = [];
    let somaNotas = 0;
    let somaPesos = 0;
    let detalheNotas = [];

    for(let i = 0; i < quantidadePesos; i++) {
        let notaInformada = prompt("Digite a nota e seu respectivo peso, separadas por barras. Exemplo: 2/5 será a notas: 2 com peso 5.");

        notaInformada = notaInformada.split('/').map(Number);

        let notaCalculada = notaInformada[0] * notaInformada[1];

        notas.push(notaCalculada);
        pesos.push(notaInformada[1]);

        let detalhe = 'Nota: ' + notaInformada[0] + ' - Peso: ' + notaInformada[1];
        detalheNotas.push(detalhe);
    }

    for(let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
        somaPesos += pesos[i];
    }

    let media = somaNotas / somaPesos;

    alert(`
    A Média Aritmética Ponderada é: ${media.toFixed(2)}
    Valores informados: ${detalheNotas.map(String).join(',\n')}
    `)
}

function mediana() {
    let numeros = prompt("Digite a sequencia de números separados por /, que deseja conhecer a mediana.");

    numeros = numeros.split('/').map(Number);

    let tamanho = numeros.length;
    let mediana = 0;

    if(tamanho % 2 === 0) {
        let metade = tamanho / 2;
        mediana = (numeros[metade - 1] + numeros[metade]) / 2;
    } else {
        let metade = (tamanho - 1) / 2;
        mediana = numeros[metade];
    }

    alert(`
        A Mediana é: ${mediana}
        Valores informados: ${numeros.map(String).join(', ')}
    `);
}

function moda() {
    let numeros = prompt('Digite a sequencia de números que deseja descobrir a moda, separados por barra (/).');
    
    numeros = numeros.split('/').map(Number);

    numeros.sort((a, b) => a - b); // Método sorte serve para ordenar os elementos

    let contador = 0;
    let numeroMaisRepetido = 0;
    let repeticoes = 0;

    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numeros[i - 1]) {
            contador++;
            if (contador > repeticoes) {
                numeroMaisRepetido = numeros[i];
                repeticoes = contador;
            }
        } else {
            contador = 1;
        }
    }

    alert(`
        A moda é: ${numeroMaisRepetido}
        Quantidade de repetições: ${repeticoes}
        Valores informados: ${numeros.map(String).join(', ')}
    `);
}



// ------- MENU PRINCIPAL

let confirma = true;

do {

    let operacao = prompt(`
        Qual média estatística deseja calcular?
        1 - Média Aritmética Simples
        2 - Média Aritmética Ponderada
        3 - Mediana
        4 - Moda
        `)

    switch (operacao) {
        case '1':
            mediaSimples();
            break;
        case '2':
            mediaPonderada();
            break;
        case '3':
            mediana();
            break;
        case '4':
            moda();
            break;
        default:
            alert('Opção inválida.');
            break;
    }

    confirma = confirm("Deseja selecionar outra opção de cálculo?");

} while (confirma);