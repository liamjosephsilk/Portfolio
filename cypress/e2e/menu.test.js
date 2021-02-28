describe("Menu Interactions", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Menu is not in visible on page load", () => {
    cy.visit("/")

    cy.get(".Navigation__Nav-iZcazD").should("not.be.visible")
  })

  it("Menu is visible when menu button clicked", () => {
    cy.get(".MenuButton__StyledButton-dHiaxw").click()
    cy.wait(1000)
    cy.get(".Navigation__Nav-iZcazD").should("be.visible")
  })

  it("Menu is not visible when the close button is clicked", () => {
    cy.get(".MenuButton__StyledButton-dHiaxw").click()
    cy.wait(1000)
    cy.get(".CloseButton__Button-cqLgCK").click()
    cy.wait(1000)
    cy.get(".Navigation__Nav-iZcazD").should("not.be.visible")
  })

  it("Menu should render the correct links", () => {
    cy.get(".MenuButton__StyledButton-dHiaxw").click()
    cy.wait(1000)
    cy.get(".Navigation__LinkList-gtwTss .MenuLink__StyledLink-bUsoZg")
    cy.get(":nth-child(1) > .MenuLink__StyledLink-bUsoZg").should(
      "have.text",
      "Home"
    )
    cy.get(":nth-child(2) > .MenuLink__StyledLink-bUsoZg").should(
      "have.text",
      "About"
    )
    cy.get(":nth-child(3) > .MenuLink__StyledLink-bUsoZg").should(
      "have.text",
      "Articles"
    )

    cy.get(":nth-child(1) > .MenuLink__StyledLink-bUsoZg")
      .should("have.attr", "href")
      .and("include", "/")

    cy.get(":nth-child(2) > .MenuLink__StyledLink-bUsoZg")
      .should("have.attr", "href")
      .and("include", "about")

    cy.get(":nth-child(3) > .MenuLink__StyledLink-bUsoZg")
      .should("have.attr", "href")
      .and("include", "articles")
  })

  it("Menu links should navigate to the correct url", () => {
    // Open menu and click about link
    cy.get(".MenuButton__StyledButton-dHiaxw").click()
    cy.wait(1000)
    cy.get(":nth-child(2) > .MenuLink__StyledLink-bUsoZg").click()
    cy.url().should("eq", "http://localhost:8000/about")

    // Open menu from about page and click articles link
    cy.get(".MenuButton__StyledButton-dHiaxw").click()
    cy.wait(1000)
    cy.get(":nth-child(3) > .MenuLink__StyledLink-bUsoZg").click()
    cy.url().should("eq", "http://localhost:8000/articles")

    // Open menu from articles page and click Home
    cy.get(".MenuButton__StyledButton-dHiaxw").click()
    cy.wait(1000)
    cy.get(":nth-child(1) > .MenuLink__StyledLink-bUsoZg").click()
    cy.url().should("eq", "http://localhost:8000/")
  })
})
