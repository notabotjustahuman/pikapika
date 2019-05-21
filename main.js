function pokemonFinder() {
  var pokedex = prompt('Enter Pokémon Name or ID')
  var xhttp = new XMLHttpRequest();
  console.log(`searched for ${pokedex}`)
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
        pokemon = {
          name: data['name'],
          hp: data['stats'][5]['base_stat'],
          attack: data['stats'][4]['base_stat'],
          defense: data['stats'][3]['base_stat'],
          spattack: data['stats'][2]['base_stat'],
          spdefense: data['stats'][1]['base_stat'],
          speed: data['stats'][0]['base_stat'],
          abilities: data['abilities'][0]['ability']['name'],
          abilities2: data['abilities'][1]['ability']['name']
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
