
import './App.css';

import { useState } from 'react';
import  Axios  from 'axios';


function App() {

  const [pokemonName,setPokemonName]= useState("");
  const[pokemonChosen,setPokemonChosen]= useState(false)
  const [pokemon,setPokemon] = useState({
    name: "",
    img: "",
    hp :"",
    attack :"",
    defence :"",
    type :"",

  })

  const SearchPokemon = () =>{
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((responce)=>{
        setPokemon({
                    name: pokemonName,
                    img: responce.data.sprites.front_default,
                    hp :responce.data.stats[0].base_stat,
                    attack :responce.data.stats[1].base_stat,
                    defence :responce.data.stats[2].base_stat,
                    type :responce.data.types[0].type.name,

        });
        setPokemonChosen(true)
      })
  }
  return (
        <div className='App'>

          <div className='Title'>
              <h1>Pokemon Cards</h1>
              <input type="text" placeholder='Search hear' 
              onChange={(event)=>{
                setPokemonName(event.target.value);
              }}
              />
              <button onClick={SearchPokemon}>Search Pokemon</button>
          </div>
          <div className='Displaypokemon'>
            { !pokemonChosen ? (<h1>Please Choose Pokemon</h1>)
            :(
              <div className='pokemoncard'>
                    <img src={pokemon.img}/>
                    <h1>Name:{pokemon.name}</h1>
                    <h1>HP:{pokemon.hp}</h1>
                     <h1>Attack:{pokemon.attack}</h1>
                     <h1>Defence:{pokemon.defence}</h1>
                     <h1>Type:{pokemon.type}</h1>
            </div>
            )}
            </div>

        </div>
  );
}

export default App;
