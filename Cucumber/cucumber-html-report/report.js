$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Navigate to Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "login-functionality;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ],
      "line": 9,
      "id": "login-functionality;login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "Password456"
      ],
      "line": 10,
      "id": "login-functionality;login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Navigate to Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Lalitha\" and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDefinition.navigateToHomePage()"
});
formatter.result({
  "duration": 9512151100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalitha",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 27
    }
  ],
  "location": "LoginFeatureStepDefinition.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 1815279600,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefinition.userLoggedInSuccessfully()"
});
formatter.result({
  "duration": 820125500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Navigate to Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters \"admin\" and \"Password456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeatureStepDefinition.navigateToHomePage()"
});
formatter.result({
  "duration": 7261543500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "Password456",
      "offset": 25
    }
  ],
  "location": "LoginFeatureStepDefinition.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 1270103800,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeatureStepDefinition.userLoggedInSuccessfully()"
});
formatter.result({
  "duration": 751336500,
  "status": "passed"
});
});