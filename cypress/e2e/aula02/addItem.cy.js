import telaInicial from '../../support/pages/tela-inicial.page.js';

describe('Adicionar itens na minha lista de ToDo', () => {
    /*
     * DADO - BEFORE - EXECUTADO APENAS ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - EXECUTADO ANTES DE CADA TESTE
     */

    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('Adicionar um item na lista', () => {
        telaInicial.inputText('Teste 1');
        telaInicial.inputText('Teste 2');
        telaInicial.inputText('Teste 3');
    });

    it('Adicionar mais de um item à lista', () => {
        var todoItens = ['Maçã', 'Banana', 'Cenoura'];
        todoItens.forEach(function (item, indice, array) {
            telaInicial.inputText(item);
        });
    });
});