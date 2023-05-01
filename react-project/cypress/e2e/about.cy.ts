describe('About page', () => {
  it('Visit About us page', () => {
    cy.visit('http://localhost:5173/about');
    cy.url().should('include', '/about');
  });
});
