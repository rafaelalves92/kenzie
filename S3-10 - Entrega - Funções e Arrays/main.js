
function positions(firstPlace, secondPlace, lastPlace) {

  let pos = [firstPlace, secondPlace, lastPlace]

  if(pos[1] === 'Daniel') {
    let primeiro = pos[0]
    pos[0] = 'Daniel'
    pos[1] = primeiro
  }

  if(pos[2] === 'Daniel') {
    let segundo = pos[1]
    pos[1] = 'Daniel'
    pos[2] = segundo
  }

  return pos

}

let pos = positions('Amanda', 'Júnior', 'Daniel')

text = `
  1º(ª) Colocado(a) ${pos[0]}
  2º(ª) Colocado(a) ${pos[1]}
  3º(ª) Colacado(a) ${pos[2]}
`

console.log(text)