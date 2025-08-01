/**
 INGRESOS PERSONAS
Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75)
Monto del ingreso menor: 75$
Ingreso promedio: 130$
 */
import Cl_ingreso from "./Cl_ingreso.js";
import Cl_persona from "./Cl_persona.js";
const persona1 = new Cl_persona("Mary", 150);
const persona2 = new Cl_persona("Jose", 135);
const persona3 = new Cl_persona("Carlos", 160);
const persona4 = new Cl_persona("Pedro", 75);
const ingreso = new Cl_ingreso();
ingreso.procesarPersona(persona1);
ingreso.procesarPersona(persona2);
ingreso.procesarPersona(persona3);
ingreso.procesarPersona(persona4);
alert(`El ingreso menor es de Bs.${ingreso.ingresoMenor()}`
    + `\nEl ingreso promedio es de Bs.${ingreso.promedioIngresos()}`);
console.log(`El ingreso menor es de Bs.${ingreso.ingresoMenor()}`
    + `\nEl ingreso promedio es de Bs.${ingreso.promedioIngresos()}`);
let salida = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `El ingreso menor es de Bs.${ingreso.ingresoMenor()}`
        + `<br>El ingreso promedio es de Bs.${ingreso.promedioIngresos()}`;
    ;
}
else
    console.error("No se pudo encontrar el elemento con el id 'salida'.");
