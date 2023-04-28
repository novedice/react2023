describe('Test number 1', () => {
  it('Visits the app', () => {
    cy.visit('http://localhost:5173');
    cy.contains('about us').click();
    cy.url().should('include', '/about');
  });
});
afterEach(() => {
  cy.window().trigger('unload');
});
describe('Form page', () => {
  it('checks the form validation working', () => {
    cy.visit('http://localhost:5173');
    cy.contains('form').click();
    cy.url().should('include', '/form');
    cy.get('.name-city').type('123');
    cy.get('form').contains('submit').click();
    cy.get('.form-errors').contains('This field should start from upper letter');
  });
});
