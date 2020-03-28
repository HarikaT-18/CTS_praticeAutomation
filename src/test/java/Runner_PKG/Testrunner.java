package Runner_PKG;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src\\main\\resources\\FEATURES",
					glue="STEP_DEF_PKG",
					plugin = {"html:reports/cucumber-html-report",
							"json:reports/cucumber-html-report/jsonreport",
							}
)


public class Testrunner extends AbstractTestNGCucumberTests{
	
}
