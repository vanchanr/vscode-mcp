const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Navigate to the specified webpage
    await page.goto('https://www.samsung.com/in/smartphones/galaxy-s/');

    // Capture the structured accessibility snapshot
    const accessibilitySnapshot = await page.accessibility.snapshot();

    // Save the snapshot to a JSON file
    fs.writeFileSync('accessibilitySnapshot.json', JSON.stringify(accessibilitySnapshot, null, 2));

    console.log('Accessibility snapshot saved to accessibilitySnapshot.json');

    await browser.close();
})();