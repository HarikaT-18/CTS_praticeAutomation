package PAGES;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Utilites.libraries;

public class logout_page extends libraries
{
	WebDriver dr; //Declaring webdriver
	WebElement we;//declaring webelement
	
	
	public logout_page(WebDriver dr) //creating construcor for page_3
	{
		this.dr=dr;
		
	}
	
	By l_out=By.xpath("//nav[@class='woocommerce-MyAccount-navigation']//ul//li[6]//a"); //xpath for logout
   
	
	public void logout()
	{
		we=clickable(l_out, 100); //Adding webdriver waits for logout
		we.click();
	}
	
public void clk_logout() //creating method for clicking logout button
{
	this.logout();
}
	
}
