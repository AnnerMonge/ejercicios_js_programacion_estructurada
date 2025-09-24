// 1 Métodos de ordenamiento

//Arreglo de Numeros
let numeros = [5, 2, 9, 1, 7];

//Orden asendente
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 2, 5, 7, 9]

//Orden desendente
numeros.sort((a, b) => b - a);
console.log(numeros); // [9, 7, 5, 2, 1]

//arreglo de cadenas
let frutas = ["banana", "manzana", "naranja", "uva"];
frutas.sort(); //Orden Alfabetico por defecto
console.log(frutas); // ['Banana', 'manzana', 'naranja', 'uva']

// Orden Alfabetico inverso
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas); // ['uva', 'naranja', 'manzana', 'Banana']

// 2 Ejemplo con arreglos de objetos:
let personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
];
//Ordenar por edad ascendente
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);
//[

//{ nombre: 'Ana', edad: 25 },
// { nombre: 'Juan', edad: 30 },
// { nombre: 'Luis', edad: 35 }
//]

//Ordenar por nombre alfabeticamente
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas);
//[
//{ nombre: 'Ana', edad: 25 },
// { nombre: 'Juan', edad: 30 },
// { nombre: 'Luis', edad: 35 }
//]

// 3 Método reverse
let numero1 = [1, 2, 3, 4, 5];
numero1.reverse();
console.log(numero1); // [5, 4, 3, 2, 1]

let palabras = ["hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras); // ['javascript', 'mundo', 'hola']

//4 Ejemplo con arreglos de objetos:
let personas1 = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
];
personas1.reverse();
console.log(personas1);

// 5 Crear un nuevo arreglo ordenado (sin modificar el original)
let numeros2 = [5, 2, 9, 1, 7];
let numerosOrdenados = [...numeros2].sort((a, b) => a - b);
console.log(numerosOrdenados); // [1, 2, 5, 7, 9]
console.log(numeros2); // [5, 2, 9, 1, 7]


// 6 Ejemplo con arreglos de objetos:
let calificaciones =[
  {estudiante:"Eliab", asignarura: 'Matematicas', calificacion: 60},
  {estudiante:"Xiomara", asignarura: 'Historia', calificacion: 100},
  {estudiante:"Camilo", asignarura: 'Español', calificacion: 80},
  {estudiante:"Ramiro", asignarura: 'Fisica', calificacion: 55},
  {estudiante:"Ana", asignarura: 'Quimica', calificacion: 77}
];
calificaciones.sort((a,b) => b.asignarura.localeCompare(a.asignarura));
console.log(calificaciones);

calificaciones.sort((a,b) => b.calificacion -a.calificacion)
console.log(calificaciones);

// 7 Ejemplo con arreglos de objetos:
let personas2 = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
];
let ordenadosporEdad = [...personas2].sort((a, b) => a.edad - b.edad);
console.log(ordenadosporEdad);
//[
// { nombre: 'Ana', edad: 25 },
// { nombre: 'Juan', edad: 30 },
// { nombre: 'Luis', edad: 35 }
//]
console.log(personas2); // Original sin modificar
