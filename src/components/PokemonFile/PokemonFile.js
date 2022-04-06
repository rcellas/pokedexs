import React from 'react';
import './PokemonFile.scss'

const Pokemon =(props)=>{
    const {pokemon}=props;
    console.log('da',pokemon)
    return(
        <div className='pokemonCard'>
          <div className='pokemonImg'>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
          </div>
          <div>
              <div>
                  <h3>{pokemon.name}</h3>
                  <p>#{pokemon.id}</p>
              </div>
              <div>
                  <div>
                     {/* {pokemon.types.map((type,idx)=>{
                         return(
                             <div key={idx}>{type.name}</div>
                         )
                     })}  */}
                  </div>
              </div>
            </div>  
        </div>
    )
}

export default Pokemon;