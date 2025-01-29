const elements = require('../elements/tela-inicial.elements.js').ELEMENTS;
const itens = require('../elements/tela-inicial.elements.js').ITENS
const filtroItem = require('../elements/tela-inicial.elements.js').FILTROS

class telaInicial {
    inputText(dado) {
        cy.get(elements.inputToDo).type(dado).type('{enter}');
    }

    concluirItem() {
        cy.get(itens.buttonConcluirItem)
        .first()
        .click();
    }

    filtrarItem(menu) {
        cy.get(filtroItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click();
    }

    deletarItem() {
        cy.get(itens.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click();
    }

    validarInput(texto) {
        cy.get(elements.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto);
    }

    validarContador(numero) {
        cy.get(filtroItem.contador)
        .find('strong')
        .should('have.text', numero);
    }

    validarSizeToDo(numero) {
        cy.get(itens.validarListaItens)
        .should('have.length', numero);
    }
}

export default new telaInicial();