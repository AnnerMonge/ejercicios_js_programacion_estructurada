//1 Crear una función flecha que reciba un arreglo y uno o más elementos, los añada al final del arreglo y devuelva el nuevo arreglo.
let agregarElementoFinal = (arreglos, elementos) => {
  arreglos.push(elementos);
  return arreglos;
};
let numeros = [1, 2, 3];
console.log(agregarElementoFinal(numeros, 4)); // [1, 2, 3, 4]

// 2 Crear una función flecha que reciba un arreglo y uno o más elementos, los añada al inicio del arreglo y devuelva el nuevo arreglo.
let agregarElementoInicio = (arr, elementos) => {
  arr.unshift(elementos);
  return arr;
};
let numeros2 = [1, 2, 3];
console.log(agregarElementoInicio(numeros2, 0)); // [0, 1, 2, 3]


// 3 Crear una función flecha que reciba un arreglo, elimine y devuelva el último elemento del arreglo.
let   EliminarElementoFinal = (arr) => {
  let ultimo = arr.pop();
  return ultimo;
};
let numeros3 = [24, 32, 89, 51];

console.log(EliminarElementoFinal(numeros3)); // 51


// 4 Crear una función flecha que reciba un arreglo, elimine y devuelva el primer elemento del arreglo.
let EliminarElementoInicio = (arr) => {
  let primer_elemento = arr.shift();
  return primer_elemento;
};
let frutas = ['manzana', 'banana', 'naranja'];
console.log(EliminarElementoInicio(frutas)); // 'manzana'
console.log(frutas); // ['banana', 'naranja']


// 5 Crear una función flecha que reciba un arreglo, un elemento y opcionalmente un índice de inicio, y devuelva el índice de la primera aparición del elemento o -1 si no lo encuentra.
let indexOfElemento = (arr, elemento, inicio = 0) => {
  return arr.indexOf(elemento, inicio);
};
console.log(indexOfElemento([10, 20, 30, 20, 40], 20)); // 1
console.log(indexOfElemento([10, 20, 30, 20, 40], 20, 2)); // 3

// 6 Crear una función flecha que reciba un arreglo y devuelva la cantidad de elementos en el arreglo.
let lengthArreglo = (arr) => {
  return arr.length;
};
console.log(lengthArreglo([1, 2, 3])); // 3

// 7 Crear una función flecha que reciba un arreglo de números y los ordene en orden ascendente usando una función comparadora.
let sortNumeros = (arr) => {
  return arr.sort((a, b) => a - b);
};
console.log(sortNumeros([3, 1, 4, 2])); // [1, 2, 3, 4]

// 8 Crear una función flecha que reciba un arreglo y un separador, y devuelva una cadena con los elementos del arreglo unidos por el separador.
let joinElementos = (arr, separador) => {
  return arr.join(separador);
};
console.log(joinElementos(["Anner", "jadir", "monge", "Cruz"], ",")); // 'Anner,jadir,monge,Cruz'

// 9 Crear una función flecha que reciba uno o más arreglos y/o elementos, y devuelva un nuevo arreglo con todos los elementos combinados.
let concatArreglos = (...args) => {
  return [].concat(...args);
};
console.log(concatArreglos([1, 2], [3, 4], [5, 6, 7])); // [1, 2, 3, 4, 5, 6, 7]
// 10 Crear una función flecha que reciba un arreglo y una función callback, y ejecute la función por cada elemento del arreglo sin devolver un nuevo arreglo.
let forEachElemento = (arr, callback) => {
  arr.forEach(callback);
};
forEachElemento(["rojo", "verde", "azul"], (color) => console.log(color));
// Imprime: rojo, verde, azul

//  11 Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los resultados de aplicar la función a cada elemento.
let mapElemento = (arr, callback) => {
  return arr.map(callback);
};
console.log(mapElemento([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
// 12 Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los elementos que cumplen la condición definida por la función.
let filterElemento = (arr, callback) => {
  return arr.filter(callback);
};
console.log(filterElemento([1, 2, 3, 4, 5], (x) => x % 2 === 0)); // [2, 4]

// 13 Crear una función flecha que reciba un arreglo, una función callback y opcionalmente un valor inicial, y reduzca el arreglo a un solo valor aplicando la función acumuladora.
let reduceElemento = (arr, callback, inicial) => {
  return arr.reduce(callback, inicial);
};
console.log(reduceElemento([1, 2, 3, 4], (acc, val) => acc + val, 0)); // 10
