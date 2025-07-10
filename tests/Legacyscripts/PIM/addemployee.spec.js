import { test, expect } from '@playwright/test';

test('Verify Add Employee With Mandatory Details', async ({ page }) => {

    console.log("Launch Url ")

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

     console.log("Enteer the username As  'Admin' ")

    await page.locator("input[type='password']").fill("admin123")

        console.log("Enteer the password As  'admin123' ")

    await page.locator("button[type='submit']").click()

    //Assertion

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


    await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()

    await page.locator("//a[normalize-space(text())='Add Employee']").click()

    await page.locator("//input[@placeholder='First Name']").fill("Krishna")
    
    await page.locator("//input[@placeholder='Last Name']").fill("Reddy")

    await page.locator("//button[@type='submit']").click()

    // expect.soft(page.locator("//h6[text()='RJu123']")).toBeVisible()

    //await expect(page.locator("//label[text()='Employee Full Name']")).toBeVisible()


});
