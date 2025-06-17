import CrearUsuario from '../pages/crearuser.js';
const { I } =inject();

Given ("Estoy en la pagina de administrador", () => {
    CrearUsuario.inicioadmin();
})
When("Selecciono la opcion de usuarios y crear nuevo usuario", () => {
    CrearUsuario.crearuser();
})