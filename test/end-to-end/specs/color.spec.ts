describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:8080');

    browser.executeScript(`
      var theme = new NineTails.Theme();

      var rule = theme.createRule("h1");

      var style = new NineTails.Color("rgba(255, 0, 0, 1)");

      rule.linkStyle("color", style);;`);


    var color = element(by.css('h1')).getCssValue("color");

    expect(color).toEqual("rgba(255, 0, 0, 1)");
  });
});
