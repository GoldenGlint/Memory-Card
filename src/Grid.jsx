import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function press(){
    console.log("Button Clicked");
}

export function Grid({PokemonList, CurrScore, BestScore, setCurrScore, setBestScore, Clicked, setClicked}){
    return(
        <div className="Grid">
            {PokemonList.map((Pokemon)=>{
                return(
                    <button className="card" key={Pokemon.id} onClick={press}>
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