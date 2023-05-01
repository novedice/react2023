describe('About page', () => {
  it('Visit About us page', () => {
    cy.visit('http://localhost:5173');
    cy.contains('about us').click();
    cy.url().should('include', '/about');
  });
});
