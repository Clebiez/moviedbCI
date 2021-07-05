async (page) => {
    // Go to http://localhost:3000/
    await page.goto('#/login');
    await page.waitForTimeout(1000);

    // Click input[name="username"]
    await page.click('input[name="username"]');

    // Fill input[name="username"]
    await page.type('input[name="username"]', 'demo');

    // Click input[name="password"]
    await page.click('input[name="password"]');

    // Fill input[name="password"]
    await page.type('input[name="password"]', 'demo');

    // Click button:has-text("Sign in")
    await page.click('button:has-text("Sign in")');

    await Promise.all([page.waitForNavigation(), page.click('text=PostersPosters')]);

    await page.waitForTimeout(1000);
    await page.click('text=Aerial Coast');

    await page.click('text=Details');

    await page.click('input[name="reference"]');

    await page.type('input[name="reference"]', ' Test');

    await Promise.all([page.waitForNavigation(), page.click('[aria-label="Save"]')]);

    await page.click('input[name="q"]');

    await Promise.all([page.waitForNavigation(), page.type('input[name="q"]', 'Aerial')]);

    await Promise.all([
        page.waitForNavigation(),
        page.click('text=CategoriesCategories'),
    ]);

    await page.waitForTimeout(1000);

    await Promise.all([page.waitForNavigation(), page.click('[aria-label="Edit"]')]);

    await page.click('input[name="name"]');

    // Press a with modifiers
    await page.press('input[name="name"]', 'Control+a');

    await page.type('input[name="name"]', 'Cats');

    await Promise.all([page.waitForNavigation(), page.click('[aria-label="Save"]')]);

    await Promise.all([page.waitForNavigation(), page.click('text=CustomersCustomers')]);

    // Click input[name="q"]
    await page.click('input[name="q"]');

    // Fill input[name="q"]
    await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:3000/#/customers?filter=%7B%22q%22%3A%22H%22%7D&order=DESC&page=1&perPage=25&sort=last_seen' }*/),
        page.type('input[name="q"]', 'H'),
    ]);

    await Promise.all([page.waitForNavigation(), page.click('text=ReviewsReviews')]);

    await page.waitForTimeout(1000);

    await page.check('input[type="checkbox"]');

    await page.click('[aria-label="Delete"]');
    await page.waitForNetworkIdle();
};
