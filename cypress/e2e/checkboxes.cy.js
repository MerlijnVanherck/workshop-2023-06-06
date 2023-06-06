import CheckBoxesPage from "../pageobjects/checkboxesPage";

describe('Checkboxes', () => {
  it('Check and uncheck checkboxes', () => {
    const page = new CheckBoxesPage();
    page.visit();

    page.verifycheckboxNotChecked(1);
    page.verifycheckboxChecked(2);

    page.clickCheckbox(1);
    page.verifycheckboxChecked(1);

    page.clickCheckbox(2);
    page.verifycheckboxNotChecked(2);
  });
});