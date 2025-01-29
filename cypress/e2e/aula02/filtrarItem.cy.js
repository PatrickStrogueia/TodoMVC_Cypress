import telaInicial from '../../support/pages/tela-inicial.page.js';

describe('Validar os filtros da aplicação após adição de itens', () => {
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
        telaInicial.concluirItem();
    });

    /**
     * clicar no filtro
     * o item ser exibido
     * o contador deve bater a informação
     */

    it.only('Filtrar itens ativos', () => {
        telaInicial.filtrarItem('Active');
    });

    it.skip('Filtrar itens concluídos', () => {

    });

});