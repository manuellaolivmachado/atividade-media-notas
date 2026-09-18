let soma = 0;
let resultado;
let nome = prompt("Digite seu nome: ");

// Verifica se o nome está vazio ou possui números
while (nome.trim() === "" || /\d/.test(nome)) {
    console.log("Nome inválido!");
    nome = prompt("Digite seu nome:");
}

// Pede 3 notas
for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt("Digite uma nota: "));

    // Verifica se a nota é válida
    while (nota < 0 || nota > 10) {
        console.log("Nota inválida!");
        nota = parseFloat(prompt("Digite uma nota:"));
    }

    soma += nota;
}

let media = soma / 3;

// Define o desempenho
if (media >= 9 && media <= 10) {
    resultado = "A";
} else if (media >= 7) {
    resultado = "B";
} else if (media >= 5) {
    resultado = "C";
} else {
    resultado = "D";
}

// Mostra o resultado
console.log(
    nome + " sua média é: " + media.toFixed(2) +
    " e seu desempenho é " + resultado + "!"
);
