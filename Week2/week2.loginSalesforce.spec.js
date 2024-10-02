import { chromium, test } from "@playwright/test";
test('login salesforce', async () => { 
    const browser= await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://login.salesforce.com/");
    const url= page.url();
    console.log(url);
    const title = await page.title();
    console.log(title);
    
    
 })

