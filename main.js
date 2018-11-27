let button1 = document.getElementById('one');
let button2 = document.getElementById('two');
let button3 = document.getElementById('three');
let button4 = document.getElementById('four');
let button5 = document.getElementById('five');


class Trainer{
  constructor(){
    this.pokemon=[];
  }
  //puts pokemon in class
  all(){
    return this.pokemon;
  }
  add(fighters){
    this.pokemon.push(fighters);
  }
  get(name){
    for(let i=0; i<this.pokemon.length; i+=1){
      if (name === this.pokemon[i].name){
        return this.pokemon[i];
      }
    }
  }
}


let Jim = new Trainer();
let King = new Trainer();
let Evelynn = new Trainer();
let Red = new Trainer();
let RashellHell = new Trainer();


class Pokemon {
  constructor(name, sprite, hp, attack, defense, abilities) {
    this.name= name;
    this.sprite= sprite;
    this.hp= hp;
    this.attack= attack;
    this.defense= defense;
    this.abilities= abilities;
  }

  display(){
    let img= document.getElementById("pokemonImg");

    img.src = this.sprite;
    let nameEl= document.getElementById("Name");
    nameEl.innerHTML = this.name;
    let abilityEl= document.getElementById("Ability");
    abilityEl.innerHTML = "Ability: " + this.abilities;
    let attackEl= document.getElementById("Attack");
    attackEl.innerHTML= "Attack: " + this.attack;
    let defenseEl= document.getElementById("Defense");
    defenseEl.innerHTML= "Defense: " + this.defense;
    let hpEl= document.getElementById("Health")
    hpEl.innerHTML= "Health: " + this.hp;

  }


}

//--------POKEMON TYRANTRUM-----

axios.get("https://fizal.me/pokeapi/api/v2/name/tyrantrum.json")
.then(function (answer){

  //let so you can call it later in param
  let name = answer.data.name;

  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name;
  let Tyrantrum = new Pokemon( name, sprite, hp, attack ,defense, ability );

  Evelynn.pokemon.push(Tyrantrum);
});

//--------POKEMON ENTEI-----

axios.get("https://fizal.me/pokeapi/api/v2/name/entei.json")
.then(function (answer){
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Entei = new Pokemon( name, sprite, hp, attack ,defense, ability );

  Evelynn.pokemon.push(Entei);
});

//--------POKEMON PANGORO-----

axios.get("https://fizal.me/pokeapi/api/v2/name/pangoro.json")
.then(function (answer){

  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Pangoro = new Pokemon( name, sprite, hp, attack ,defense, ability );

  Evelynn.pokemon.push(Pangoro);
});
let counter = 0;
function swit5(){
  counter = (counter + 1) % Evelynn.pokemon.length;
  Evelynn.pokemon[counter].display();
}
button5.addEventListener('click', swit5);
// end jodi ---------------------------------------------------------------------------------------------


//START OF ARLETH

//--------POKEMON CHARMANDER-----

axios.get("https://fizal.me/pokeapi/api/v2/name/charmander.json")
.then(function (answer){
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Charmander = new Pokemon( name, sprite, hp, attack ,defense, ability );

  Jim.pokemon.push(Charmander);
});

//--------POKEMON SMEARGLE-----

axios.get("https://fizal.me/pokeapi/api/v2/name/smeargle.json")
.then(function (answer){
  //console.log(answer);
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Smeargle = new Pokemon( name, sprite, hp, attack ,defense, ability );


  Jim.pokemon.push(Smeargle);
});

//--------POKEMON DEWGONG-----

axios.get("https://fizal.me/pokeapi/api/v2/name/dewgong.json")
.then(function (answer){
  //console.log(answer);
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Dewgong = new Pokemon( name, sprite, hp, attack ,defense, ability );


  Jim.pokemon.push(Dewgong);
});

function swit1(){
  counter = (counter + 1) % Jim.pokemon.length;
  Jim.pokemon[counter].display();
}
button1.addEventListener('click', swit1);
//END OF ARLETH


//START OF RASHELL

//--------POKEMON NIDORINO-----

axios.get("https://fizal.me/pokeapi/api/v2/name/nidorino.json")
.then(function (answer){

  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Nidorino = new Pokemon( name, sprite, hp, attack ,defense, ability );


  RashellHell.pokemon.push(Nidorino);
});

//--------POKEMON STEELIX-----

axios.get("https://fizal.me/pokeapi/api/v2/name/steelix.json")
.then(function (answer){
  //console.log(answer);
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Steelix = new Pokemon( name, sprite, hp, attack ,defense, ability );


  RashellHell.pokemon.push(Steelix);
});

//--------POKEMON TOTODILE-----

axios.get("https://fizal.me/pokeapi/api/v2/name/totodile.json")
.then(function (answer){

  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Totodile = new Pokemon( name, sprite, hp, attack ,defense, ability );


  RashellHell.pokemon.push(Totodile);
});


function swit2(){
  counter = (counter + 1) % RashellHell.pokemon.length;
  RashellHell.pokemon[counter].display();
}
button2.addEventListener('click', swit2);
//END OF RASHELL


//START OF SAVON

//--------POKEMON GRENINJA-----

axios.get("https://fizal.me/pokeapi/api/v2/name/greninja.json")
.then(function (answer){
  //console.log(answer);
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Greninja = new Pokemon( name, sprite, hp, attack ,defense, ability );


  King.pokemon.push(Greninja);
});

//--------POKEMON MAGEARNA-----

axios.get("https://fizal.me/pokeapi/api/v2/name/magearna.json")
.then(function (answer){

  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Magearna = new Pokemon( name, sprite, hp, attack ,defense, ability );


  King.pokemon.push(Magearna);
});

//--------POKEMON ARIADOS-----

axios.get("https://fizal.me/pokeapi/api/v2/name/ariados.json")
.then(function (answer){
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Ariados = new Pokemon( name, sprite, hp, attack ,defense, ability );


  King.pokemon.push(Ariados);
});


function swit3(){
  counter = (counter + 1) % King.pokemon.length;
  King.pokemon[counter].display();
}
button3.addEventListener('click', swit3);

//START OF ANDRE

//--------POKEMON TYPHLOSION-----

axios.get("https://fizal.me/pokeapi/api/v2/name/typhlosion.json")
.then(function (answer){
  //console.log(answer);
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Typhlosion = new Pokemon( name, sprite, hp, attack ,defense, ability );


  Red.pokemon.push(Typhlosion);
});

//--------POKEMON VOLCANION-----

axios.get("https://fizal.me/pokeapi/api/v2/name/volcanion.json")
.then(function (answer){
  //console.log(answer);
  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Volcanion = new Pokemon( name, sprite, hp, attack ,defense, ability );


  Red.pokemon.push(Volcanion);
});

//--------POKEMON SOLGALEO-----

axios.get("https://fizal.me/pokeapi/api/v2/name/solgaleo.json")
.then(function (answer){

  //let so you can call it later in param
  let name = answer.data.name;
  let sprite = answer.data.sprites.front_default;
  let hp = answer.data.stats[5].base_stat;
  let attack =  answer.data.stats[4].base_stat;
  let defense = answer.data.stats[3].base_stat;
  let ability =answer.data.abilities[0].ability.name
  let Solgaleo = new Pokemon( name, sprite, hp, attack ,defense, ability );


  Red.pokemon.push(Solgaleo);
});
function swit4(){
  counter = (counter + 1) % Red.pokemon.length;
  Red.pokemon[counter].display();
}
button4.addEventListener('click', swit4);
