const { test, expect } = require('@playwright/test'); 

test.describe('Home Page tests', () => {

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000');
  });
  
  test('renders footer', async ({ page }) => {
    await page.waitForSelector('img[alt="Oceans of Terra Logo footer"]');
    const footerLogo = await page.$('img[alt="Oceans of Terra Logo footer"]');
    expect(footerLogo).toBeTruthy();
  });
  
  test('renders Navbar', async ({ page }) => {
    const navbarLogo = await page.$('img[alt="Logo of a Narwhal"]');
    const navbarMenuButton = await page.$('button[id="toggleButton"]');
    expect(navbarLogo).toBeTruthy();
    expect(navbarMenuButton).toBeTruthy();
  });

  test('renders Hero section', async ({ page }) => {
    const video = await page.$('video');
    expect(video).toBeTruthy();
  });


});
