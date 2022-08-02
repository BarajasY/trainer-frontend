import React, { useState, useEffect } from 'react';
import './TrainerInfo.css';
import { useParams } from 'react-router-dom';

const TrainerInfo = () => {
    const { name } = useParams();
    const [Pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const data = await fetch(`https://yahirmb-trainers-backend.herokuapp.com/trainers/${name}`)
            const formated_data = await data.json();
            setPokemons(formated_data);
        }

        getPokemons();
    }, [name])


    return (
        <div className="info_container">
            <div className="info_content">
                <div className="trainer_name" >
                    <h1><span>{name}</span> has used the following pokemon</h1>
                </div>
                <div className="wrapper">
                    {Pokemons.map((result, index) => (
                        <div className="pokemon_card" key={index}>
                            <div className="card_header">
                                <h1>{result.name}</h1>
                                <img src={result.image} alt={result.name} />
                                <h1>{result.region}</h1>
                            </div>
                            <div className="card_footer">
                                <p><span>HP</span>{result.hp}</p>
                                <p><span>ATK</span>{result.atk}</p>
                                <p><span>DEF</span>{result.def}</p>
                                <p><span>S.ATK</span>{result.satk}</p>
                                <p><span>S.DEF</span>{result.sdef}</p>
                                <p><span>SPD</span>{result.spd}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default TrainerInfo