# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrangeHRM1.spec.js >> first test case
- Location: tests\OrangeHRM1.spec.js:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//input[@placeholder=\'yyyy-dd-mm\'])[1]')

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Eden user
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - button "" [ref=f4e133] [cursor=pointer]
  - generic [ref=f4e135]:
    - generic [ref=f4e139]:
      - generic [ref=f4e140]:
        - generic [ref=f4e141]:
          - heading "Eden user" [level=6] [ref=f4e143]
          - img "profile picture" [ref=f4e146] [cursor=pointer]
        - tablist [ref=f4e147]:
          - tab [ref=f4e148]:
            - link "Personal Details" [ref=f4e149] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab [ref=f4e150]:
            - link "Contact Details" [ref=f4e151] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab [ref=f4e152]:
            - link "Emergency Contacts" [ref=f4e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab [ref=f4e154]:
            - link "Dependents" [ref=f4e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab [ref=f4e156]:
            - link "Immigration" [ref=f4e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab [ref=f4e158]:
            - link "Job" [ref=f4e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab [ref=f4e160]:
            - link "Salary" [ref=f4e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab [ref=f4e162]:
            - link "Tax Exemptions" [ref=f4e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewUsTaxExemptions/empNumber/7
          - tab [ref=f4e164]:
            - link "Report-to" [ref=f4e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab [ref=f4e166]:
            - link "Qualifications" [ref=f4e167] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab [ref=f4e168]:
            - link "Memberships" [ref=f4e169] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=f4e170]:
        - generic [ref=f4e171]:
          - heading "Personal Details" [level=6] [ref=f4e172]
          - separator [ref=f4e173]
          - generic [ref=f4e174]:
            - generic [ref=f4e175]:
              - generic [ref=f4e178]:
                - generic [ref=f4e179]: Employee Full Name*
                - generic [ref=f4e181]:
                  - textbox "First Name" [ref=f4e184]: Eden
                  - textbox "Middle Name" [ref=f4e187]: G
                  - textbox "Last Name" [ref=f4e190]: user
              - generic [ref=f4e193]:
                - generic [ref=f4e194]: Nickname
                - textbox [ref=f4e197]: SuperAdmin
            - separator [ref=f4e198]
            - generic [ref=f4e199]:
              - generic [ref=f4e200]:
                - generic [ref=f4e202]:
                  - generic [ref=f4e203]: Employee Id
                  - textbox [ref=f4e206]: "006"
                - generic [ref=f4e208]:
                  - generic [ref=f4e209]: Other Id
                  - textbox [ref=f4e212]: "123456"
              - generic [ref=f4e213]:
                - generic [ref=f4e215]:
                  - generic [ref=f4e216]: Driver's License Number
                  - textbox [ref=f4e219]: 2026-12-12
                - generic [ref=f4e221]:
                  - generic [ref=f4e222]: License Expiry Date
                  - generic [ref=f4e226]:
                    - textbox "yyyy-mm-dd" [active] [ref=f4e227]: LIC-01234
                    - generic [ref=f4e228] [cursor=pointer]: 
              - generic [ref=f4e229]:
                - generic [ref=f4e231]:
                  - generic [ref=f4e232]: SSN Number
                  - textbox [ref=f4e235]: "17608"
                - generic [ref=f4e237]:
                  - generic [ref=f4e238]: SIN Number
                  - textbox [ref=f4e241]
            - separator [ref=f4e242]
            - generic [ref=f4e243]:
              - generic [ref=f4e244]:
                - generic [ref=f4e246]:
                  - generic [ref=f4e247]: Nationality
                  - generic [ref=f4e251] [cursor=pointer]:
                    - generic [ref=f4e252]: Indian
                    - generic [ref=f4e253]: 
                - generic [ref=f4e256]:
                  - generic [ref=f4e257]: Marital Status
                  - generic [ref=f4e261] [cursor=pointer]:
                    - generic [ref=f4e262]: Married
                    - generic [ref=f4e263]: 
              - generic [ref=f4e265]:
                - generic [ref=f4e267]:
                  - generic [ref=f4e268]: Date of Birth
                  - generic [ref=f4e272]:
                    - textbox "yyyy-mm-dd" [ref=f4e273]: 1997-12-12
                    - generic [ref=f4e274] [cursor=pointer]: 
                - generic [ref=f4e276]:
                  - generic [ref=f4e277]: Gender
                  - generic [ref=f4e279]:
                    - generic [ref=f4e283] [cursor=pointer]:
                      - radio "Male" [checked] [ref=f4e284]
                      - text: Male
                    - generic [ref=f4e289] [cursor=pointer]:
                      - radio "Female" [ref=f4e290]
                      - text: Female
            - separator [ref=f4e292]
            - generic [ref=f4e294]:
              - generic [ref=f4e296]:
                - generic [ref=f4e297]: Military Service
                - textbox [ref=f4e300]
              - generic [ref=f4e302]:
                - generic [ref=f4e303]: Smoker
                - generic [ref=f4e307] [cursor=pointer]:
                  - checkbox " Yes" [ref=f4e308]
                  - generic [ref=f4e309]: 
                  - text: "Yes"
            - separator [ref=f4e311]
            - generic [ref=f4e312]:
              - paragraph [ref=f4e313]: "* Required"
              - button "Save" [ref=f4e314] [cursor=pointer]
        - generic [ref=f4e315]:
          - separator [ref=f4e316]
          - generic [ref=f4e317]:
            - heading "Custom Fields" [level=6] [ref=f4e318]
            - separator [ref=f4e319]
            - generic [ref=f4e320]:
              - generic [ref=f4e322]:
                - generic [ref=f4e324]:
                  - generic [ref=f4e325]: Blood Type
                  - generic [ref=f4e329] [cursor=pointer]:
                    - generic [ref=f4e330]: A+
                    - generic [ref=f4e331]: 
                - generic [ref=f4e334]:
                  - generic [ref=f4e335]: Test_Field
                  - textbox [ref=f4e338]: "445"
              - separator [ref=f4e339]
              - button "Save" [ref=f4e341] [cursor=pointer]
        - generic [ref=f4e342]:
          - separator [ref=f4e343]
          - generic [ref=f4e345]:
            - heading "Attachments" [level=6] [ref=f4e346]
            - button " Add" [ref=f4e347] [cursor=pointer]:
              - generic [ref=f4e348]: 
              - text: Add
          - generic [ref=f4e349]:
            - separator [ref=f4e350]
            - generic [ref=f4e351]: (1) Record Found
          - table [ref=f4e354]:
            - rowgroup [ref=f4e355]:
              - row [ref=f4e356]:
                - columnheader "" [ref=f4e357]:
                  - generic [ref=f4e359] [cursor=pointer]:
                    - checkbox "" [ref=f4e360]
                    - generic [ref=f4e361]: 
                - columnheader "File Name" [ref=f4e363]
                - columnheader "Description" [ref=f4e364]
                - columnheader "Size" [ref=f4e365]
                - columnheader "Type" [ref=f4e366]
                - columnheader "Date Added" [ref=f4e367]
                - columnheader "Added By" [ref=f4e368]
                - columnheader "Actions" [ref=f4e369]
            - rowgroup [ref=f4e370]:
              - row [ref=f4e372]:
                - cell "" [ref=f4e373]:
                  - generic [ref=f4e376] [cursor=pointer]:
                    - checkbox "" [ref=f4e377]
                    - generic [ref=f4e378]: 
                - cell "test.png" [ref=f4e380]
                - cell "test" [ref=f4e382]
                - cell "53.16 kB" [ref=f4e384]
                - cell "image/png" [ref=f4e386]
                - cell "2024-02-06" [ref=f4e388]
                - cell "Admin" [ref=f4e390]
                - cell [ref=f4e392]:
                  - generic [ref=f4e393]:
                    - button "" [ref=f4e394] [cursor=pointer]
                    - button "" [ref=f4e396] [cursor=pointer]
                    - button "" [ref=f4e398] [cursor=pointer]
    - generic [ref=f4e400]:
      - paragraph [ref=f4e401]: OrangeHRM OS 5.9
      - paragraph [ref=f4e402]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e403] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | var {test}=require ('@playwright/test');
  2  | test("first test case",async function({page}){
  3  | 
  4  | await page. goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  5  | 
  6  | await page .locator("//input[@name='username']").fill("Admin");
  7  | await page .locator("//input[@name='password']").fill("admin123");
  8  | await page .locator ("//button[@type='submit']").click();
  9  | await page .locator ("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[6]").click();
  10 | 
  11 | 
  12 | await page .locator("//input[@name='firstName']").fill("VIJAY");
  13 | await page .locator("//input[@name='middleName']").fill("PADRE");
  14 | await page .locator ("//input[@name='lastName']").fill("VIJAY123");
  15 | await page .locator ("(//input[@class='oxd-input oxd-input--active'])[2]").fill("TestNickName"); //Nickname
  16 | await page.waitForTimeout(2000);
  17 | 
  18 | await page .locator ("//div[@class='oxd-form-row']//div[3]//div[1]//div[1]//div[2]//input[1]").fill("17608"); //emp ID
  19 | await page .locator ("(//input[@class='oxd-input oxd-input--active'])[4]").fill("123456");//otherid
  20 | await page .locator ("(//input[@class='oxd-input oxd-input--active'])[5]").fill("LIC-01234");// Drivers licence no
  21 | await page.waitForTimeout(2000);
  22 | 
> 23 | await page .locator ("(//input[@placeholder='yyyy-dd-mm'])[1]").fill("2023-18-10");// lic exp date 
     |                                                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  24 | await page.waitForTimeout(2000);
  25 | 
  26 | await page .locator ("//div[@class='oxd-form-row']//div[3]//div[1]//div[1]//div[2]//input[1]").fill("SSN-0123");// SSN NO
  27 | await page .locator ("//div[@class='oxd-form-row']//div[3]//div[1]//div[1]//div[2]//input[1]").fill("SIN-009");// SIN NO
  28 | await page.waitForTimeout(2000);
  29 | 
  30 | await page .locator ("(//input[@class='oxd-input oxd-input--active'])[9]").click();
  31 | await page.waitForTimeout(3000);
  32 | 
  33 | await page.keyboard.press("Tab");
  34 | await page.keyboard.press("ArrowDown");
  35 | await page.keyboard.press("Enter");
  36 | 
  37 | 
  38 | });
  39 | 
  40 |   //  npx playwright test tests/orangeHRM1.spec.js --headed
```