import {test  } from "@playwright/test";
test('create new account', async({page}) => { 
     //Navigate to the url https://login.salesforce.com/
    await page.goto("https://login.salesforce.com/")

   page.setDefaultTimeout(5000)
// Enter username using getByLabel
await page.getByLabel("Username").fill("pushpalatha@testleaf.com")
// Enter password using getByLabel
await page.getByLabel("Password").fill("Rajameghavarnika6")
// Click Login
await page.click("#Login")
// Verify the title and url of the page using appropriate assertions
console.log(await page.title());
console.log(await page.url());
// Click App Launcher using the class locator
await page.click(".slds-icon-waffle")
// Click View All using getByText
await page.getByText("View All").click()
// Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
await page.getByPlaceholder("Search apps or items...").fill("service")
// Click Service using index based XPath
await page.click("(//a[@class='slds-text-heading_small'])[1]")
// Click Accounts using attribute based CSS selector
await page.locator("a[title='Accounts']").click()
// Click New using getByRole
await page.waitForTimeout(5000);
await page.getByRole('link', { name: 'New' }).click

// Enter Account name using attribute based CSS selector
await page.locator("inp[name='Name']").fill("pushpa")
// Click Save button using XPath
await page.click("//button[@name='SaveEdit']")
// Verify the toast message display

console.log(await page.locator("div[class='slds-list--inline']").innerText());

 })

