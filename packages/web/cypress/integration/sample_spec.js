describe('My first test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('Index page', () => {
  it('Visits index page of site', () => {
    cy.visit('/')
    cy.contains('Midpoint')
    cy.contains('Home')
    cy.get('main').contains('Home')
  })
})
