let golosinas = ["ballena", "platano", "melón"]

console.log(golosinas.includes("nube"));
console.log(golosinas.includes("ballena"));

let Ilko = {
    nombre  : "Ilko",
    edad    : 48,
    sexo    : "M",
    ciudad  : "Valencia"
}

console.log(Object.entries(Ilko));
console.log(Object.values(Ilko));

let nombre = "Francisco"

console.log(nombre.padStart(10));
console.log(nombre.padStart(nombre.length + 4,"Mr. "));

console.log(nombre.padEnd(10));
console.log(nombre.padEnd(nombre.length + 4,"Mr. "));

console.log(Object.getOwnPropertyDescriptors(nombre));

