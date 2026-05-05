function listarPorBaralho(flashcards, idBaralho) {
  let encontrou = false;

  for (let i = 0; i < flashcards.length; i++) {
    if (flashcards[i].idBaralho === idBaralho) {
      console.log("\nID:", flashcards[i].id)
      console.log("Pergunta:", flashcards[i].pergunta)
      console.log("Resposta:", flashcards[i].resposta)
      console.log("------------------------")

      encontrou = true
    }
  }

  if (!encontrou) {
    console.log("Nenhum flashcard encontrado para esse baralho.");
  }
}

export default listarPorBaralho;