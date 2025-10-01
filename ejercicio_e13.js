// Métodos de recorrido y evaluación (iteradores)

const calificaciones = [80, 90, 70, 85, 95];

const suma = calificaciones.reduce((acc, calif) => acc + calif, 0);

const promedio = suma / calificaciones.length;

console.log(promedio); // 84


// Ejemplo con objetos
const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100

//2. find()
const nombres = ["Ana", "Luis", "Pedro", "María"];
const encontrado = nombres.find(nombre => nombre.startsWith("P"));
console.log(encontrado); // "Pedro"

const edades = [25, 35, 51, 10, 8, 13]

const menor10 = edades.find(edad => edad < 10);

console.log(menor10); // 8



//Ejemplo con arreglo de objetos:
const usuarios = [
{ id: 1, nombre: "Carlos",salario:20000 },
{ id: 2, nombre: "Lucía",salario:17300 },
{ id: 3, nombre: "Marta",salario:11000 },
{ id: 4, nombre: "  Anner",salario:18000 },
{ id: 5, nombre: "Elena",salario:19000 }
];

const salariosBajos = usuarios.filter(u => u.salario < 20000);
console.log(salariosBajos); // [{ id: 3, nombre: "Marta" }]
// Metodo que devuelva el primer usuario cuyo salario sea mayor a 15000
const usuario1 = usuarios.find(u => u.salario < 20000 && u.nombre.startsWith("E"));
console.log(usuario1); // { id: 1, nombre: "Carlos" }



//3. every()
const edades1 = [18, 22, 30, 25];
const todosMayores = edades1.every(edad => edad >= 18);
console.log(todosMayores); // true

const todosSalariosAltos = usuarios.every(u => u.salario > 10000);
console.log(todosSalariosAltos); // true

const unotieneMayora20 = usuarios.every(u => u.salario > 20000);
console.log(unotieneMayora20); // false

//4. some()
const notas = [5, 8, 9, 3];
const hayReprobados = notas.some(nota => nota < 6);
console.log(hayReprobados); // true

//Ejemplo con arreglo de objetos:
const inventario = [
{ producto: "Manzanas", cantidad: 0 },
{ producto: "Naranjas", cantidad: 10 },
{ producto: "Peras", cantidad: 3 }
];
const agotado = inventario.some(item => item.cantidad === 0);
console.log(agotado); // true

// filter()
const numeros = [5, 10, 15, 20, 25];
const mayoresQue15 = numeros.filter(num => num > 15);
console.log(mayoresQue15); // [20, 25]

//Ejemplo con arreglo de objetos:
const empleados = [
{ nombre: "Ana", puesto: "Desarrolladora" },
{ nombre: "Luis", puesto: "Diseñador" },
{ nombre: "Marta", puesto: "Desarrolladora" }
];
const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");
console.log(desarrolladores);
// [
// { nombre: "Ana", puesto: "Desarrolladora" },
// { nombre: "Marta", puesto: "Desarrolladora" }
// ]

//Ejercicio E13
const personas = [
  { id: 1, nombre: "Ana", edad: 17 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 3, nombre: "Marta", edad: 30 },
  { id: 4, nombre: "Pedro", edad: 15 },
  { id: 5, nombre: "Sofía", edad: 25 },
  { id: 6, nombre: "Diego", edad: 40 },
  { id: 7, nombre: "Carla", edad: 19 },
  { id: 8, nombre: "Jorge", edad: 33 },
  { id: 9, nombre: "Lucía", edad: 28 },
  { id: 10, nombre: "Raúl", edad: 16 },
  { id: 11, nombre: "Elena", edad: 21 },
  { id: 12, nombre: "Andrés", edad: 35 }
];
// 1.Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual 18 años.
const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
console.log(mayoresDeEdad);

// 2.Encuentra la primera persona en el arreglo cuyo nombre comience con la letra "L".
const nombreConL = personas.find(persona => persona.nombre.startsWith("L"));
console.log(nombreConL);

// 3. Calcula la suma total de las edades de todas las personas en el arreglo.
const sumaEdades = personas.reduce((total, persona) => total + persona.edad, 0);
console.log(sumaEdades);

// 4. Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.
const todosMayores15 = personas.every(persona => persona.edad >= 15);
console.log(todosMayores15);

// 5. Comprueba si existe al menos una persona en el arreglo que tenga 40 años
const existe40 = personas.some(persona => persona.edad === 40);
console.log(existe40);
