function adicionarFlashcard(flashcards, baralhos, pergunta, resposta, idBaralho) {
    // Verificar se o baralho existe
    let baralhoExiste = false;

    for (let i = 0; i < baralhos.length; i++) {
        if (baralhos[i].id === idBaralho) {
            baralhoExiste = true;
            break;
        }
    }

    if (!baralhoExiste) {
        console.log("Erro: Baralho não encontrado.");
        return;
    }

    // Gerar ID sequencial
    let novoId;

    if (flashcards.length > 0) {
        const ultimo = flashcards[flashcards.length - 1];
        novoId = ultimo.id + 1;
    } else {
        novoId = 1;
    }

    const novoFlashcard = {
        id: novoId,
        pergunta: pergunta,
        resposta: resposta,
        idBaralho: idBaralho
    };

    flashcards.push(novoFlashcard);

    console.log("Flashcard criado com sucesso!");
}

export default adicionarFlashcard;