const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to the specified webpage
    await page.goto('https://www.samsung.com/in/smartphones/galaxy-s/');

    // Extract the prices of mobiles
    const prices = await page.evaluate(() => {
        const priceElements = Array.from(document.querySelectorAll('div'));
        return priceElements.map(el => {
            const priceText = el.textContent.match(/₹\s?([\d,]+)/);
            return priceText ? parseInt(priceText[1].replace(/,/g, '')) : null;
        }).filter(price => price !== null);
    });

    // Find the most expensive mobile
    const maxPrice = Math.max(...prices);

    console.log(`The most expensive mobile costs: ₹${maxPrice}`);

    await browser.close();
})();