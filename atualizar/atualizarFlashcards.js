function atualizarFlashcard(id, novaPergunta, novaResposta, flashcards){
    const flashcard = flashcards.find(f => f.id === id);
    if (flashcard) {
        flashcard.pergunta = novaPergunta;
        flashcard.resposta = novaResposta;
        console.log("Flashcard atualizado com sucesso");
    }else{
        console.log("Flashcard não encontrado");
    }
}
export default atualizarFlashcard;