import { DemoAlertsAnglarjsPage } from './app.po';

describe('demo-alerts-anglarjs App', function() {
  let page: DemoAlertsAnglarjsPage;

  beforeEach(() => {
    page = new DemoAlertsAnglarjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
