var assert = require('assert');

describe(
		'Login Page',
		function() {

			it(
					'should not let you log in',
					function() {
						browser
								.url('https://frontier.com/login?target=2f6163636f756e74');
						console.log('Opened url');
						// issue with chromedriver because of multiple elements
						// with same id on the html page related to Sign in
						// so commented temporarily, need to fix the page issue
						// with duplicate elements
						// browser.setValue('#fid-login-inline-username',
						// 'invalid@user.com');
						// browser.setValue('#fid-login-inline-password',
						// 'invalidpwd');
						browser
								.element(
										'body > section > div:nth-child(5) > div > div > div > div > div > div:nth-child(8) > div > div > div.form-group.row > div:nth-child(2)')
								.click();
						var pageUrl = browser.getUrl();
						console.log(pageUrl);
						console.log(browser.getTitle());
						assert
								.equal(pageUrl,
										'https://frontier.com/login?target=2f6163636f756e74');
					});

			it(
					'should let you log in',
					function() {
						browser
								.url('https://frontier.com/login?target=2f6163636f756e74');
						console.log('Opened url');
						// issue with chromedriver because of multiple elements
						// with same id on the html page related to Sign in
						// so commented temporarily, need to fix the page issue
						// with duplicate elements
						// browser.setValue('#fid-login-inline-username',
						// 'valid@user.com');
						// browser.setValue('#fid-login-inline-password',
						// 'validpwd');
						browser
								.element(
										'body > section > div:nth-child(5) > div > div > div > div > div > div:nth-child(8) > div > div > div.form-group.row > div:nth-child(2)')
								.click();
						var pageUrl = browser.getUrl();
						console.log(pageUrl);
						console.log(browser.getTitle());
						// this should actually take you to signed in page
						// whichever it is, for now this will fail as we can't
						//get past the input text error because of the duplicate id's issue
						assert
								.notEqual(pageUrl,
										'https://frontier.com/login?target=2f6163636f756e74');
					});

		});