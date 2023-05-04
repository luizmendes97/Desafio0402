const students = [
  {
    name: "Miguel",
    prova1: 8,
    prova2: 5,
  },

  {
    name: "Elza",
    prova1: 10,
    prova2: 8,
  },
  {
    name: "Felipe",
    prova1: 8,
    prova2: 8,
  },
  {
    name: "Alice",
    prova1: 7,
    prova2: 3,
  },
]

for (let student of students) {
  let average = (student.prova1 + student.prova2) / 2
  let result = average > 7
  if (result) {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${average}\n Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
    )
  } else {
    alert(
      `A média do(a) aluno(a) ${student.name} é: ${average}\nNão foi dessa vez, ${student.name}! Tente Novamente!`
    )
  }
}
