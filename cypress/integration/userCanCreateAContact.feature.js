describe (' user can create a contact',() => {
  it('test', () => {
    cy.visit('http://localhost:3001')
    cy.get('#add-contact').click()
    cy.get('#name').type('Johan')
    cy.get('#email').type('Johan@hotmail.com')
    cy.get('#companyname').type('Railraiders.io')
    cy.get('#phone').type('0724415305')
    cy.get('#submit').click()
  })

  it ('displays the name of a new contact', () => {
    cy.get('#contact-list').should('contain', 'Johan')
  })

  it('displays the phone number of the new contact', () => {
          cy.get('#contact-list').should('contain', '0724415305')
  })
})

