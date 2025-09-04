
let arreglo = [1, 2, 3, "texto", true];

let arreglo2= new Array(1, 2, 3);

let arreglo3 = [];

let arreglo4 = [{}, {}, {}];

let arreglo5 = [{"nombre":"anner Monge", "edad":"18"}];

// 1. push(): Añadir y quitar al final del arreglo
let numeros = [1, 2, 3];
let longitud = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud); // 5

// 2. unshift(): Añade uno o más elementos al inicio del arreglo y devuelve la nueva longitud del arreglo.
let letras = ['Monge', 'Cruz'];
let longitud1 = letras.unshift('Anner', 'Jadir');
console.log(letras); // ['a', 'b', 'c']
console.log(longitud); // 3

// 3. pop(): Elimina el último elemento del arreglo y lo devuelve.
let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

// 4. shift(): ingresa al inicio del arreglo y devuelve el ultimo elemento eliminado.
let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

// 5. indexOf(elemento, [inicio]): permite buscar un elemento en el arreglo y devuelve su índice o -1 si no se encuentra.
let numeros1 = [10, 20, 30, 20, 40];
let indice = numeros1.indexOf(20); // 1
let indiceDesde2 = numeros1.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3

// 6. length: Propiedad que devuelve la cantidad de elementos en el arreglo. También se puede modificar para truncar o extender el arreglo.
let nums = [1, 2, 3];
console.log(nums.length); // 3
nums.length = 1; // Trunca el arreglo a 1 elemento
nums.length = 5; // Extiende el arreglo a 5 elementos (los nuevos son undefined)

// sort([comparador]): Ordena los elementos del arreglo en su lugar y devuelve el arreglo ordenado. Si se proporciona una función de comparación, se utiliza para determinar el orden.
let numeros3 = [3, 1, 4, 2];
numeros.sort((a, b) => a - b); // Orden ascendente
console.log(numeros); // [1, 2, 3, 4]

let caracteres = ['z', 'a', 'x', 'm','j', 'y'];
caracteres.sort(); // Orden alfabético
console.log(caracteres); // ['a', 'j', 'm', 'x', 'y', 'z']

// join(separador): Une todos los elementos del arreglo en una cadena, separados por el separador especificado.
let palabras = ['Anner', 'jadir','monge', 'Cruz'];
let cadena = palabras.join(','); 
console.log(cadena); // 'Anner jadir monge Cruz'

// concat(arreglo1, arreglo2, ...): Combina dos o más arreglos y devuelve un nuevo arreglo.
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5, 6, 7]);
console.log(combinado); // [1, 2, 3, 4, 5]

// 10.forEach(callback(elemento, indice, arreglo)): 
let colores1 = ['rojo', 'verde', 'azul'];
colores1.forEach(color => console.log(color));
// Imprime: rojo, verde, azul

for (let color of colores1) {
    console.log(color);
}

for (let i = 0; i < colores1.length; i++) {
    console.log(colores1[i]);
}

// 11.map(callback(elemento, indice, arreglo)):// Crea un nuevo arreglo con los resultados de aplicar la función a cada elemento del arreglo original. 
let numeros4 = [1, 2, 3];
let dobles = numeros4.map(x => x * 2);
console.log(dobles); // [2, 4, 6]

// 12.filter(callback(elemento, indice, arreglo)): Crea un nuevo arreglo con los elementos que cumplen la condición especificada en la función de callback.
let datos = [53, 21, 22, 51, 37, 88, 1000, 4];
let pares = datos.filter(x => x % 2 === 0);
console.log(pares); // [2, 4]

// 13.reduce(callback(acumulador, elemento, indice, arreglo), [valorInicial]): Aplica una función a un acumulador y a cada elemento del arreglo (de izquierda a derecha) para reducirlo a un único valor.
let precios = [40, 20, 30, 40];
let suma = precios.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 130

// 14.some(callback(elemento, indice, arreglo)): Verifica si al menos un elemento del arreglo cumple con la condición especificada en la función de callback. Devuelve true o false.
let numeros6 = [1, 2, 3, 4];
let hayPares = numeros6.some(x => x % 2 === 0);
console.log(hayPares); // true

// 15.every(callback(elemento, indice, arreglo)): Verifica si todos los elementos del arreglo cumplen con la condición especificada en la función de callback. Devuelve true o false.
let numeros7 = [2, 4, 6, 8];
let todosPares = numeros7.every(x => x % 2 === 0);
console.log(todosPares); // true

// 16.find(callback(elemento, indice, arreglo)): Devuelve el primer elemento que cumple con la condición especificada en la función de callback. Si ningún elemento cumple, devuelve undefined.
let numeros8 = [1, 2, 3, 4];
let encontrado = numeros8.find(x => x > 2);
console.log(encontrado); // 3

// 17.findIndex(callback(elemento, indice, arreglo)): Similar a find, pero devuelve el índice del primer elemento que cumple con la condición. Si ningún elemento cumple, devuelve -1.
let numeros9 = [1, 2, 3, 4];
let indice2 = numeros9.findIndex(x => x > 2);
console.log(indice2); // 2

// 18.entries(): Devuelve un iterador de los índices y valores del arreglo.
let colores2 = ['rojo', 'verde', 'azul'];
let iterador = colores2.entries();
console.log([...iterador]);
// [[0, 'rojo'], [1, 'verde'], [2, 'azul']]

//19.keys(): Devuelve un iterador de los índices del arreglo.

let colores3 = ['rojo', 'verde', 'azul'];
let iterador1 = colores3.keys();
console.log([...iterador1]); // [0, 1, 2]

// 20.values(): Devuelve un iterador de los valores del arreglo.
let colores4 = ['rojo', 'verde', 'azul'];
let iterador2 = colores4.values(); 
console.log([...iterador2]); // ['rojo', 'verde', 'azul']
