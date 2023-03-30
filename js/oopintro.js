// Objetos JavaScript

// let Alvaro = {
//     nombre : "Alavaro",
//     edad : "29",
//     sexo : "M",
//     ciudad : "Castellón",
//     hobbies : {
//         hobbie1 : "Videjuegos",
//         hobbie2 : "Lectura",
//         hobbie3 : "Programar"
//     }
// }
// console.table(Alvaro);

// let Paula = {
//     nombre : "Paula",
//     edad : "29",
//     sexo : "F",
//     ciudad : "Ontinyent",
//     hobbies : {
//         hobbie1 : "Videjuegos",
//         hobbie2 : "Lectura",
//         hobbie3 : "Programar"
//     }
// }
// console.table(Paula);

// if (Alvaro.ciudad == Paula.ciudad) {
//     document.write("Alvaro y Paula viven en la misma ciudad!")
// } else {
//     document.write("Alvaro y Paula no viven en la misma ciudad!")

// }

// let Cartelera = {
//     pelicula1 : {
//         titulo : "Lo que el viento se llevó",
//         edad : 13
//     },
//     pelicula2 : {
//         titulo : "Star Wars",
//         edad : 7
//     },
//     pelicula3 : {
//         titulo : "Pulp Fiction",
//         edad : 18
//     }
// }
// console.table(Cartelera);

// if (Paula.edad >= Cartelera.pelicula1.edad) {
//     console.log("Paula si puede ver", Cartelera.pelicula1.titulo)
// }


// Array de objetos

let videojuegos = [
    {
        titulo : "God of war",
        plataforma : "Ps2"
    },
    {
        titulo : "Dark Souls",
        plataforma : "Pc"
    },
    {
        titulo : "Last of Us",
        plataforma : "Ps3"
    },
    {
        titulo : "Quake",
        plataforma : "PC"
    },
    {
        titulo : "Sonic 2",
        plataforma : "Megadrive"
    }
];
console.table(videojuegos);

let juego = prompt("Dime a que juego quieres jugar");
let lotenemos = false;
let i = 0;
while (lotenemos == false && i < videojuegos.length) {
    lotenemos = (juego == videojuegos[i].titulo) ? true : false;
    i++
}
if (lotenemos) {
    console.log(`El video juego que buscas si lo tenemos disponible para ${videojuegos[i].plataforma}`);
} else {
    console.log("El video juego que buscas no lo tenemos, disculpe las molestias"); 
}
