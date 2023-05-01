describe('Main page', () => {
  it('Open and close modal window', () => {
    cy.visit('http://localhost:5173');
    cy.get('.img-main').should('have.length', 12);
    cy.get('.img-main:first').click();
    cy.get('.modal-window').contains('Author:');
    cy.contains('Description:');
    cy.get('.close').click();
  });
  it('Should work with input', () => {
    cy.visit('http://localhost:5173');
    cy.get('input').type('new');
    cy.get('.search-logo').click();
    cy.get('.img-main').should('have.length', 10);
  });
  it('Should work when nothing is found', () => {
    cy.visit('http://localhost:5173');
    cy.get('input').type('lkjhgfdsdfghjkl;.,mnhgfdsxcvbnjhgfd');
    cy.get('.search-logo').click();
    cy.contains('Nothing found with lkjhgfdsdfghjkl;.,mnhgfdsxcvbnjhgfd...');
  });
});
