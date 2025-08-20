// Función anónima asignada a una variable
const sumar = function (a, b) {
  return a + b;
};
console.log(sumar(3, 4));

// Función con asignación de nombre
function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 4));

// Sintaxis normal
const multiplicar = function (a, b) {
  return a * b;
};

// Función flecha
const multiplicarFlecha = (a, b) => a * b;
console.log(multiplicarFlecha(3, 4)); // 12

const edad = 19;
const tieneID = true;
if (edad >= 18) {
  if (tieneID) {
    console.log("Acceso permitido");
  } else {
    console.log("Necesitas identificación");
  }
} else {
  console.log("Eres menor de edad");
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

try {
  // Aquí va el código que podría fallar
} catch (error) {
  // Aquí se maneja el error si ocurre
}

try {
  let numero = parseInt("abc"); // Esto no genera error, da NaN
  console.log(numero.toFixed(2));
  // ❌ Error: no se puede usar toFixed en NaN
} catch (error) {
  console.log("Ocurrió un error:", error.message);
}

try {
  console.log("Intentando dividir...");
  let resultado = 10 / 0; // No error real, da Infinity
  console.log(resultado);
} catch (error) {
  console.log("Error atrapado:", error.message);
} finally {
  console.log("Fin del bloque");
}

function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir entre 0");
    }
    return a / b;
  } catch (error) {
    return "Error: " + error.message;
  }
}
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Error: No se puede dividir entre 0

//Acceder a arreglos
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"

const personal = {
  nombre: "Ana",
  hobbies: ["leer", "pintar", "correr"],
};
console.log(persona.hobbies[1]); // "pintar"

const personas = [
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 25 },
];
console.log(personas[0].nombre); // "Luis"
console.log(personas[1].edad); // 25






