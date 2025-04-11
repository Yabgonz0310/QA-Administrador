Feature: Buscar musica en youtube

Scenario: Realizar la busqueda de canciones de Charles Ans
Given Estoy logueado en pagina principal
When Escribo el nombre de la cancion
And Selecciono el resultado de la busqueda
Then Se visualiza el video