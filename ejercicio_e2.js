

//1 Declara una variable nombre y asígnale tu nombre. Muestra su valor enconsola.

let nombre = "Anner Monge";
console.log(nombre);

// 2 Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.
let edad = 18;
let ciudad = "Juigalapa"
console.log(`edad: $(edad), Ciudad: $(ciudad)`);

// 3 Declara una constante PI con el valor 3.1416 y muéstrala en consola.
 const PI = 3.1416;
 conslole,log("Valor de PI: "+ PI);

 //4 Declara tres variables con valores numéricos y calcula su promedio.
 let a = 50;
 let b = 70;
 let c = 90;
 let promedio = (a+b+c)/3;
 console.log(`el promedio de ${a},${b},${c}es ${promedio}`);

 // 5 Declara una variable esMayorDeEdad con un valor booleano y muéstrala.
 let esMayorDeEdad = true ;
 console.log(`Es mayor de edad: ${esMayorDeEdad}`);

 

 // 6 Declara dos números y muestra su suma
 let num1 = 15;
 let num2 = 25;
 let suma = num1 + num2;
 console.log(num1 + num2);

// 7 Declara dos números y muestra su resta, multiplicación y división.
let num3 = 40;
let num4 = 8; 
let resta = num3 - num4;
let multiplicacion = num3 * num4;
let division = num3 / num4;
console.log(`Resta: ${resta}, Multiplicación: ${multiplicacion}, División: ${division}`);

// 8 Declara dos números y muestra el resultado de elevar el primero al segundo.
let base = 2;
let exponente = 3;
let potencia = Math.pow(base, exponente); 
console.log(`${base} elevado a ${exponente} es igual a ${potencia}`);
// 9 Declara una variable precio y otra descuento (en %) y calcula el precio final
let precio = 100;
let descuento = 20; // en porcentaje
let precioFinal = precio - (precio * descuento / 100);
console.log(`El precio final después de un descuento del ${descuento}% es: ${precioFinal}`);
 
 // 10 Usando un for, muestra en consola los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//11.Usando un for, muestra en consola la tabla de multiplicar del 5.
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 12.Usando un while, muestra en consola los números pares del 2 al 20.
let numero = 2;
while (numero <= 20) {
    console.log(numero);
    numero += 2; // Incrementa de 2 en 2 para obtener los números pares
}

// 13.Crea una función saludar que reciba un nombre y muestre un saludo.
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
// Llamada a la función saludar
saludar("Anner Monge");

// 14.Crea una función sumar que reciba dos números y retorne su suma.
function sumar(num1, num2) {
    return num1 + num2;
}
// Llamada a la función sumar y muestra el resultado
let resultadoSuma = sumar(10, 20);
console.log(`La suma es: ${resultadoSuma}`);

//15 .Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.
function esPar(numero) {
    return numero % 2 === 0; // Retorna true si el número es par, false si no lo es
}
// Llamada a la función esPar y muestra el resultado
let numeroParaVerificar = 4;
console.log(`¿El número ${numeroParaVerificar} es par? ${esPar(numeroParaVerificar)}`);

// 16.Crea una función areaRectangulo que reciba base y altura y retorne su área.
function areaRectangulo(base, altura) {
    return base * altura; // Retorna el área del rectángulo
}
// Llamada a la función areaRectangulo y muestra el resultado
let baseRectangulo = 5;
let alturaRectangulo = 10;
let area = areaRectangulo(baseRectangulo, alturaRectangulo);
console.log(`El área del rectángulo de base ${baseRectangulo} y altura ${alturaRectangulo} es: ${area}`);

// 17.Crea una función flecha multiplicar que reciba dos números y retorne su producto.
const multiplicar = (num1, num2) => num1 * num2;
// Llamada a la función flecha multiplicar y muestra el resultado
let resultadoMultiplicacion = multiplicar(6, 7);
console.log(`El producto es: ${resultadoMultiplicacion}`);

// 18.Crea una función flecha convertirCelsiusAFahrenheit que reciba grados Celsius y retorne su equivalente en Fahrenheit.
const convertirCelsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;
// Llamada a la función flecha convertirCelsiusAFahrenheit y muestra el resultado 
let gradosCelsius = 25;
let gradosFahrenheit = convertirCelsiusAFahrenheit(gradosCelsius);
console.log(`${gradosCelsius}°C es igual a ${gradosFahrenheit}°F`);

//19.Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.
const mayorDeDos = (num1, num2) => (num1 > num2 ? num1 : num2);
// Llamada a la función flecha mayorDeDos y muestra el resultado
let numeroA = 15;
let numeroB = 25;
let mayor = mayorDeDos(numeroA, numeroB);
console.log(`El mayor entre ${numeroA} y ${numeroB} es: ${mayor}`);

// 20.Crea una función flecha calcularIVA que reciba un precio y retorne el precio más IVA (15%).
const calcularIVA = (precio) => precio * 1.15;
// Llamada a la función flecha calcularIVA y muestra el resultado
let precioSinIVA = 200;
let precioConIVA = calcularIVA(precioSinIVA);
console.log(`El precio con IVA (15%) es: ${precioConIVA}`);

// 21.Declara un arreglo con 5 nombres y recórrelo con un for mostrando cada nombre.
let nombres = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 22.Declara un arreglo con 5 números y usa un for para mostrar solo los números mayores que 10.
let numeros = [5, 12, 8, 20, 3];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 23.Declara un arreglo con 5 palabras y usa un for para mostrar su longitud (.length).
let palabras = ["manzana", "banana", "cereza", "durazno", "uva"];
for (let i = 0; i < palabras.length; i++) {
    console.log(`La palabra "${palabras[i]}" tiene ${palabras[i].length} letras.`);
}

// 24.Declara un objeto persona con propiedades nombre, edad y ciudad. Usa un for...in para mostrar cada clave y valor.
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 25.Declara un arreglo de objetos con 3 productos (nombre y precio) y usa un for para mostrar solo los nombres de los productos.
let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Smartphone", precio: 500 },
    { nombre: "Tablet", precio: 300 }
];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}

