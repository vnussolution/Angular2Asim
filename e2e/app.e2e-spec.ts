import { Angular2AsimPage } from './app.po';

describe('angular2-asim App', () => {
  let page: Angular2AsimPage;

  beforeEach(() => {
    page = new Angular2AsimPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
