class HorizontalSliderPage {
    path = 'horizontal_slider';
    
    visit() {
      cy.visit(this.path);
    }

    elements = {
      slider: () => cy.get('.sliderContainer > input'),
      number: () => cy.get('#range'),
    };
  
    verifyNumber(number) {
      this.elements.number().should('have.text', number);
    }
  
    stepLeft() {
      this.elements.slider().focus();
      cy.type('{leftArrow}');
    }
  
    stepRight() {
      this.elements.slider().type('{rightArrow}');
    }
  }
  
  export default HorizontalSliderPage;
  