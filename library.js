let webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

let driver = new webdriver.Builder().forBrowser("chrome").build();

let url = "https://library-app.firebaseapp.com";
driver.get(url);
driver.findElement(By.css("input"));
// driver.findElement(By.css(".btn-lg"));
driver.findElements(By.css("nav li")).then((arr) => {
  console.log("Found Array of Elements: ", arr);
});
// driver.sleep(10000);
// driver.quit();
