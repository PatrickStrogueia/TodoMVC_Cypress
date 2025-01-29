import telaInicial from '../../support/pages/tela-inicial.page.js';

describe('Deletar itens da lista', () => {
    /*
     * DADO - BEFORE - EXECUTADO APENAS ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - EXECUTADO ANTES DE CADA TESTE
     */

    beforeEach(() => {
        cy.visit('/');
        var todoItens = ['Maçã', 'Banana', 'Cenoura'];
        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item);
        });
    });

    it.only('Deleção de um item da lista', () => {
        telaInicial.deletarItem();
    });

});