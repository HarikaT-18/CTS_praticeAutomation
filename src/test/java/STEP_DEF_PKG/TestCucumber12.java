package STEP_DEF_PKG;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import PAGES.demoRegistration_Page;
import PAGES.homepage;
import PAGES.logout_page;
import PAGES.registration_page;
import PAGES.shop_page;
import Utilites.Get_Excel;
import Utilites.libraries;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestCucumber12 extends libraries {
	
	static final Logger log = Logger.getLogger(TestCucumber12.class);

	protected static WebDriver dr;
	homepage p1;
	registration_page p2;
	logout_page p3;
	shop_page p4;
	demoRegistration_Page p5;
	
  	String eid = null;
  	 String pwd = null;
  	@Given("^the user launch the Chrome application$")
  	public void the_user_launch_the_Chrome_application() throws Throwable {
  		
  		dr=Launch_browser("CHROME","http://practice.automationtesting.in/");
    		dr.manage().window().maximize();
    		dr.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
    		log.info(" Chrome Browser is Successfully launched");
  		
  	}

  	@When("^the user open my Account page to register$")
  	public void the_user_open_my_Account_page_to_register() throws Throwable{
  		homepage p1=new homepage(dr);
  	  	 p1.clk_ac();
  	}

  	@Then("^the user register using \"([^\"]*)\" and \"([^\"]*)\"$")
  	public void the_user_register_using_and(String arg1, String arg2) throws Throwable
  	{
  		p2=new registration_page(dr);
  	  	 p2.registration(arg1,arg2);
  	  	 
  	  	Screenshot();
  	 try
  	 {
  		String errormsg= dr.findElement(By.xpath("//ul[@class='woocommerce-error']//li")).getText();
  		System.out.println(errormsg);
  		
  		 log.info(errormsg);
  	 }
  	 catch(Exception e)
  	 
  	 {  	   logout_page p3=new logout_page(dr);
	   p3.clk_logout();
	   log.info(" Register happenned sucessfully");
  	 }
  		
  	}
  	
  	
  	@When("^User enters valid login credentials  of set (\\d+) & clicks on login$")
	public void user_enters_valid_login_credentials_of_set_clicks_on_login(int arg1)
	{
  		System.out.println("User enters login credentials & clicks on login");
		log.info("Login for valid data");
		Get_Excel G1=new Get_Excel();
  		G1.get_Excel();                                   // getting data from excel 
		int row=arg1;
		String Username=G1.testdata[row][0];
		String Password=G1.testdata[row][1];
		System.out.println(Username+" "+Password);
		 p2=new registration_page(dr);
		p2.login(Username,Password);
  	  Screenshot();
  	  
	}

  	@Then("^user login using \"([^\"]*)\" and \"([^\"]*)\"$")
  	public void user_login_using_and(String arg1, String arg2) throws Throwable{
  
    	  String l = null;
    	  String p = null;
    	  p2=new registration_page(dr);
    	  p2.login(arg1,arg2);
    	  Screenshot();
    	 
    	  log.info("Sucessfull login "); 
    	  
  	}
  	@Then("^click on the login button user go to the next page$")
  	public void click_on_the_login_button_user_go_to_the_next_page() throws Throwable 
  	{
  		System.out.println("Sucessfull login");
  	}
  	
  	@Then("^Displays an error message that already registered$")
  	public void Displays_an_error_message_that_already_registered() throws Throwable 
  	{
  		System.out.println("An account is already registered with your email address. Please login.");
  	}
  	
  	@Then("^user click on the shop button and click on the add to cart button$")
  	public void user_click_on_the_shop_button_and_click_on_the_add_to_cart_button() throws Throwable {
  		 p4=new shop_page(dr);
  	  	  p4.clk_operations();
  	  	 log.info("Items are added to the cart");
  	  	Screenshot();
  	}
  	
  	@Then("^user click on the Demo site and enters the details$")
  	public void user_click_on_the_Demo_site_and_enters_the_details() throws Throwable {
  		p5=new demoRegistration_Page(dr);
    	  p5.demosite("h","t","skdnagar", "asdfgh@gmail.com","1234432255","Zxcvbnml9@","Zxcvbnml9@");
    	  log.info("Registration for demo site is sucessfully done");
    	  Screenshot();
  	}
}
  		
  		
  		
