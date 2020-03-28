$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("automation_Practice.feature");
formatter.feature({
  "line": 1,
  "name": "Automation Website",
  "description": "",
  "id": "automation-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "#1",
  "description": "Register with valid data",
  "id": "automation-website;#1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user open my Account page to register",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user register using \"bltkanchav98@gmail.com\" and \"Siruser@i987785#\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCucumber12.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 16383648200,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.the_user_open_my_Account_page_to_register()"
});
formatter.result({
  "duration": 1402247800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bltkanchav98@gmail.com",
      "offset": 25
    },
    {
      "val": "Siruser@i987785#",
      "offset": 54
    }
  ],
  "location": "TestCucumber12.the_user_register_using_and(String,String)"
});
formatter.result({
  "duration": 42378390300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "#2",
  "description": "Register with Invalid data",
  "id": "automation-website;#2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "the user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user open my Account page to register",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user register using \"bltcts55@gmail.com\" and \"Asvthoraipakkam9877\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Displays an error message that already registered",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCucumber12.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 14880144700,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.the_user_open_my_Account_page_to_register()"
});
formatter.result({
  "duration": 1863313800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bltcts55@gmail.com",
      "offset": 25
    },
    {
      "val": "Asvthoraipakkam9877",
      "offset": 50
    }
  ],
  "location": "TestCucumber12.the_user_register_using_and(String,String)"
});
formatter.result({
  "duration": 7783887200,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.Displays_an_error_message_that_already_registered()"
});
formatter.result({
  "duration": 109100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "#3",
  "description": "login with Valid data",
  "id": "automation-website;#3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user open my Account page to register",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters valid login credentials  of set \u003cnumber\u003e \u0026 clicks on login",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "click on the login button user go to the next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "automation-website;#3;",
  "rows": [
    {
      "cells": [
        "number"
      ],
      "line": 28,
      "id": "automation-website;#3;;1"
    },
    {
      "cells": [
        "0"
      ],
      "line": 29,
      "id": "automation-website;#3;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "#3",
  "description": "login with Valid data",
  "id": "automation-website;#3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "the user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user open my Account page to register",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters valid login credentials  of set 0 \u0026 clicks on login",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "click on the login button user go to the next page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCucumber12.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 19019270400,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.the_user_open_my_Account_page_to_register()"
});
formatter.result({
  "duration": 1652844200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "TestCucumber12.user_enters_valid_login_credentials_of_set_clicks_on_login(int)"
});
formatter.result({
  "duration": 9153404500,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.click_on_the_login_button_user_go_to_the_next_page()"
});
formatter.result({
  "duration": 93100,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "#4",
  "description": "shop and add in the Automation website",
  "id": "automation-website;#4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "the user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "the user open my Account page to register",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user login using \"user45@gmail.com\" and \"mohankumar@6045\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user click on the shop button and click on the add to cart button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCucumber12.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 15003224800,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.the_user_open_my_Account_page_to_register()"
});
formatter.result({
  "duration": 2181383600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user45@gmail.com",
      "offset": 18
    },
    {
      "val": "mohankumar@6045",
      "offset": 41
    }
  ],
  "location": "TestCucumber12.user_login_using_and(String,String)"
});
formatter.result({
  "duration": 6375608100,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.user_click_on_the_shop_button_and_click_on_the_add_to_cart_button()"
});
formatter.result({
  "duration": 9209990200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "#5",
  "description": "Open Demo Suite for registration",
  "id": "automation-website;#5",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "the user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "the user open my Account page to register",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user login using \"user45@gmail.com\" and \"mohankumar@6045\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user click on the Demo site and enters the details",
  "keyword": "Then "
});
formatter.match({
  "location": "TestCucumber12.the_user_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 15851848200,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.the_user_open_my_Account_page_to_register()"
});
formatter.result({
  "duration": 1180925900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user45@gmail.com",
      "offset": 18
    },
    {
      "val": "mohankumar@6045",
      "offset": 41
    }
  ],
  "location": "TestCucumber12.user_login_using_and(String,String)"
});
formatter.result({
  "duration": 4842406100,
  "status": "passed"
});
formatter.match({
  "location": "TestCucumber12.user_click_on_the_Demo_site_and_enters_the_details()"
});
formatter.result({
  "duration": 8934789600,
  "status": "passed"
});
});