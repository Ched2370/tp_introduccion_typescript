## Trabajo practico typescript
![typescript](https://github.com/user-attachments/assets/4a5e15ba-02eb-4540-b6f1-3af2d4e7c8e7)

### Colaborador
- Ibañez Mario

#### Trabajo Práctico: Introducción a TypeScript

Ejercicio 1: Convertir un archivo JavaScript (app.js) a TypeScript (app.ts) añadiendo tipos
de datos adecuados para mejorar la robustez del código.

``` javascript
function calcularArea(largo, ancho) {
    return largo * ancho;
}
function saludar(nombre, edad) {
    if (edad >= 18) {
        return "Hola ".concat(nombre, ", eres mayor de edad");
    }
    else {
        return "Hola ".concat(nombre, ", eres menor de edad.");
    }
}
var nombreProyecto = 'Proyecto';
var largo = 15;
var ancho = 7;
var edadUsuario = 25;
var nombreUsuario = 'Ana';
var area = calcularArea(largo, ancho);
console.log("".concat(nombreProyecto, " tiene un area de ").concat(area));
console.log(saludar(nombreUsuario, edadUsuario));
var datosUsuario = ['Carlos', 30];
```

Ejercicio 2: Configuración de un Proyecto TS
  1.Crear una carpeta mi-primer-proyecto-ts y arrastrarla a VS
  2.Inicializa un nuevo proyecto de Node.js. En la terminal de VS inicia el ambiente

```
npm init -y
npm install typescript --save-dev
npx tsc --init
```

3. Configura tu archivo tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
  
4. Crea un archivo src/index.ts:
```typescript
// Tipos basicos

let nombre: string = 'Ana';
let edad: number = 38;
let esEstudiante: boolean = true;

// Imprime los valores
console.log(`
  Nombre: ${nombre}, 
  Edad: ${edad},
  Estudiante: ${esEstudiante}`);
```


5. Ejecuta el código en una terminal
`npx tsc`
6. Ejecuta el código compilado
`node dist/index.js`


Ejercicio 3: Probar el funcionamiento del ejercicio 1
