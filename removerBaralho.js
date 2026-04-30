function removerBaralho(idBaralho, baralhos, flashcards) {
    const index = baralhos.findIndex(b => b.id === idBaralho);
    if (i !== -1) {
        baralhos.splice(index, 1);
        const flashcardsRestantes = flashcards.filter(f => f.idBaralho !== idBaralho);
        console.log(`Baralhos e seus Flashcards foram removidos.`);
        return flashcardsRestantes;   
    }else{
        console.log("Baralho não encontrado.");
        return flashcards;
    }
}
export default removerBaralho;