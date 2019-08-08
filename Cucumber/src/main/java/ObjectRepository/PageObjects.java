package ObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PageObjects {
	
	
		@FindBy(xpath="//a[@href='login.htm']")
		public static WebElement signin;
		
	
}
