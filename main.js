function pokemonFinder() {
  var pokedex = prompt('Enter Pokémon Name or ID')
  var xhttp = new XMLHttpRequest();
  console.log(`searched for ${pokedex}`)
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
        user = {
          name: data['name'],
          hp: data['stats'][5]['base_stat'],
          attack: data['stats'][4]['base_stat'],
          defense: data['stats'][3]['base_stat'],
          speed: data['stats'][0]['base_stat'],
        }
      }
    }
  if (isNaN(pokedex)) {
    xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/name/${pokedex.toLowerCase()}.json`, true);
  } else {
    xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/id/${pokedex}.json`, true);
  }
  xhttp.send();
}

// pokemonFinder()
