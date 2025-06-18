const { I } = inject();

class CrearUsuario {
  constructor() {
    this.fields = {
      inicio: "https://cloudappspre.telmex.com/AdminEvolucion/",
      inputuser: '[id="usuarioInput"]',
      user: "CCP_TEST",
      inputpasswd: '[id="passwordInput"]',
      passwd: "dr0wss4p#4",
      btnlogin: '[id="btnSubm"]',
      btnusers: '[id="tab-usuarios"]',
      btncrear: '//span[@class="glyphicon glyphicon-plus"]',

      //Datos usuario
      inputname: '[id="inputNombreUsuario"]',
      inputusername: '[id="inputUsername"]',
      inputmail: '[id="inputCorreo"]',
      inputpass: '[id="inputPasswd"]',
      inputperfil: "#selectPerfil", //'[id="selectPerfil"]'
      btncancel: '[id="btn-cancel"]',
      btnadd: '//button[text()="Agregar"]',
    };
  }

  inicioadmin() {
    I.amOnPage(this.fields.inicio);
    I.wait(1);
    I.fillField(this.fields.inputuser, this.fields.user);
    I.fillField(this.fields.inputpasswd, this.fields.passwd);
    I.wait(2);
    I.click(this.fields.btnlogin);
    I.wait(8);
  }

  crearuser(nombre, usuario, correo, password, perfil) {
    I.click(this.fields.btnusers);
    I.wait(1);
    I.click(this.fields.btncrear);
    I.wait(3);
    I.fillField(this.fields.inputname, nombre);
    I.fillField(this.fields.inputusername, usuario);
    I.fillField(this.fields.inputmail, correo);
    I.fillField(this.fields.inputpass, password);
    I.selectOption(this.fields.inputperfil, perfil.toString())
    I.wait(1);
    I.click(this.fields.btnadd)
    I.wait(5);
  }
}
module.exports = new CrearUsuario();
