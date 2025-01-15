const elements = require('../elements/tela-inicial.elements.js').ELEMENTS;

class telaInicial {
    inputText() {
        cy.get(elements.inputToDo).type('Patrick');
    }
}

export default new telaInicial();