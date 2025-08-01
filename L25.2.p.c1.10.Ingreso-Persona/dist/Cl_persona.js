export default class Cl_persona {
    constructor(nombre, ingreso) {
        this._nombre = "";
        this._ingreso = 0;
        this.nombre = nombre;
        this.ingreso = ingreso;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set ingreso(ingreso) {
        this._ingreso = +ingreso;
    }
    get ingreso() {
        return this._ingreso;
    }
}
