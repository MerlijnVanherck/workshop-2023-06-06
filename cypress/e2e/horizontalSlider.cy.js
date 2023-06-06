import HorizontalSliderPage from "../pageobjects/horizontalSliderPage";

describe('Horizontal Slider', () => {
  it('Slider has initial value 0', () => {
    const page = new HorizontalSliderPage();
    page.visit();

    page.verifyNumber(0);
  });

  it('Slider can step right', () => {
    const page = new HorizontalSliderPage();
    page.visit();

    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.verifyNumber(2);

    page.stepRight();
    page.verifyNumber(2.5);
  });
  
  it('Slider can step left', () => {
    const page = new HorizontalSliderPage();
    page.visit();

    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.verifyNumber(2);

    page.stepLeft();
    page.verifyNumber(1.5);
  });
  
  it('Slider has minimum value 0', () => {
    const page = new HorizontalSliderPage();
    page.visit();

    page.setSlider(0);
    page.verifyNumber(0);

    page.stepLeft();
    page.verifyNumber(0);
  });
  
  it('Slider has maximum value 5', () => {
    const page = new HorizontalSliderPage();
    page.visit();

    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.stepRight();
    page.verifyNumber(5);

    page.stepRight();
    page.verifyNumber(5);
  });
});