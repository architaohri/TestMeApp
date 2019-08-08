package ObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SearchObject {

	@FindBy(how=How.XPATH, using ="//div[@class='container']//a")
	public static WebElement addToCart;
	
	@FindBy(name="password")
	public static WebElement home;
}
