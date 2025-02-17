import { agregarSuperheroes, leerSuperheroes } from "./utils.mjs";

const archivoOriginalPropio = './superheroes.txt';
const archivosNuevos = './agregarSuperheroes.txt';

// agregar nuevos supherheroes
agregarSuperheroes(archivoOriginalPropio, archivosNuevos)

// leer y mostrar lista superheroes ordenada
const superheroes = leerSuperheroes('./superheroes.txt');
console.log('Superhéroes ordenados:');
console.log(superheroes);

