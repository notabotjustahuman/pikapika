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
          speed: data['stats'][0]['base_stat'],
          spattack: data['stats'][2]['base_stat'],
          spdefense: data['stats'][1]['base_stat'],
          abilities: data['abilities'][0]['ability']['name'],
          abilities2: data['abilities'][1]['ability']['name'],
          sprite: data['sprites']['front_default']
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

pokemonFinder()

displayPokemon = () => {
  let cont = document.createElement('div', 'test')
  let h1 = document.createElement('h1')
  let img = document.createElement('img')
  let p1 = document.createElement('p1')
  let p2 = document.createElement('p2')
  let p3 = document.createElement('p3')
  let p4 = document.createElement('p4')
  let p5 = document.createElement('p5')
  let p6 = document.createElement('p6')
  let p7 = document.createElement('p7')
  let p8 = document.createElement('p8')

  h1.innerText = pokemon['name']
  p1.innerText = pokemon['hp']
  p2.innerText = pokemon['attack']
  p3.innerText = pokemon['defense']
  p4.innerText = pokemon['speed']
  p5.innerText = pokemon['spattack']
  p6.innerText = pokemon['spdefense']
  p7.innerText = pokemon['abilities']
  p8.innerText = pokemon['abilities2']
  img.setAttribute('src', pokemon['sprite'])
  img.setAttribute('class', 'picture')
  cont.setAttribute('class', 'info')
  cont.appendChild(h1)
  cont.appendChild(p1)
  cont.appendChild(p2)
  cont.appendChild(p3)
  cont.appendChild(p4)
  cont.appendChild(p5)
  cont.appendChild(p6)
  cont.appendChild(p7)
  cont.appendChild(p8)
  cont.appendChild(img)
  document.body.appendChild(cont)
}

setTimeout(displayPokemon, 300)
// displayPokemon()
