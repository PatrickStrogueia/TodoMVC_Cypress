/**
 * Feature -> describe
 * Background -> context ou beforeEach
 * Caso de teste -> it
 */
import telaInicialPage from '../../support/pages/tela-inicial.page.js';

describe('Acessar a página do TodoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/angular/dist/browser/#/all');
    telaInicialPage.inputText();
  });
});
