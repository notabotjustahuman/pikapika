const ALL_POKEMON = []

function pokemonFinder() {
  var pokedex = prompt('Enter Pokémon ID Number')
  var xhttp = new XMLHttpRequest();
  console.log(`searched for ${pokedex}`)
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
      console.log(data)
      for (item in data) {
        let pokemon = new Pokemon(item,
                                  data[item].name)
                                  // date[item].type,)
        ALL_POKEMON.push(pokemon)
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
  }
}

pokemonFinder()
