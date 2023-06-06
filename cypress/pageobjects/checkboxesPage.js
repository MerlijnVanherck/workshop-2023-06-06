class CheckBoxesPage {
    path = 'checkboxes';
    
    visit() {
      cy.visit(this.path);
    }

    elements = {
      checkbox: () => cy.get('#checkboxes > input'),
    };
  
    clickCheckbox(number) {
      this.elements.checkbox().eq(number - 1).click();
    }
  
    verifycheckboxChecked(number) {
      this.elements.checkbox().eq(number - 1).should('be.checked');
    }
  
    verifycheckboxNotChecked(number) {
        this.elements.checkbox().eq(number - 1).should('not.be.checked');
      }
  }
  
  export default CheckBoxesPage;
  