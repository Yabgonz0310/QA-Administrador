const xlsx = require('xlsx');
const path = require('path');

function leerDesdeExcel(archivoUsuario, hoja1) {
  const rutaUsuarios = path.join(__dirname, archivoUsuario);
  const libro = xlsx.readFile(rutaUsuarios);
  //const archivo = xlsx.readFile(archivoUsuario);
  const datos = xlsx.utils.sheet_to_json(libro.Sheets[hoja1]);
  return datos;
}

module.exports = { leerDesdeExcel };