import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

export function Grid({PokemonList}){
    return(
        <div className="Grid">
            {PokemonList.map((Pokemon)=>{
                return(
                    <button className="card" key={Pokemon.id}>
                        <img src={Pokemon.photo}/>
                        <div className="footer">
                            <p>{Pokemon.id}</p>
                            <p>{Pokemon.name}</p>
                        </div>
                    </button>
                )
            })}
        </div>
    
    )

}