import { chromium, firefox, test } from "@playwright/test";
import { checkPrime } from "crypto";
test('launch the browser', async() => {  
   //-----launch the browser--------------

   const browser= await firefox.launch({headless:false});
   //const browser1=await chromium.launch();

   const context= await browser.newContext();
   //const context1= await browser1.newContext();
   
   const page = await context.newPage();
   //const page1 = await context1.newPage();
   
   await page.goto("https://www.flipkart.com");
   //await page1.goto("https://www.redbus.in/");

 //-----to get the title and url--------------

   const flipkartTitle = await page.title();
   //const redbusTitle = await page1.title();

   console.log(`Title of the E-commerce application is : ${flipkartTitle}`);
   //console.log(`Title of the ticket booking application is : ${redbusTitle}`);

   const urlName=await page.url();
   //console.log(`E-commerce Url is: ${urlName}`);

  // const urlName1=await page1.url();
  // console.log(`Redbus Url is: ${urlName1}`);
   
  page.close()
   
})