var assert = require('assert');

describe('frontier page internet menu items', function() {

	it('should be able to click on high speed internet ', function() {
		browser.url('https://internet.frontier.com');
		browser.element("=Internet").click().element("=High Speed Internet")
				.click();
		assert.equal(browser.getUrl(),
				'https://internet.frontier.com/services/');
	});

	it('should be able to click on FiOS internet ', function() {
		browser.url('https://internet.frontier.com');
		browser.element("=Internet").click().element("=FiOS Internet").click();
		assert.equal(browser.getUrl(),
				'https://internet.frontier.com/fios.html');
	});

	it('should be able to click on wireless services ', function() {
		browser.url('https://internet.frontier.com');
		browser.element("=Internet").click().element("=Wireless Services")
				.click();
		assert.equal(browser.getUrl(),
				'https://internet.frontier.com/services/wireless/');
	});

});