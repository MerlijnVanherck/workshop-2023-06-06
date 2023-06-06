class DropdownListPage {
    path = 'dropdown';
    
    visit() {
      cy.visit(this.path);
    }

    elements = {
      dropdown: () => cy.get('#dropdown'),
    };
  
    verifySelectedValue(value) {
      if (!value)
        this.elements.dropdown().find('option:selected').should('have.value', '');
      else
        this.elements.dropdown().find('option:selected').should('have.value', value);
    }
  
    selectValue(value) {
      this.elements.dropdown().select(value)
    }
  }
  
  export default DropdownListPage;
  