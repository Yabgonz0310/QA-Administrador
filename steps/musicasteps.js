const { I } = inject();

Given("Estoy logueado en pagina principal", () => {
  I.amOnPage("https://www.youtube.com/");
  I.wait(5);
});

When("Escribo el nombre de la cancion", () => {
  //I.waitForElement(
    //'//input[@class="ytSearchboxComponentInput yt-searchbox-input title"]',
    //5
  //);
  I.fillField(
    '//input[@class="ytSearchboxComponentInput yt-searchbox-input title"]',
    "YNLPA"
  );
  I.click('//button[@class="ytSearchboxComponentSearchButton"]');
});

When("Selecciono el resultado de la busqueda", () => {
  I.wait(3);
  I.click(
    '//img[@src="https://i.ytimg.com/vi/tm7-LlUc7uc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBJ9d95pMLsM9EUesX2XULIhNld4g"]'
  );
  //I.wait(2);
});

Then("Se visualiza el video", () => {
  I.wait(30);
  //I.click('src="blob:https://www.youtube.com/c8ecbac0-f5fc-4ccc-b74a-bd5a8b85128d"',320);
 
});
