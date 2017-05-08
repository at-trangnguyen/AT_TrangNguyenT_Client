import { AtWebsitePage } from './app.po';

describe('at-website App', () => {
  let page: AtWebsitePage;

  beforeEach(() => {
    page = new AtWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
