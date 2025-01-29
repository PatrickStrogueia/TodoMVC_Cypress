import telaInicial from '../../support/pages/tela-inicial.page.js';

describe('Concluir itens na lista de ToDo', () => {
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

    it('Concluir um item da lista de ToDo', () => {
        telaInicial.concluirItem();
    });

});