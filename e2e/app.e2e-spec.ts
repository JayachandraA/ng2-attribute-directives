import { Ng2AttributeDirectivesPage } from './app.po';

describe('ng2-attribute-directives App', () => {
  let page: Ng2AttributeDirectivesPage;

  beforeEach(() => {
    page = new Ng2AttributeDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
