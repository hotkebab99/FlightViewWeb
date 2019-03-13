import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFlightsDiv() {
    return element.all(by.css('div.card'));
  }
}
