describe("Menu tests", () => {
  it("Menu is not in view on page load", () => {
    cy.visit("/")
    /* ==== Generated with Cypress Studio ==== */
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".MenuButton__StyledButton-dHiaxw").click()
    cy.get(".Navigation__Nav-iZcazD").should("be.visible")

    /* ==== End Cypress Studio ==== */
  })
})
