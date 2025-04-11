const { I } = inject();

Given("Estoy en la pagina principal", () => {
  I.amOnPage("https://www.youtube.com/");
  I.wait(10);
});

When("Voy a la pagina de login", () => {
  I.waitForElement('//a[text()="Login"]', 6);
  I.click('//a[text()="Login"]');
});

When("Escribo nombre de usuario y contrasena a la pagina de login", () => {
  I.wait(5);
  I.fillField("#username", "yabingonzaga0310@gmail.com");
  I.fillField("##password", "Ejemplo0920#");
  I.wait(2)
});

Then("Se visualiza link de ayuda", () => {
  I.seeElement('//a[text()="Need help logging in?"]', 10);
});
