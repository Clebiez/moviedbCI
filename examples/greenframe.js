async (page) => {
    await page.goto('');
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://greenframe.io/' }*/),
        page.click('text=Our solutions'),
    ]);
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://greenframe.io/' }*/),
        page.click('text=Test your website'),
    ]);
};
