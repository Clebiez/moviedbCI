async (page) => {
    // Go to https://nextjs.org/
    await page.goto();
    // Click text=Read Case Study
    await Promise.all([
        page.waitForNavigation(),
        page.click('text=Read Case Study'),
    ]);
    // Click text=Learn More
    await Promise.all([
        page.waitForNavigation(),
        page.click('text=Learn More'),
    ]);
    // Click text=Start Now →
    await Promise.all([
        page.waitForNavigation(),
        page.click('text=Start Now →'),
    ]);
    // Click a[role="button"]:has-text("Next")
    await Promise.all([page.click('a[role="button"]:has-text("Next")')]);
    // Click a[role="button"]:has-text("Next")
    await Promise.all([page.click('a[role="button"]:has-text("Next")')]);
    // Click a[role="button"]:has-text("Next Lesson")
    await Promise.all([page.click('a[role="button"]:has-text("Next Lesson")')]);
    // Click text=Start Now →
    await Promise.all([page.click('text=Start Now →')]);
};
