class AddRemoveElementsPage {
  path = 'add_remove_elements/';
  
  visit() {
    cy.visit(this.path);
  }

  elements = {
    addElementButton: () => cy.get('#content > .example > button'),
    deleteButton: () => cy.get('#elements').find('button'),
  };

  clickAddElement() {
    this.elements.addElementButton().click();
  }

  verifyNumberOfDeleteButtons(number) {
    return this.elements.deleteButton().should('have.length', number);
  }

  clickDeleteButton() {
    this.elements.deleteButton().first().click();
  }
}

export default AddRemoveElementsPage;
