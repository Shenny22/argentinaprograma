// Ejercicio 1)a)
const readline = require('readline-sync');
const edad = readline.question("Ingrese su edad: ");

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}