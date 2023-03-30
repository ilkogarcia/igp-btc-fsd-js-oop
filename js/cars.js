class Cars {
    constructor (posicion, piloto, puntos, equipo){
        this.posicion = posicion;
        this.piloto = piloto;
        this.puntos = puntos;
        this.equipo = equipo;
    }

    bajarPosicion (){
        // Acelerar
    }

    subirPosicion (){
        // Frenar
    }

}

let coche1 = new Cars (1, "Max Verstappen", 458, "Red Bull Racing");
let coche2 = new Cars (2, "Lewis Hamilton", 308, "Mercedes AMG F1");
let coche3 = new Cars (3, "George Russell", 305, "Mercedes AMG F1");
let coche4 = new Cars (4, "Sergio Pérez", 275, "Red Bull Racing");
let coche5 = new Cars (5, "Carlos Sainz", 254, "Scuderia Ferrary");

let parrilla = [coche1, coche2, coche3, coche4, coche5];
console.table(parrilla)