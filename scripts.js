const classes = [];
const index = 1;
let options = 0;

const showResults = (student) => {
    if (student.average >= 7) {
        let goodMessege = `A média do(a) aluno(a) ${student.name} é: ${student.average}
        Parabéns, ${student.name}! Você foi aprovado(a)`

        alert(goodMessege)
    } else {
        badMessege =`A média do(a) aluno(a) ${student.name} é: ${student.average}
        Que pena, ${student.name}! Infelizmente você foi reprovado(a)`

        alert(badMessege)
    }
}

while (options != 4) {
    options = Number(prompt(`Escolha uma das opções do menu:

        1- Adicionar um registro de aluno
        2- Mostrar Resultados dos alunos
        3- Fechar o programa

    `));
    switch (options) {
        case 1:
            let studentName = prompt("Qual o nome do aluno?");
            let firstGrade = Number(prompt("Qual a primeira nota"));
            let secondGrade = Number(prompt("Qual a segunda nota"));
            let average =( firstGrade + secondGrade)/2

            const student = {
                name: studentName,
                firstGrade: firstGrade,
                secondGrade: secondGrade,
                average: average,
            }

            classes.push(student);
            break;

        case 2:
            for (let students of classes) {
                showResults(students)
            }
            break;

        case 3:

            alert('Programa encerrado! até mais!')
            break;

        default:
            alert('Por favor, insira uma opção válida')
            break;
    }
}