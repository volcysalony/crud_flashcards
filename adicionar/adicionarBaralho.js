function adicionarBaralho(baralhos, novoTitulo) {
  // Não permitir título duplicado
    let tituloExiste = false;

    for (let i = 0; i < baralhos.length; i++) {
         if (baralhos[i].titulo === novoTitulo) {
            tituloExiste = true;
            break;
    }
    }

    if (tituloExiste) {
        console.log("Erro: Já existe um baralho com esse título!");
        return false;
    }

  // Gerar ID
  let novoId

    if (baralhos.length > 0) {
    novoId = baralhos[baralhos.length - 1].id + 1;
    } else {
    novoId = 1;
    }

    const novoBaralho = {
        id: novoId,
        titulo: novoTitulo
    }

    baralhos.push(novoBaralho);
    console.log("Baralho criado com sucesso!");
    return true;
}

export default adicionarBaralho;