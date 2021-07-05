async (page) => {
    await page.goto();
    // Click text=Actualités
    await Promise.all([page.waitForNavigation(), page.click('text=Actualités')]);
    // Click text=Deuxième confinement
    await Promise.all([
        page.waitForNavigation(),
        page.click('text=Deuxième confinement'),
    ]);
    // assert.equal(page.url(), 'https://laneuvelotte.fr/2020/11/deuxieme-confinement/');
    // Click text=Voir tous les articles par Yann GENSOLLEN
    await Promise.all([
        page.waitForNavigation(),
        page.click('text=Voir tous les articles par Yann GENSOLLEN'),
    ]);
};
