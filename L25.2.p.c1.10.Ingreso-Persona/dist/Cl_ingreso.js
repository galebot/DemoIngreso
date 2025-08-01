export default class Cl_ingreso {
    constructor() {
        this.acIngresos = 0;
        this.cntPersonas = 0;
        this.menor = 9999999999;
    }
    procesarPersona(p) {
        this.cntPersonas++;
        if (p.ingreso < this.menor) {
            this.menor = p.ingreso;
        }
        this.acIngresos += p.ingreso;
    }
    ingresoMenor() {
        return this.menor;
    }
    promedioIngresos() {
        return this.acIngresos / this.cntPersonas;
    }
}
