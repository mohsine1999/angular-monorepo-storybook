describe('ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=taskcomponent--primary&args=task;')
  );
  it('should render the component', () => {
    cy.get('angular-workspace-task').should('exist');
  });
});
