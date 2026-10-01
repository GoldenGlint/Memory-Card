import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

class Pokemon{
    id
    name
    photo
    constructor(id, name, photo){
        this.id=id;
        this.name=name;
        this.photo=photo;
    }
    get id(){
        return this.id;
    }
    get name(){
        return this.name;
    }
    get photo(){
        return this.photo;
    }



};

async function getPokemon(id){
  const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokeData=await response.json();
  const name=pokeData.name;
  const photo=pokeData.sprites.other["official-artwork"].front_default;
  const poke=new Pokemon(id, name, photo)
  return poke;
}

async function getCards(){
    let cards=[];
    const minCeiled=Math.ceil(1);
    const maxFloored=Math.ceil(1000);
    let numbers=[];
    while(cards.length<12){
      const num=Math.floor((Math.random() * (maxFloored - minCeiled + 1) + minCeiled));
      if(!numbers.includes(num)){
        numbers.push(num);
        let pokemon= await getPokemon(num);
        cards.push(pokemon);
        //console.log(pokemon);

      }
    }
    console.log("Number of cards:", cards.length);
    console.log(cards);
    return cards;
}

export function Game(){
    const[CurrScore, setCurrScore]=useState(0);
    const[BestScore, setBestScore]=useState(0);
    const[Cards, setCards]=useState([]);
    useEffect(()=>{
            console.log("Getting Cards");
            getCards();
        }, [])

    return(

        
        <h1>Hello World</h1>
        
    )
}