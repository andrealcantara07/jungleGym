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
// -----------------------------------------------------------------------------------------
