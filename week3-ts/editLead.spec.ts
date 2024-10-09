import { test } from "@playwright/test";
test('edit lead', async ({page}) => {
    
// Navigate to the url http://leaftaps.com/opentaps/control/main
await page.goto("http://leaftaps.com/opentaps/control/main")

// Enter the username as ‘Demosalesmanager’
await page.locator("#username").fill("Demosalesmanager")

// Enter the password as ‘crmsfa’
await page.fill("#password","crmsfa")

// Click the Login button
await page.click(".decorativeSubmit")

// Click CRM/SFA
await page.click("#label a")

// Click Leads
await page.click("(//div[@class='x-panel-header'])[2]")

// Click Find Leads
await page.click("//a[contains(@href, 'findLeads')]")

// Enter the first name
await page.fill("(//input[@name='firstName'])[3]","Pushpalatha")

// Click Find Leads button
await page.click("//div[contains(@class,'footer-noborder')]//button")

// Click the first resulting Lead I
await page.click("(//td[contains(@class,'firstName ')])[2]")

// Click Edit
await page.click("(//a[@class='subMenuButton'])[3]")

// Edit Company name
await page.fill("#updateLeadForm_companyName","lti")

// Edit Annual Revenue
await page.fill("#updateLeadForm_annualRevenue","400000")

// Edit Department
await page.fill("#updateLeadForm_departmentName","Information Technology")

// Enter Description
await page.fill("#updateLeadForm_description","Done")

// Click Update
await page.click("input[value='Update']")

// Verify the edited fields using appropriate assertions

})