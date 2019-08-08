package Cucumber;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import ObjectRepository.LoginObjects;
import ObjectRepository.PageObjects;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginFeatureStepDefinition {
	int productCount = 0;
	static WebDriver driver;

	@Given("Navigate to Home Page")
	public void navigateToHomePage() {
		System.setProperty("webdriver.chrome.driver", "C:\\Archita\\Driver\\chromedriver75_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("user enters username and password")
	public void userEntersUsernameAndPassword() {

		PageObjects sign = PageFactory.initElements(driver, PageObjects.class);
		LoginObjects login = PageFactory.initElements(driver, LoginObjects.class);

		sign.signin.click();
		login.username.sendKeys("Lalitha");
		login.password.sendKeys("Password123");
		login.login.click();

	}

	@Then("user logged in successfully")
	public void userLoggedInSuccessfully() {
		System.out.println("User Login Successful");
		//Assert.assertEquals(driver.getTitle(), "Admin Home");
		driver.quit();
	}

	@When("Larry searches below products in search box")
	public void larrySearchesBelowProductsInSearchBox(DataTable arg1) {
		List<String> productsName = arg1.asList(String.class);
		navigateToHomePage();
		userEntersUsernameAndPassword();
		for (String item : productsName) {
			driver.findElement(By.name("products")).sendKeys(item);
			driver.findElement(By.xpath("//input[@value='FIND DETAILS']")).click();
			boolean found = isElementPresent("//a[text()[contains(.,'Add to cart')]]");
			if (found) {
				productCount++;
			}
			driver.findElement(By.xpath("//a[text()[contains(.,'Home')]]")).click();
		}

	}

	@Then("product should be added in the cart is available")
	public void productShouldBeAddedInTheCartIsAvailable() {

		WebElement addedProductsInCart = driver.findElement(By.xpath("//div[@class='shop-menu pull-right']/ul/a/b"));
		int numberOfelements = Integer.parseInt(addedProductsInCart.getText());
		Assert.assertEquals(productCount, numberOfelements);
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void userEntersAnd(String arg1, String arg2) {
		PageObjects sign = PageFactory.initElements(driver, PageObjects.class);
		LoginObjects login = PageFactory.initElements(driver, LoginObjects.class);

		sign.signin.click();
		login.username.sendKeys(arg1);
		login.password.sendKeys(arg2);
		login.login.click();
	}

	public static boolean isElementPresent(String locator) {

		int attempts = 0;
		boolean found = false;
		while (attempts < 2) {
			try {
				WebElement element = driver.findElement(By.xpath(locator));
				element.click();
				found = true;
				break;
			} catch (Exception e) {
			}
			attempts++;
		}
		return found;
	}
}
