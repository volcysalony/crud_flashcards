function atualizarBaralhos(id, novoTitulo, baralhos) {
    const baralho = baralhos.find(b => b.id === id);
    if (baralho) {
        baralho.titulo = novoTitulo;
      console.log("Baralho atualizado com sucesso.");
    }else{
        console.log("Baralho nao encontrado.");
    }
}  
  export default atualizarBaralhos;