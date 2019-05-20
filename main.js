const ALL_POKEMON = []

function pokemonFinder() {
  var pokedex = prompt('Enter Pokémon ID Number')
  console.log(`searched for ${pokedex}`);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadychange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
      for (item in data) {
        let pokemon = new Pokemon(item,
                                  data[item].name,)
                                  // date[item].type,)
        // console.log(Pokemon)
      }
    }
  }
  xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/id/${pokedex}.json`, true);
  xhttp.send();
}

class Pokemon {
  constructor(name) {
    this.name = name
    // this.type = type
    if (ALL_POKEMON.length < 810) {
      ALL_POKEMON.push(this)
    }
  }
}

pokemonFinder()
