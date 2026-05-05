function buscarPorPergunta(flashcards, termo) {
  let encontrou = false

  for (let i = 0; i < flashcards.length; i++) {
    // deixa tudo minúsculo pra comparar
    const pergunta = flashcards[i].pergunta.toLowerCase()
    const busca = termo.toLowerCase();

    if (pergunta.includes(busca)) {
      console.log("\nID:", flashcards[i].id);
      console.log("Pergunta:", flashcards[i].pergunta);
      console.log("Resposta:", flashcards[i].resposta);
      console.log("----------------------")

      encontrou = true;
    }
  }

  if (!encontrou) {
    console.log("Nenhum flashcard encontrado.");
  }
}

export default buscarPorPergunta;