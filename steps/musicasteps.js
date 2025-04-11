const { I } = inject();

Given("Estoy en la pagina principal de videos", () => {
  I.amOnPage("https://www.youtube.com/");
  I.wait(10);
});

When("Capturo el nombre de la cancion", () => {
  I.fillField("[placeholder="Buscar"]","YNLPA")
  //I.waitForElement('[placeholder="Buscar"]', 5);
  I.click('//button[@class="ytSearchboxComponentSearchButton"]');
});

When("Selecciono el resultado de la busqueda", () => {
  I.wait(5);
  I.clickLink('//img[@src="https://i.ytimg.com/vi/tm7-LlUc7uc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBJ9d95pMLsM9EUesX2XULIhNld4g"]')
  //I.fillField("##password", "Ejemplo0920#");
  I.wait(2)
});

Then("Se visualiza el video", () => {
  I.seeElement('src="blob:https://www.youtube.com/c8ecbac0-f5fc-4ccc-b74a-bd5a8b85128d"');
});
