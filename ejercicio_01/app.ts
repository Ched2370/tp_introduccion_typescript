function calcularArea(largo: number, ancho: number) {
  return largo * ancho;
}

function saludar(nombre: string, edad: number) {
  if (edad >= 18) {
    return `Hola ${nombre}, eres mayor de edad`;
  } else {
    return `Hola ${nombre}, eres menor de edad.`;
  }
}

const nombreProyecto = 'Proyecto';
let largo = 15;
let ancho = 7;
let edadUsuario = 25;
const nombreUsuario = 'Ana';

const area = calcularArea(largo, ancho);
console.log(`${nombreProyecto} tiene un area de ${area}`);
console.log(saludar(nombreUsuario, edadUsuario));

const datosUsuario = ['Carlos', 30];
