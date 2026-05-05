function removerBaralho(idBaralho, baralhos, flashcards) {
    const index = baralhos.findIndex(b => b.id === idBaralho);

    if (index !== -1) {
        baralhos.splice(index, 1);

        for (let i = flashcards.length - 1; i >= 0; i--) {
            if (flashcards[i].idBaralho === idBaralho) {
                flashcards.splice(i, 1);
            }
        }
        console.log("Baralho e seus flashcards foram removidos.");
    } else {
        console.log("Baralho não encontrado.");
    }
}
export default removerBaralho;