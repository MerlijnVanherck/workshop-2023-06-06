import DropdownListPage from "../pageobjects/dropdownListPage";

describe('Dropdown List', () => {
  it('Select options in dropdown', () => {
    const page = new DropdownListPage();
    page.visit();

    page.verifySelectedValue('');

    page.selectValue(1);
    page.verifySelectedValue(1);

    page.selectValue(2);
    page.verifySelectedValue(2);
  });
});