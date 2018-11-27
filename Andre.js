//START OF ANDRE'S code

class TrainerAndre {
  constructor(name){
    this.name= name;
    this.pokemon = [];
  }
}
let typhlosion = new Trainer('typhlosion');
let volcanion = new Trainer('volcanion');
let solgaleo = new Trainer('solgaleo');

let andre = new Trainer('Andre');

let pokeName;

class PokemonAndre{
  constructor(img, name, hp, attack, defense, abilities){
    this.img = img,
    this.name = name,
    this.hp = hp,
    this.attack = attack,
    this.defense = defense,
    this.abilities = abilities
  }
  render(){
    let pokeinfo = document.querySelector('ul');
    let imgAquire = document.querySelector('#poke1');
    pokeinfo.innerHTML = ["</br>"+this.name+"</br>HP: " + this.hp, "</br> Attack: " + this.attack,  "</br>Defense: " + this.defense, "</br>Abilities: " + this.abilities];
    imgAquire.src = this.img;
  }

}
axios.get('https://fizal.me/pokeapi/api/v2/name/'+typhlosion.name+'.json')
.then(run);



function run (poke1){
  let img = "http://pa1.narvii.com/6395/8882ca52ae8c93fe9d7601770c074d8072f27a13_00.gif";
  let name = "Typhlosion";
  let hp = poke1.data.stats[5].base_stat;
  let attack = poke1.data.stats[4].base_stat;
  let defense = poke1.data.stats[3].base_stat;

  let moves = poke1.data.abilities;
  let allMoves = [];
  let concat = '';

  for (let i=0;i<moves.length;i++){
    allMoves.push(moves[i].ability.name);
    concat += allMoves[i] + ', ';


  }



  let pokemon1 = new Pokemon(img, name, hp, attack, defense, concat);


  andre.pokemon.push(pokemon1);


  axios.get('https://fizal.me/pokeapi/api/v2/name/'+volcanion.name+'.json')
  .then(run1);


  function run1 (poke2){
    let img = "https://vignette.wikia.nocookie.net/pokemon/images/2/23/Volcanion_XY.gif/revision/latest?cb=20151212120111";
    let name = "Volcanion";
    let hp = poke2.data.stats[5].base_stat;
    let attack = poke2.data.stats[4].base_stat;
    let defense = poke2.data.stats[3].base_stat;

    let moves = poke2.data.abilities;
    let allMoves = [];
    let concat = '';

    for (let i=0;i<moves.length;i++){
      allMoves.push(moves[i].ability.name);
      concat += allMoves[i] + ', ';

    }


    let pokemon2 = new Pokemon(img, name, hp, attack, defense, concat);
    andre.pokemon.push(pokemon2);


    pokemon2.render();

  }
  axios.get('https://fizal.me/pokeapi/api/v2/name/'+solgaleo.name+'.json')
  .then(run2);


  function run2 (poke3){
    let img = "http://i.imgur.com/aENiQLZ.gif";
    let name = "Solgaleo";
    let hp = poke3.data.stats[5].base_stat;
    let attack = poke3.data.stats[4].base_stat;
    let defense = poke3.data.stats[3].base_stat;

    let moves = poke3.data.abilities;
    let allMoves = [];
    let concat = '';

    for (let i=0;i<moves.length;i++){
      allMoves.push(moves[i].ability.name);
      concat += allMoves[i] + ', ';

    }


    let pokemon3 = new Pokemon(img, name, hp, attack, defense, concat);

    andre.pokemon.push(pokemon3);

    // pokemon3.render();

  }
  let counter = 0;

  function swit(){

    counter = (counter + 1) % andre.pokemon.length;
    andre.pokemon[counter].render();


  }
  button.addEventListener('click', swit);
  //END OF ANDRE'S CODE
