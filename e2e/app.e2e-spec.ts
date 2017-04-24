import { MyFirstComponentPage } from './app.po';

describe('my-first-component App', () => {
  let page: MyFirstComponentPage;

  beforeEach(() => {
    page = new MyFirstComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
