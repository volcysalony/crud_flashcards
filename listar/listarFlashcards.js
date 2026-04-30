function listarFlashcards(flashcards) {
  if (flashcards.length === 0) {
    console.log("Nenhum flashcard cadastrado.")
    return;
  }

  flashcards.forEach(flashcard => {
    console.log(`ID: ${flashcard.id}`)
    console.log(`Pergunta: ${flashcard.pergunta}`)
    console.log(`Resposta: ${flashcard.resposta}`)
    console.log(`Baralho: ${flashcard.idBaralho}`)
  })
}

export default listarFlashcards;