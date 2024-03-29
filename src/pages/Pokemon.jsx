import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPoke, fetchPoke } from '../redux/AppReducer/action';
import PokeCard from '../components/PokeCard';
import "../styles/pokemon.css"
const Pokemon = () => {
    const data = useSelector((state) => state.pokemon);
    const dispatch = useDispatch();
    const [cards, setcards] = useState(0);
    console.log("loading...");
    console.log(data);
    console.log(cards);
    useEffect(() => {
        dispatch(fetchPoke());
    }, []);
    useEffect((e)=>{
        dispatch(addPoke(cards))
    },[cards])
    return (
        <div className='poke'>
            <div className='pokemon-cards'>
                {data && data.map((ele, index) => (
                    <PokeCard item={ele} />
                ))}
            </div>
            <button onClick={(e)=> setcards(prev=>prev+6)}>Load More...</button>
        </div>
    )
}

export default Pokemon