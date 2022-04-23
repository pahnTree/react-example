beforeEach(() => {
  cy.visit('/')
  cy.injectAxe()

  cy.configureAxe({
    reporter: 'v2',
    iframes: true
  })
})

describe('Index page', () => {
  it('Visits index page of site', () => {
    cy.checkA11y()
    cy.contains('Midpoint')
    cy.contains('Home')
    cy.get('main').contains('Home')
  })
})
