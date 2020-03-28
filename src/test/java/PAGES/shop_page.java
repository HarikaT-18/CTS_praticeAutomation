package PAGES;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Utilites.libraries;

public class shop_page extends libraries
{
	WebDriver dr;  //Declaring WebDriver
	WebElement we; //Declaring WebElement
	
	
	public shop_page(WebDriver dr)  //creating constructor for page_4
	{
		this.dr=dr;
	
	}
	
	 By shop=By.xpath("//ul[@id='main-nav']//li[1]//a"); //xpath for shop
	 By productCategory=By.xpath("//ul[@class='product-categories']//li[4]//a");//xpath for productcategory
	 By addProduct=By.xpath("//a[@rel='nofollow']");//xpath for selecting one of the product in the list
	// By h=By.xpath("//ul[@id='main-nav']//li[5]//a");
	 
	 public void clk_shop()
	 {
		 we=clickable(shop,50); //Adding webdriver waits for clicking shop
		 we.click();
	 }
	 public void clk_productcategory()
	 {
		 we=clickable(productCategory,50);//Adding webdriver waits for clicking productcategory
		 we.click();
	 }
	 public void clk_addProduct()
	 {
		 we=clickable(addProduct,50); //Adding webdriver waits for selecting one of the product
		 we.click();
	 }
//	 public void h1()
//	 {
//		 we=l.clickable(h,50);
//		 we.click();
//	 }
	 
	 public void clk_operations()  //Creating method for performing above methods
	 {
		 this.clk_shop();
		 this.clk_productcategory();
		 this.clk_addProduct();
		// this.h1();
		 
	 }

}
