var userInput = document.getElementById('searchBar')

function pokemonFinder() {
  var pokedex = userInput.value
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
          sprite: data['sprites']['front_default']
        }
        if (document.querySelector('.info') === null) {
          displayPokemon()
        }
        else {
          var teamRocket = document.querySelector('.info')
          teamRocket.remove()
          displayPokemon()
        }
      }
    }
  if (isNaN(pokedex)) {
    xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/name/${pokedex.toLowerCase()}.json`, true);
  }
  else {
    xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/id/${pokedex}.json`, true);
  }
  xhttp.send();
}

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

  h1.innerText = pokemon['name']
  p1.innerText = `Hp: ${pokemon['hp']}`
  p2.innerText = `Attack: ${pokemon['attack']}`
  p3.innerText = `Defense: ${pokemon['defense']}`
  p4.innerText = `Speed: ${pokemon['speed']}`
  p5.innerText = `Sp. Attack: ${pokemon['spattack']}`
  p6.innerText = `Sp. Defense: ${pokemon['spdefense']}`
  // if ()
  p7.innerText = `Ability: ${pokemon['abilities']}`
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
  cont.appendChild(img)
  document.body.appendChild(cont)

  userInput.value=''
}

class Pokemon {
  constructor(name, hp, attack, defense, speed, spattack, spdefense, abilities) {
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.speed = speed
    this.spattck = spattack
    this.spdefense = spdefense
    this. ability = abilities
  }
}
