function removerFlashcard(id, flashcards) {
    const index = flashcards.findIndex(f => f.id === id);
    if (index !== -1) {
        flashcards.splice(index, 1);
        console.log("flashcard removido com sucesso!");
    }else{
        console.log("flashcard não encontrado");
    }
}
export default removerFlashcard;