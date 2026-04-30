function listarBaralhos(baralhos) {
  if (baralhos.length === 0) {
    console.log("Nenhum baralho cadastrado.")
    return
  }

  baralhos.forEach((b) => {
    console.log(`ID: ${b.id} | Título: ${b.titulo}`)
  })
}

export default listarBaralhos;