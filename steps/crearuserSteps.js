//import CrearUsuario from '../pages/crearuser.js';
const CrearUsuario = require('../pages/crearuser.js')
const { leerDesdeExcel } = require('../data/leerExcel.js')
const { I } =inject();

Given ("Estoy en la pagina de administrador", () => {
    CrearUsuario.inicioadmin();
})

When("Selecciono la opcion de usuarios y crear nuevo usuario", () => {
    const datos = leerDesdeExcel('usuarios.xlsx', 'Hoja1');
    datos.forEach(d => {
        CrearUsuario.crearuser(d.nombre, d.usuario, d.correo, d.password, d.perfil);
    });
    
})