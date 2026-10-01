import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'



export function Grid({PokemonList, setPokemonList, CurrScore, BestScore, setCurrScore, setBestScore, Clicked, setClicked, getCards}){
    function shufflePokemon() {
        setPokemonList(prevList => {
            const shuffled = [...prevList];

            for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }

            return shuffled;
        });
    }
    async function press(Pokemon){
        console.log("Button Clicked");
        let currID=Pokemon.id;
        console.log(currID);
        if(Clicked.includes(currID)){
            console.log("Game Over Stuff");
            setBestScore((prevBestScore)=>(Math.max(prevBestScore, CurrScore)));
            setCurrScore(0);
            let newPokemonList=await getCards();
            setPokemonList(newPokemonList);
            setClicked([]);


        }
        else{
            console.log("Keep Going");
            setCurrScore((prevCurrScore)=>(prevCurrScore+1));
            setClicked((prevClick)=>{
                return [...prevClick, currID];
            })
            shufflePokemon();

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