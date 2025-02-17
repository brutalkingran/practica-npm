import fs from 'fs';

// Clase superhéroe
class Superheroe {
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

// funcion leer y ordenar superhéroes
export function leerSuperheroes(ruta) {
    const datos = fs.readFileSync(ruta, 'utf8');
    const superheroesArray = JSON.parse(datos);

    // convertir a instancias de superheroe
    const superheroes = superheroesArray.map( (hero) =>
        new Superheroe(
            hero.id,
            hero.nombreSuperheroe,
            hero.nombreReal,
            hero.nombreSociedad,
            hero.edad,
            hero.planetaOrigen,
            hero.debilidad,
            hero.poder,
            hero.habilidadEspecial,
            hero.aliado,
            hero.enemigo
        )
    );
        
    // ordenar por nombre de superheroe
    superheroes.sort( (a,b) => a.nombreSuperheroe.localeCompare(
        b.nombreSuperheroe
    ));

    return superheroes;
}

export function agregarSuperheroes( rutaOriginalPropia, rutaNuevos ) {
    const datosOriginalesPropios = fs.readFileSync(rutaOriginalPropia, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginalesPropios = JSON.parse(datosOriginalesPropios);
    const nuevosSuperHeroes = JSON.parse(datosNuevos);

    // Convertir nuevos superheroes a instancias de Superheroe
    const instanciasNuevos = nuevosSuperHeroes.map(
        hero => new Superheroe(
            hero.id,
            hero.nombreSuperheroe,
            hero.nombreReal,
            hero.nombreSociedad,
            hero.edad,
            hero.planetaOrigen,
            hero.debilidad,
            hero.poder,
            hero.habilidadEspecial,
            hero.aliado,
            hero.enemigo
        )
    );

    // combinar listas
    const listaActualizada = [...superheroesOriginalesPropios, ...instanciasNuevos];

    // guardar la lista actualizada
    fs.writeFileSync( rutaOriginalPropia, JSON.stringify(listaActualizada, null, 2), 'utf8');
    console.log('Lista de superhéroes actualizada con éxito.');
}