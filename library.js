let webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

let url = "https://library-app.firebaseapp.com";

let driver = new webdriver.Builder().forBrowser("chrome").build();
driver
  .manage()
  .window()
  .setRect({ width: 1024, height: 600 })
  .then(() => {
    driver.get(url);
    driver.findElements(By.css(".nav-link")).then((arr) => {
      Array.from(arr).map((item) =>
        item.getText().then((data) => console.log(data))
      );
    });
  });
