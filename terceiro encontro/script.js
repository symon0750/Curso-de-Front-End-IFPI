for (let i = 0; i <= 20; i++) {
    console.log("Número: " + i);
}

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log("O número: " + i + " é par");
    } else {
        console.log("O número: " + i + " é ímpar");
    }

}


const turma = [
    { nome: "Symon", nota: 9 },
    { nome: "bob esponja", nota: 6 },
    { nome: "peter parker", nota: 10 }
];

turma.forEach((aluno) => {
    console.log("Nome: " + aluno.nome + " | Nota: " + aluno.nota);
    if (aluno.nota >= 7) {
        console.log("Aluno aprovado!");
    } else {
        console.log("Aluno de recuperação");
    }
});

