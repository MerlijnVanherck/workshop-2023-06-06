import AddRemoveElementsPage from "../pageobjects/addRemoveElementsPage"

describe('Add/Remove Elements', () => {
  it('Add and remove buttons', () => {
    const page = new AddRemoveElementsPage();
    page.visit();

    page.verifyNumberOfDeleteButtons(0);

    page.clickAddElement();

    page.verifyNumberOfDeleteButtons(1);

    page.clickAddElement();

    page.verifyNumberOfDeleteButtons(2);

    page.clickDeleteButton();

    page.verifyNumberOfDeleteButtons(1);
  });
});