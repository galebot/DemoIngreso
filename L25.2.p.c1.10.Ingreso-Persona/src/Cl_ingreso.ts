import Cl_persona from './Cl_persona.js';

export default class Cl_ingreso {
  private acIngresos: number;
    private cntPersonas: number;
      private menor: number;

  constructor() {
    this.acIngresos = 0;
    this.cntPersonas = 0;
    this.menor = 9999999999;

  }

  procesarPersona(p: Cl_persona): void {
    this.cntPersonas++;
    if (p.ingreso < this.menor) {
      this.menor = p.ingreso;
    }
    this.acIngresos += p.ingreso;
  }

 ingresoMenor(): number {
    return this.menor;
  }
  promedioIngresos(): number {
    return this.acIngresos / this.cntPersonas;
}
}