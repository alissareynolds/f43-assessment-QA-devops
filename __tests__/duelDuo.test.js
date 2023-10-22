const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("draw button displays div = choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.sleep(3000);
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(3000);
    let choices = await driver.findElements(By.id("choices"));
    expect(choices.length > 0).toBeTruthy();
    await driver.sleep(3000);
  });

  test("Add to Duo button displays the div with id = player-duo", async () => {
    await driver.get("http://localhost:8000");
    await driver.sleep(5000);
    await driver.findElement(By.id("draw")).click();
    await driver.sleep(5000);
    await driver.findElement(By.className("bot-btn")).click();
    await driver.sleep(5000);
    let playerDuo = await driver.findElements(By.id("player-duo"));
    expect(playerDuo.length > 0).toBeTruthy();
  });

  // test('removed from duo makes the bot go back to choices', async () => {
  //   await driver.get("http://localhost:8000");
  //   await driver.sleep(3000);
  //   await driver.findElement(By.id("draw")).click();
  //   await driver.sleep(3000);
  //   await driver.findElement(By.className("bot-btn")).click();
  //   await driver.sleep(3000);
  //   await driver.findElements(By.id("player-duo"));
  //   await driver.sleep(3000);
  //   await driver.findElement(By.linkText('Remove from Duo')).click();
  //   await driver.sleep(3000);

  // });
});