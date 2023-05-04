const students = [
  {
    name: Miguel,
    Prova1: 8,
    Prova2: 5,
  },

  {
    name: Elza,
    Prova1: 10,
    Prova2: 5,
  },
  {
    name: Felipe,
    Prova1: 7,
    Prova2: 3,
  },
  {
    name: Alice,
    Prova1: 8,
    Prova2: 8,
  },
]

let average = (Number(Prova1) + Number(Prova2)) / 2

let result = average > 7

if (result) {
  alert("A media do(a) aluno(a) + students + average"
   + "Parabéns " + students + "!Você foi aprovado(a) no concurso")
} else {
  alert("Não foi dessa vez " + students + "Tente novamente!")
}
