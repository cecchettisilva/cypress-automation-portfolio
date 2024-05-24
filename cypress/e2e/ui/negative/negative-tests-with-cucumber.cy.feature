Feature: Negative tests with cucumber (Sauce Labs - Swag Labs)

@testUiNegativeCucumber
  Scenario Outline: Unsuccessful login with wrong password
    Given access home page
    When do login with "<username>" and "<password>"
    Then see error "<message>"

    Examples:
      | username        | password     | message                                                                   |
      | standard_user   | 123456       | Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |

  Scenario Outline: Unsuccessful order when no server is unavailable to handle the request
    Given access home page
    When do login with "<username>" and "<password>"
    Then see the inventory page
    And add to cart the "<product>" that contains the "<value>"
    And go to cart page and click in checkout button
    And in checkout step 1 page to fill the fields "<firstName>", "<lastName>" and "<postalCode>"
    And overview the order in checkout step 2 and click in finish button
    Then checkout was not completed the order because finish order service is not available

    Examples:
      | username   | password     | product                  | value  | firstName | lastName     | postalCode |
      | error_user | secret_sauce | Sauce Labs Backpack      | $29.99 | Mr.       | Test Cypress |   99032060 |
      | error_user | secret_sauce | Sauce Labs Fleece Jacket | $49.99 | Sr.       | Test Cypress |   99032123 |
