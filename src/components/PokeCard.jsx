import React from 'react'
import "../styles/PokeCard.css";
const PokeCard = ({ item }) => {
    return (
        <div className='poke-card'>
            <img src={"https://freepngimg.com/thumb/pokemon/37444-9-pikachu-file-thumb.png"} alt="" />
            <div className='poke-about'>
                <p>Name: {item.name}</p>
                <p>Description: {"This is a Pokemon"}</p>
            </div>
        </div>
    )
}

export default PokeCard