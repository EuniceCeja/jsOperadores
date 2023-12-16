/* https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String

    ==OPERADOR==
Es un signo que especifica que debe efectuar una determinada operación

Operadores aritméticos (+ , - , * , / , % , ++ , --)
Operadores de asignación (=)
Operadores lógicos (&& , || , ! --> not)
Operadores de comparación (== , === , != , !== , < , > ,>= , <=)
Operador de cadena (toLowerCase, toUpperCase, trim, toString, concat, +)
*/

/*
Operadores aritméticos

(+) : suma, se utiliza para sumar dos números
(-) : resta, se utiliza para restar un número de otro
(*) : multiplicación, se utiliza para multiplicar dos números
(/) : división, se utiliza para dividir un número entre otro
(%) : residuo, se utiliza para obtener el resto de una división
(++) : incremento, aumente de uno en uno la cantidad o el número
(--) : decremento, disminuye de uno en uno la cantidad o el número
*/

let num1 = 10;
let num2 = 8;
suma = num1 + num2;
resta = num1 - num2;
multiplicación = num1 * num2;
division = num1 / num2;
residuo = num1 % num2;
incremento = num1;
incremento ++;
decremento = num2;
decremento --;

console.log(suma);
console.log(resta);
console.log(multiplicación);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);

let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio Real: $" + precioReal);
console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
console.log("Cantidad de descuento: $" + cantidadDescuento);
console.log("Precio con descuento: $" + precioConDescuento);

/*
    ==Operadores de asignación==
(=) : Este operador no compara, lo que hace es asignar
*/
//let frutas = manzana;

/*
    ==Operadores de comparación==
(==) : Igualdad compara si los valores sin iguales
(===) : Compara los tipos de datos y valores de variables. Igualdad estricta
*/

let num3 = 10;
let texto = "10";

console.log(num3 == texto);

//(===) Igualdad estricta
let num4 = 10;
let texto1 = "10";

console.log(num4 === texto1);

/*
(!=) : Desigualdad o distinto, este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión
*/
let precioCaja = 1499;
let precioMaximo = 1500;
if (precioCaja != precioMaximo){
console.log("El precio del producto no es igual al precio máximo");
} else {
    console.log("El precio del producto es igual al precio maximo permitido");
}

let num5 = 10;
let num6 = "10";

if(num5 != Number(num6)){
    console.log("Son diferentes")
} else {
    console.log("Los valores son iguales");
}

/*
(!==) Desigualdad estricta este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor
*/
//conversión de valores de string a number
let num7 = 41;
let num8 = "50";

if (num7 !== num8) {
    console.log("Los valores son diferentes");
} else{
    console.log("Los valores son iguales");
}

//(>) : Mayor que, basicamente nos indica si un valor es mayor que otro
let puntuacionFinal = 85;
let puntuacionRequerida = 102;
console.log(puntuacionFinal > puntuacionRequerida);

//(<) : Menor que, nos indica si un valor es menor que otro
let años = 20;
let edadLimite = 30;
console.log(años < edadLimite);

//(>=) Mayor o igual que, nos dice si un valor es mayor o igual a otro
let edad = 40;
let edadNecesaria = 18;

console.log(edad >= edadNecesaria);

//(<=) Menor o igual que, y nos indica si un valor es menor o igual a otro 
let temperatura = 14;
let temperaturaMaxima = 21;

console.log(temperatura <= temperaturaMaxima);

/*
ejercicio 1 un programa que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o hay alguno que sea mayor que otro
*/
let numero1 = parseFloat(prompt("Ingresa el primer número"));
let numero2 = parseFloat(prompt("Ingresa el segundo número"));


if (numero1 === numero2){
    console.log("Los números son iguales");
} else if (numero2 < numero1){
    console.log(`El número ${numero2} es menor`);
} else {
    console.log(`El número ${numero1} es menor`);
}
/*
ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
 */

let palabra1 = prompt("Ingresa la primer palabra");
let palabra2 = prompt("Ingresa la segunda palabra");

if(palabra1 != palabra2){
    console.log("Son diferentes palabras");
} else {
    console.log("Las palabras son iguales");
}

// Operadores Lógicos

//(&&) AND se utilizan cuando las dos condiciones deben cumplirse

let mayoriaDeEdad = 18;
let tieneIdentificación = true;

if (mayoriaDeEdad >= 18 && tieneIdentificación){
    console.log("Puedes rentar el salón");
} else {
    console.log("No lo puedes rentar");
}

//(||) OR se utiliza cuando se debe cumplir una condición u otra

let esPrime = false;
let descuento = true;

if (esPrime || descuento) {
    console.log("Califica para descuento");
} else {
    console.log("No califica para descuento");
}

//(!)NOT se utiliza para negar el valor de una condición
let esDiaLibre = false;

if (!esDiaLibre) {
    console.log("Se trabaja");
} else {
    console.log("Dencanso")
}

// Operadores de cadena

//toLowerCase hace el cambio de nuestro string a minúsculas
let mensajeUsuario = "Bienvenido a la tierra";
let cambioMinusculas = mensajeUsuario.toLowerCase();

console.log(cambioMinusculas);

//toUpperCase hace el cambio de nuestro string a mayúsculas
let saludo = "Casi viernes, casi Navidad";
let cambioMayusculas = saludo.toUpperCase();

console.log(cambioMayusculas);

//trim quita los espacios
let aviso = "         CH35    Rifa    "
let sinEspacios = aviso.trim();
console.log(sinEspacios);

//toString convierte un tipo de dato number en string
let num10 = 31;
let cadenas = num10.toString();
console.log(cadenas);

//concat 
let nombre = "Eunice";
let apellido = "Ceja";
let nombreCompleto = nombre.concat(" ", apellido);
console.log(nombreCompleto);

/*Expresiones
Expresión Aritmética
let operacion = 14 + 25 * 12; combina la suma con la multiplicación

Expresión de Cadena
let notificacion = "Casi", + "Año Nuevo"; expresión concatenando

Expresión Lógica
let esMayorDeEdad = (23 > 28) && (23 < 65);  tiene operadores lógicos y de comparación

Expresión de Asignación
let frasco = chocolates; asigna el valor a la variable
*/
/*
un programa de receta de hotcakes, usando operadores lógicos para revisar los ingredientes y si es la cantidad necesaria. También usar operadores de comparación , y que nos arroje  de resultado si podemos hacer la receta .
*/

let harina = 500;
let leche = 350;
let huevo = 2;
let mantequilla = 20;

let harinaDisponible = 1000;
let lecheDisponible = 1000;
let huevosDisponibles = 3;
let mantequillaDisponible = 15;

if (harinaDisponible >= harina && lecheDisponible >= leche && huevosDisponibles >= huevo && mantequillaDisponible >= mantequilla) {
  console.log("¡Tienes suficientes ingredientes para hacer hotcakes!");
} else {
  console.log("No tienes suficientes ingredientes para hacer hotcakes. Compra lo que te falta.");
}
