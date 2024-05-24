Feature: Positive tests with cucumber (Sauce Labs - Swag Labs)

@testUiPositiveCucumber
  Scenario Outline: Successful login
    Given access home page
    When do login with "<username>" and "<password>"
    Then see the inventory page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
      | visual_user   | secret_sauce |

  Scenario Outline: Successful do a order
    Given access home page
    When do login with "<username>" and "<password>"
    Then see the inventory page
    And add to cart the "<product>" that contains the "<value>"
    And go to cart page and click in checkout button
    And in checkout step 1 page to fill the fields "<firstName>", "<lastName>" and "<postalCode>"
    And overview the order in checkout step 2 and click in finish button
    Then continue to the checkout complete page and finish the order with success

    Examples:
      | username      | password     | product                  | value  | firstName | lastName     | postalCode |
      | standard_user | secret_sauce | Sauce Labs Backpack      | $29.99 | Mr.       | Test Cypress |   99032060 |
      | standard_user | secret_sauce | Sauce Labs Fleece Jacket | $49.99 | Sr.       | Test Cypress |   99032123 |
