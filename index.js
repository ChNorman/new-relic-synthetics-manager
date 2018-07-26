


const $driver = require('selenium-webdriver');
const $http = require('request');

var driver = $driver;
var $browser = new driver.Builder().withCapabilities($driver.Capabilities.chrome()).build();

$browser.waitForElement = function (locatorOrElement, timeoutMsOpt) {
    
    return $browser.wait($driver.until.elementLocated(locatorOrElement), timeoutMsOpt || 5000, 'Timed-out waiting for element to be located using: ' + locatorOrElement);
};

$browser.waitForAndFindElement = function (locatorOrElement, timeoutMsOpt) {
    return $browser.waitForElement(locatorOrElement, timeoutMsOpt)
        .then(function (element) {
            return $browser.wait($driver.until.elementIsVisible(element), timeoutMsOpt || 5000, 'Timed-out waiting for element to be visible using:' + locatorOrElement)
                .then(function () {
                    return element;
                });
        });
};

global.$browser = $browser;
global.$driver = $driver;
global.$http = $http;

module.exports = {
    driver: $driver,
    browser: $browser,
    http: $http
};