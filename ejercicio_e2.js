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



