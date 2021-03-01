import { browser } from 'protractor';
import { expect } from 'chai';

describe('This is the first example of protractor', () => {
  it('should have a title', async () => {
    browser.ignoreSynchronization = true;
    await browser.get('http://www.google.com');
    expect(await browser.getTitle()).to.be.eql('Googla');
  });
});
