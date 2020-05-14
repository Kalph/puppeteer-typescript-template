const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        defaultViewport: { width: 1920, height: 1080 },
        headless: false, // true = hide screen, false = show screen
        timeout: 60000, // 60 seconds
      });
    const page = await browser.newPage();

    await page.goto('https://news.mt.co.kr/mtview.php?no=2020051316112538227&MT_P');
    await page.waitFor(5000);

    await page.waitFor(1000000);
    await browser.close();
  })();