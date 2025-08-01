export default class Cl_persona {
  private _nombre: string = "";
  private _ingreso: number = 0;
 
  constructor(nombre: string, ingreso: number ) {
    this.nombre = nombre;
    this.ingreso = ingreso;
       
  }
 set nombre(nombre: string) {
    this._nombre = nombre;
  }


  get nombre(): string {
    return this._nombre;
  }
  set ingreso(ingreso: number) {
    this._ingreso = +ingreso;
  }

  get ingreso(): number {
    return this._ingreso;
  }  }