var userInput = document.getElementById('searchBar')
var xhttp = new XMLHttpRequest();

function pokemonFinder() {
  var pokedex = userInput.value
  console.log(`searched for ${pokedex}`)
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText)
      let ditto = [];
      for (let i = 0; i < data['abilities'].length; i++) {
        ditto.push(data['abilities'][i]['ability']['name']);
      }
      ditto = ditto.toString().replace(/,/g , ', ');
        p = new Pokemon (
          data['name'],
          data['sprites']['front_default'],
          data['stats'][5]['base_stat'],
          data['stats'][4]['base_stat'],
          data['stats'][3]['base_stat'],
          data['stats'][0]['base_stat'],
          data['stats'][2]['base_stat'],
          data['stats'][1]['base_stat'],
          ditto
        )
          me.party.push(p)
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

  h1.innerText = p['name']
  p1.innerText = `Hp: ${p['hp']}`
  p2.innerText = `Attack: ${p['attack']}`
  p3.innerText = `Defense: ${p['defense']}`
  p4.innerText = `Speed: ${p['speed']}`
  p5.innerText = `Sp. Attack: ${p['spattack']}`
  p6.innerText = `Sp. Defense: ${p['spdefense']}`

  img.setAttribute('src', p['sprite'])
  img.setAttribute('class', 'picture')
  cont.setAttribute('class', 'info')
  cont.appendChild(h1)
  cont.appendChild(img)
  cont.appendChild(p1)
  cont.appendChild(p2)
  cont.appendChild(p3)
  cont.appendChild(p4)
  cont.appendChild(p5)
  cont.appendChild(p6)
  document.body.appendChild(cont)

  Object.keys(p).forEach(function(key) {
    if (key.includes('abilities') === true) {
      let element = document.createElement(key)
      element.innerText = `${key}: ${p[key]}`
      cont.appendChild(element)
    }
  });

  userInput.value=''
}

// Trainer
class Billy {
  constructor() {
    this.party = []
  }
  get(name) {
      xhttp.open("GET", `http://fizal.me/pokeapi/api/v2/name/${name.toLowerCase()}.json`, true);
      xhttp.send();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          let data = JSON.parse(this.responseText)
          let ditto = [];
          for (let i = 0; i < data['abilities'].length; i++) {
            ditto.push(data['abilities'][i]['ability']['name']);
          }
          ditto = ditto.toString().replace(/,/g , ', ');
          let p = new Pokemon(
              data['name'],
              data['sprites']['front_default'],
              data['stats'][5]['base_stat'],
              data['stats'][4]['base_stat'],
              data['stats'][3]['base_stat'],
              data['stats'][0]['base_stat'],
              data['stats'][2]['base_stat'],
              data['stats'][1]['base_stat'],
              ditto
            )
          console.log(p)
          return p
      }
    }
  }
  all() {
    return this.party
  }
}

me = new Billy();

class Pokemon {
  constructor(name, sprite, hp, attack, defense, speed, spattack, spdefense, abilities) {
    this.name = name
    this.sprite = sprite
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.speed = speed
    this.spattack = spattack
    this.spdefense = spdefense
    this.abilities = abilities
  }
}
