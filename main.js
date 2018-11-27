
// Arleth's code//
axios.get("https://fizal.me/pokeapi/api/v2/name/charmander.json")
.then(function(response){
  console.log(response.data)
     let charmander = new Pokemon (response.data.id,
          response.data.name,
          response.data.stats[3].base_stat,
          response.data.stats[4].base_stat,
          response.data.stats[5].base_stat,
          response.data.abilities[0].ability


      )
     document.getElementById('c1').innerHTML= "id  - "+charmander.id;
      document.getElementById('c2').innerHTML="name - "+charmander.name;
      document.getElementById('c3').innerHTML="defense - "+charmander.defense;
      document.getElementById('c4').innerHTML="attack - "+charmander.attack;
      document.getElementById('c5').innerHTML="hp - "+charmander.hp;

});
class trainor {
  constructor(){
    this.pokemon=[]
  }
  all(){
    return this.pokemon;
  }
  add(train){
    this.pokemon.push(train);
  }
}
get(name){
  for(let i=o; i<this.pokemon.length; i++){
    if(name == this.pokemon[i].name){
      return this.pokemon[i]
    }
  }
}
let Jim = new trainer();

// end of Arleth's code //

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
let Evelynn = new Trainer();
class Pokemon {
  constructor(name, sprite, hp, attack, defense, abilities) {
    this.name= name;
    this.sprite= sprite;
    this.hp= hp;
    this.attack= attack;
    this.defense= defense;
    this.abilities= abilities;
  }
//shows pokemon and info
  display(){
    let img= document.getElementById(this.name+"Img")
    console.log(img);
    img.src = this.sprite;
    let nameEl= document.getElementById(this.name + "Name");
    nameEl.innerHTML = this.name;
    let abilityEl= document.getElementById(this.name + "Ability");
    abilityEl.innerHTML = "Ability: " + this.abilities;
    let attackEl= document.getElementById(this.name + "Attack");
    attackEl.innerHTML= "Attack: " + this.attack;
    console.log(attackEl);
    let defenseEl= document.getElementById(this.name + "Defense");
    defenseEl.innerHTML= "Defense: " + this.defense;
    console.log(defenseEl);
    let hpEl= document.getElementById(this.name + "Health")
    hpEl.innerHTML= "Health: " + this.hp;
    console.log(hpEl)
  }

}
axios.get("http://fizal.me/pokeapi/api/v2/name/tyrantrum.json")
.then(function (answer){
console.log(answer);
//let so you can call it later in param
let name = answer.data.name;
console.log(answer.data.name);
let sprite = answer.data.sprites.front_default;
let hp = answer.data.stats[5].base_stat;
let attack =  answer.data.stats[4].base_stat;
let defense = answer.data.stats[3].base_stat;
let ability =answer.data.abilities[0].ability.name;
let Tyrantrum = new Pokemon( name, sprite, hp, attack ,defense, ability );
Tyrantrum.display();
console.log(Tyrantrum);
return Tyrantrum;
});

axios.get("http://fizal.me/pokeapi/api/v2/name/entei.json")
.then(function (answer){
console.log(answer);
//let so you can call it later in param
let name = answer.data.name;
let sprite = answer.data.sprites.front_default;
let hp = answer.data.stats[5].base_stat;
let attack =  answer.data.stats[4].base_stat;
let defense = answer.data.stats[3].base_stat;
let ability =answer.data.abilities[0].ability.name
let Entei = new Pokemon( name, sprite, hp, attack ,defense, ability );
 Entei.display();
})

axios.get("http://fizal.me/pokeapi/api/v2/name/pangoro.json")
.then(function (answer){
console.log(answer);
//let so you can call it later in param
let name = answer.data.name;
let sprite = answer.data.sprites.front_default;
let hp = answer.data.stats[5].base_stat;
let attack =  answer.data.stats[4].base_stat;
let defense = answer.data.stats[3].base_stat;
let ability =answer.data.abilities[0].ability.name
let Pangoro = new Pokemon( name, sprite, hp, attack ,defense, ability );
Pangoro.display();
})
