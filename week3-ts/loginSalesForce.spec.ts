import {test } from "@playwright/test";


test('should first', async({page}) => { 
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("demosalesmanager")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")

//Click CRM/SFA (legacy text)
await page.click("#label a")

//Click Leads
await page.click("//li[@class='sectionTabButtonUnselected']//a[contains(@href,'leadsMain')]")

 //Click Create Lead
 await page.click("//a[contains(@href,'createLead')]")

 //Enter company name
 await page.fill("#createLeadForm_companyName","TestCompany")

  //Enter first name
  await page.fill("#createLeadForm_firstName","Pushpalatha")

  //Enter last name
  await page.fill("#createLeadForm_lastName","Raja")

  //Click Create Lead
  await page.click("input[value='Create Lead']")

  //Get the status
  
  console.log(`${await page.locator("#viewLead_statusId_sp").textContent()}`)

  page.close()
  

 })