const { I } = inject();

class SearchUser {
    constructor() {
        this.fields = {
            inicio: "https://cloudappspre.telmex.com/AdminEvolucion/",
            inputuser: '[id="usuarioInput"]',
            user: "CCP_TEST",
            inputpasswd: '[id="passwordInput"]',
            passwd: "dr0wss4p#4",
            btnlogin: '[id="btnSubm"]',
            btnusers: '[id="tab-usuarios"]',
            btnbuscar: '//span[@class="glyphicon glyphicon-search"]',
            inputfechai: '[id="inputFechaIni"]',
            fechaI:"2025/05/18",
            inputFechaFin: '[id="inputFechaFin"]',
            fechaFin: "2025/06/13",
            buttonbuscar: '[id="search-btn"]',
            resultado: '//p[text()="Resultados de la busqueda:"]',

        }
    }

    inicioadmin() {
        I.amOnPage(this.fields.inicio)
        I.wait(2)
        I.fillField(this.fields.inputuser, this.fields.user)
        I.fillField(this.fields.inputpasswd, this.fields.passwd)
        I.wait(2)
        I.click(this.fields.btnlogin)
        I.wait(6)
    }

    buscaruser() {
        I.click(this.fields.btnusers)
        I.wait(1)
        I.click(this.fields.btnbuscar)
        I.wait(4)
        I.fillField(this.fields.inputfechai, this.fields.fechaI)
        I.fillField(this.fields.inputFechaFin, this.fields.fechaFin)
        I.wait(1)
        I.click(this.fields.buttonbuscar)
        I.scrollTo(this.fields.resultado)
        I.wait(5)


    }
}
module.exports = new SearchUser();