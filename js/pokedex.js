function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.saludar = function(){
    console.log("Hola, me llamo " + this.nombre)
  };

  this.pelear = function(pokemonObjeto){
    pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  }

  this.beber = function(tipoAlcohol){
    if(tipoAlcohol == "chelas"){
      this.nivelDeAmistad += 80
    }
    else if (tipoAlcohol == "vodka") {
      this.nivelDeAmistad += 10
    }
  };
}

var nuevoPokemon = [];

function crearPokemon(){
 var nombrePokemon = document.getElementById("nombrePokemon");
 var colorPokemon = document.getElementById("colorPokemon");
 var puntosPokemon = document.getElementById("puntosAtaque");

 var pokemonCreado = new Pokemon(nombrePokemon.value,
                                colorPokemon.value,
                                parseInt(puntosAtaque.value)
                                );
 nuevoPokemon.push(pokemonCreado);
 mostrarPokemons();
 nombrePokemon.value=" ";
 colorPokemon.value=" ";
 puntosAtaque.value =" ";
}

/*function mostrarPokemons(){
var listaPokemon = document.getElementById("listaPokemon");
var lista = document.createElement("select");
nuevoPokemon.forEach(function(pokemonCreado){
  var elemento = document.createElement("option");
  elemento.innerText = nuevoPokemon.nombre + " " + nuevoPokemon.color + " " + nuevoPokemon.puntosAtaque;
  pokeLista.appendChild(elemento);
})
}*/

//var pikachu = new Pokemon("Pikachu","amarillo", 80);
//var charmander  = new Pokemon("Charmander","rojo", 30);

//console.log(pikachu)
//console.log(charmander)

//pikachu.pelear(charmander)

//console.log(charmander.vida)


function obtenerPokemon(){
  var pokemonAgregado = document.getElementById("nombrePokemon").value
  var guardarPokemon = createElement("select")

  var mostrarTexto = document.getElementById("text");
  mostrarTexto.innerHTML = area;
  var textoPreview = mostrarTexto.innerHTML;
  return textoPreview;
}


var nuevoPokemon = [];

function crearPokemon(){
 var nombrePokemon = document.getElementById("nombrePokemon");
 var colorPokemon = document.getElementById("colorPokemon");
 var puntosPokemon = document.getElementById("puntosAtaque");

 var pokemonCreado = new Pokemon(nombrePokemon.value,
                                colorPokemon.value,
                                parseInt(puntosAtaque.value)
                                );
 nuevoPokemon.push(pokemonCreado);
 mostrarPokemon();
 nombrePokemon.value=" ";
 colorPokemon.value=" ";
 puntosAtaque.value =" ";
}
function mostrarPokemon() {
    var listaPokemon = document.getElementById("pokeLista");
    var listaPokemon2 = document.getElementById("pokeLista2");
    var opciones = document.createElement("select");
    var opcionesEnemigos = document.createElement("select");
    var elemento = document.createElement("option");
    var elementoEnemigo = document.createElement("option");

nuevoPokemon.forEach(function(pokemon){
    elemento.innerText = nuevoPokemon.nombre + " " + nuevoPokemon.color + " " + nuevoPokemon.puntosAtaque;
    elementoEnemigo.innerHTML = nuevoPokemon.nombre + " " + nuevoPokemon.color + " " + nuevoPokemon.puntosAtaque;
    pokeLista.appendChild(elemento);
    pokeLista2.appendChild(elementoEnemigo);
  })
}

/*function mostrarPokemons(){
var listaPokemon = document.getElementById("listaPokemon");
var lista = document.createElement("select");
nuevoPokemon.forEach(function(pokemonCreado){
  var elemento = document.createElement("option");
  elemento.innerText = nuevoPokemon.nombre + " " + nuevoPokemon.color + " " + nuevoPokemon.puntosAtaque;
  listaPokemon.appendChild(elemento);
})
}
*/
