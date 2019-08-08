Feature: Login Functionality
@Login
Scenario Outline: Login with valid credentials
Given Navigate to Home Page
When user enters "<username>" and "<password>"
Then user logged in successfully
Examples:
|username|password   |
|Lalitha |Password123|
|admin   |Password456|

@data-driven
Scenario: 
When Larry searches below products in search box
|Head|
|Travel|
|Laptop|
Then product should be added in the cart is available