async (page) => {
    await page.goto();
    await page.waitForTimeout(5000);
    await page.click('text="Luca"');
    await page.waitForTimeout(3000);
};
