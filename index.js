import promptSync from "prompt-sync";
const prompt = promptSync();

import baralhos from "./baseDeDados/baralhos.js";
import flashcards from "./baseDeDados/flashcards.js";
import listarBaralhos from "./listar/listarBaralhos.js";
import listarFlashcards from "./listar/listarFlashcards.js";
import adicionarBaralho from "./adicionar/adicionarBaralho.js";
import adicionarFlashcard from "./adicionar/adicionarFlashcard.js";
import atualizarBaralho from "./atualizar/atualizarBaralho.js";
import atualizarFlashcard from "./atualizar/atualizarFlashcards.js";
import removerBaralho from "./remover/removerBaralho.js";
import removerFlashcard from "./remover/removerFlashcard.js";

let opcao = "0"

while (opcao !== "9") {
    console.log("\n--- MENU ---");
    console.log("1 - Listar Baralhos");
    console.log("2 - Listar Flashcards");
    console.log("3 - Adicionar Baralho");
    console.log("4 - Adicionar Flashcard");
    console.log("5 - Atualizar Baralho");
    console.log("6 - Atualizar Flashcard");
    console.log("7 - Remover Baralho");
    console.log("8 - Remover Flashcard");
    console.log("9 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {

        case "1":
            listarBaralhos(baralhos);
            break;

        case "2":
            listarFlashcards(flashcards);
            break;

        case "3":
            const titulo = prompt("Título: ");
            adicionarBaralho(baralhos, titulo);
            break;

        case "4":
            const pergunta = prompt("Pergunta: ");
            const resposta = prompt("Resposta: ");
            const idBaralho = Number(prompt("ID do baralho: "));
            adicionarFlashcard(flashcards, baralhos, pergunta, resposta, idBaralho);
            break;

        case "5":
            const idB = Number(prompt("ID do baralho: "));
            const novoTitulo = prompt("Novo título: ");
            atualizarBaralho(idB, novoTitulo, baralhos);
            break;

        case "6":
            const idF = Number(prompt("ID do flashcard: "));
            const novaPergunta = prompt("Nova pergunta: ");
            const novaResposta = prompt("Nova resposta: ");
            atualizarFlashcard(idF, novaPergunta, novaResposta, flashcards);
            break;

        case "7":
            const idRemoverB = Number(prompt("ID do baralho: "));
            removerBaralho(idRemoverB, baralhos, flashcards);
            break;

        case "8":
            const idRemoverF = Number(prompt("ID do flashcard: "));
            removerFlashcard(idRemoverF, flashcards);
            break;

        case "9":
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida!");
    }
}