var assert = require('assert');

describe(
		'frontier page main navigation',
		function() {

			it(
					'should navigate to business page on clicking business link',
					function() {
						browser.url('https://internet.frontier.com');
						browser
								.element(
										'body > header > div.show-for-medium-up > nav > div > div > ul > li:nth-child(1) > a')
								.click();
						var title = browser.getTitle();
						assert
								.equal(title,
										'Business Internet |855-858-2984 | Frontier Business');
					});

			it(
					'should navigate to existing customers page on clicking existing customers link',
					function() {
						browser.url('https://internet.frontier.com');
						browser
								.element(
										'body > header > div.show-for-medium-up > nav > div > div > ul > li:nth-child(2) > a')
								.click();
						var title = browser.getTitle();
						assert
								.equal(title,
										'Frontier Customer Service | Call to Upgrade Today!');
					});

			it(
					'should navigate to my account page on clicking my account link',
					function() {
						browser.url('https://internet.frontier.com');
						browser
								.element(
										'body > header > div.show-for-medium-up > nav > div > div > ul > li:nth-child(3) > a')
								.click();
						var title = browser.getTitle();
						assert
								.equal(title,
										'Sign Into Your Frontier account | Frontier.com');
					});

			it(
					'should navigate to shoping cart page on clicking shop online',
					function() {
						browser.url('https://internet.frontier.com');
						browser.element('#js-track-nav-shop-online').click();
						browser.waitForExist('//*[@id="address"]', 5000);
						browser.element('//*[@id="address"]').setValue(
								'14215 Ballantyne Corporate Pl');
						browser
								.element(
										'//*[@id="router"]/section/div[3]/div/div[1]/button')
								.click();
						browser.waitForExist(
								'//*[@id="router"]/section/div[1]/div/div/h1',
								8000);
						assert
								.equal(browser.getUrl(),
										'https://internet.frontier.com/cart/unserviceable');
					});

		});