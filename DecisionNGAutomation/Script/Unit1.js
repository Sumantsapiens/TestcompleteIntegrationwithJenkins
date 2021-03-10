function CreateFt2()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("http://bdmsuat8:8854/enterprise/index.html#/tasks/8142060/factTypes");
  Project.Variables.CreateFTTest1.Reset();
 
  for(; !Project.Variables.CreateFTTest1.IsEOF();)
  {
     aqTestCase.Begin(Project.Variables.CreateFTTest1.Value("TestCaseName"));
    //Clicks the 'buttonAddFactType' button.
    Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
    //Clicks the 'textboxName' control.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
    //Sets the text KeywordTests.CreateFt2.Variables.CreateFTTest("FTName") in the 'textboxName' text editor.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(Project.Variables.CreateFTTest1.Value("FTName"));
    //Clicks the 'textareaDescription' control.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Click();
    //Enters KeywordTests.CreateFt2.Variables.CreateFTTest("Description") in the 'textareaDescription' object.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys(Project.Variables.CreateFTTest1.Value("Description"));
    //Clicks the 'textnodeMultipleValues' control.
    Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeMultipleValues.Click();
    //Clicks the 'textbox' control.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.Click();
    //Sets the text KeywordTests.CreateFt2.Variables.CreateFTTest("DataType") in the 'textbox' text editor.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.SetText(Project.Variables.CreateFTTest1.Value("DataType"));
    //Clicks the 'textbox2' control.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
    //Sets the text KeywordTests.CreateFt2.Variables.CreateFTTest("Display Fromat") in the 'textbox2' text editor.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.SetText(Project.Variables.CreateFTTest1.Value("Display Fromat"));
    //Clicks the 'textbox3' control.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.Click();
    //Enters '![ReleaseLast]' in the 'textbox3' object.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.Keys("![ReleaseLast]");
    //Sets the text KeywordTests.CreateFt2.Variables.CreateFTTest("Allowed Values") in the 'textbox3' text editor.
    Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3.SetText(Project.Variables.CreateFTTest1.Value("Allowed Values"));
    //Clicks the 'buttonOk' button.
    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
    aqTestCase.End();
    Project.Variables.CreateFTTest1.Next();
     
  }
}