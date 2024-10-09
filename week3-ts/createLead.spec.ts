import { test } from "@playwright/test";

test('create lead', async({page}) => { 


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

// Click Create Lead
await page.click("(//ul[@class='shortcuts']//a)[2]")

// Fill the Company Name
await page.fill("#createLeadForm_companyName","lt")

// Fill the First Name
await page.fill("#createLeadForm_firstName","Pushpalatha")

// Fill the Last Name
await page.fill("#createLeadForm_lastName","Raja")

// Fill the Salutation
await page.fill("[name='personalTitle']","hi")

// Fill the Title
await page.fill("#createLeadForm_generalProfTitle","test")
// Fill the Annual Revenue
await page.fill("#createLeadForm_annualRevenue","1000000")
// Fill the Department
await page.fill("#createLeadForm_departmentName","IT")
// Fill the Phone number
await page.fill("#createLeadForm_primaryPhoneNumber","9876543210")
// Click Create Lead button
await page.click("//input[@value='Create Lead']")
// Verify the company name, first name, last name and the status
let companyName = page.locator("#viewLead_companyName_sp")
let fName=page.locator("#viewLead_firstName_sp")
let lName=page.locator("#viewLead_lastName_sp")
let status=page.locator("#viewLead_statusId_sp")
console.log("Company Name: ",await companyName.innerText());
console.log("First Name: ",await fName.innerText());
console.log("Last Name: ",await lName.textContent());
console.log("Status: ",await status.textContent());

// Get the page title
console.log("Page title is:",await page.title());

await page.close()


 })