let webdriver = require("selenium-webdriver");

let driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("https://google.com");
