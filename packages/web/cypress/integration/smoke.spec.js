
describe('a11y', () => {
  describe('every page is accessible with a11y', () => {
    it('using site pages list', () => {
      const pages = [
        '/',
        '/login',
        '/logout'
      ]
      pages.forEach(page => {
        cy.visit(page)
        testA11y()
      })
    })
  })
})

function testA11y () {
  cy.injectAxe()
  const viewports = [
    [1920, 1080],
    'iphone-4', 'iphone-5', 'iphone-6', 'iphone-6+', 'iphone-x', 'iphone-xr',
    'ipad-mini', 'ipad-2'
  ]
  viewports.forEach(size => {
    if (Cypress._.isArray(size)) {
      cy.viewport(size[0], size[1])
      cy.checkA11y()
    } else {
      ['portrait', 'landscape'].forEach(orientation => {
        cy.viewport(size, orientation)
        cy.checkA11y()
      })
    }
  })
}
