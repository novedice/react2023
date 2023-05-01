describe('About page', () => {
  it('Visit About us page', () => {
    cy.visit('http://localhost:5173');
    cy.contains('about us').click();
    cy.url().should('include', '/about');
  });
});

describe('Form page', () => {
  it('checks the form validation working', () => {
    cy.visit('http://localhost:5173/form');
    cy.url().should('include', '/form');
    cy.get('form').contains('submit').click();
    cy.get('.form-errors').contains('This field is required. ');
    cy.get('.name-city').type('123');
    cy.get('form').contains('submit').click();
    cy.get('.form-errors').contains('This field should start from upper letter');
    cy.get('.area-city').type('gh');
    cy.get('.population-city').type('gh');
    cy.get('form').contains('submit').click();
    cy.get('.form-errors').contains('It should be a number');
  });
  it('checks the form', () => {
    cy.visit('http://localhost:5173/form');
    cy.url().should('include', '/form');
    cy.get('.name-city').type('New');
    cy.get('.area-city').type('123');
    cy.get('.population-city').type('123');
    cy.get('.description-city').type('This is the city');
    cy.get('.input-date').type('1999-02-01');
    cy.get('.select').type('lisbon');
    cy.get('[type="radio"]').first().check();
    cy.get('input[type=file]').selectFile('cypress/fixtures/almada.jpeg');
    cy.get('form').contains('submit').click();
    cy.get('.submitted').contains('Your form is submitted. The card successfully added!');
    cy.get('.submit-button').contains('OK').click();
  });
});
