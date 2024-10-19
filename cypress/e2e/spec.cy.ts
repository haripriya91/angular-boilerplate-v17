describe('Tariff Application Test', () => {
  beforeEach(() => {
    // Visit the tariff page
    cy.visit('http://localhost:4200/'); // replace with the actual URL
  });

 /*  it('should load the tariff application page successfully', () => {
    // Verify if the page loads correctly
    cy.get('h1').should('contain', 'Tariff Application'); // Example header check
  }); */

  it('should display available tariffs', () => {
    // Check if tariffs are displayed
    cy.get('.tariff-list').should('exist'); // Adjust selectors as per your page structure
  });

  it('should allow selecting a tariff', () => {
    // Select a tariff
    cy.get('.tariff-card').first().click(); 
    cy.get('.tariff-card').should('exist'); // Verify that tariff is selected
  });
});