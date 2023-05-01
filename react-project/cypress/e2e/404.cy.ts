describe('404 page', () => {
  it('Visit page with wrong address', () => {
    cy.visit('http://localhost:5173/jgfd');
    cy.contains('Page not found');
    cy.contains('Go to the home page').click;
  });
});
