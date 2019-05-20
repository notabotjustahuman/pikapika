const ALL_POKEMON = []
pokemon_sorted = { }



function pokemonFinder() {
  var pokedex = prompt('Enter Pokémon ID Number')
  var xhttp = new XMLHttpRequest();
  xhttp.onreadychange = function() {
    if (this.readyState == 4 && this.status = 200) {
      let info = JSON.parse(this.responseText)
      for (item in info) {
        let pokemon = new Pokemon(item,
                                  data[item].name,
                                  date[item].type,)
        console.log(pokemon)
      }
    }
  }
  xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/id/${pokedex}.json`), true);
  xhttp.send();
}

pokemonFinder()
