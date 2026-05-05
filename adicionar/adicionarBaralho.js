function adicionarBaralho(baralhos, novoTitulo) {
    // Gerar ID sequencial
    let novoId;

    if (baralhos.length > 0) {
        const ultimo = baralhos[baralhos.length - 1];
        novoId = ultimo.id + 1;
    } else {
        novoId = 1;
    }

    const novoBaralho = {
        id: novoId,
        titulo: novoTitulo
    };

    baralhos.push(novoBaralho);

    console.log("Baralho criado com sucesso!");
}

export default adicionarBaralho;