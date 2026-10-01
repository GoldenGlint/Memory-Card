import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'



export function Grid({PokemonList, CurrScore, BestScore, setCurrScore, setBestScore, Clicked, setClicked}){
    function press(Pokemon){
        console.log("Button Clicked");
        let currID=Pokemon.id;
        console.log(currID);
        if(Clicked.includes(currID)){
            console.log("Game Over Stuff");
            setBestScore((prevBestScore)=>(Math.max(prevBestScore, CurrScore)));
            setCurrScore(0);

        }
        else{
            console.log("Keep Going");
            setCurrScore((prevCurrScore)=>(prevCurrScore+1));
            setClicked((prevClick)=>{
                return [...prevClick, currID];
            })

        }
    
    }
    return(
        <div className="Grid">
            {PokemonList.map((Pokemon)=>{
                return(
                    <button className="card" key={Pokemon.id} onClick={()=>press(Pokemon)}>
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