Feature: Automation Website

  Scenario: #1 
  Register with valid data
   Given the user launch the Chrome application
    When the user open my Account page to register
    Then the user register using "bltkanchav45898@gmail.com" and "Siruser@i987785#"
    
    
    
     Scenario: #2
     Register with Invalid data
   	Given the user launch the Chrome application
    When the user open my Account page to register
    Then the user register using "bltcts55@gmail.com" and "Asvthoraipakkam9877"
     Then Displays an error message that already registered
     
      
	Scenario Outline:#3
 		login with Valid data

    	Given the user launch the Chrome application
    	When the user open my Account page to register
    	When User enters valid login credentials  of set <number> & clicks on login
    	Then click on the login button user go to the next page
    	
    	Examples: 
    		  | number |
     		  |      0 |
    

    Scenario:#4
    shop and add in the Automation website
    Given the user launch the Chrome application
    When the user open my Account page to register
    Then  user login using "user45@gmail.com" and "mohankumar@6045"
    Then  user click on the shop button and click on the add to cart button
    
    
    
     Scenario:#5
  	 Open Demo Suite for registration
    Given the user launch the Chrome application
    When the user open my Account page to register
    Then  user login using "user45@gmail.com" and "mohankumar@6045"
    Then  user click on the Demo site and enters the details
    
    