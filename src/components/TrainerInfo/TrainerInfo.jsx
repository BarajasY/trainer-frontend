import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TrainerInfo.css';
import { useParams } from 'react-router-dom';

const TrainerInfo = () => {
    const { name } = useParams();
    const [Pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const data = await fetch(`http://localhost:3200/trainers/${name}`)
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
                        <motion.div className="pokemon_card" key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2, delay: index * .2 }}>
                            <div className="card_header">
                                <h1>{result.name}</h1>
                                <img src={result.image} alt={result.name} />
                                <h1>{result.region}</h1>
                            </div>
                            <div className="card_footer">
                                <div className="progress_bar">
                                    <div className="fill_bar" style={{ width: `${result.hp * 100 / 255}%` }}>
                                        <p>HP</p>
                                    </div>
                                </div>
                                <div className="progress_bar">
                                    <div className="fill_bar" style={{ width: `${result.atk * 100 / 255}%` }}>
                                        <p>ATK</p>
                                    </div>
                                </div>
                                <div className="progress_bar">
                                    <div className="fill_bar" style={{ width: `${result.def * 100 / 255}%` }}>
                                        <p>DEF</p>
                                    </div>
                                </div>
                                <div className="progress_bar">
                                    <div className="fill_bar" style={{ width: `${result.satk * 100 / 255}%` }}>
                                        <p>S.ATK</p>
                                    </div>
                                </div>
                                <div className="progress_bar">
                                    <div className="fill_bar" style={{ width: `${result.sdef * 100 / 255}%` }}>
                                        <p>S.DEF</p>
                                    </div>
                                </div>
                                <div className="progress_bar">
                                    <div className="fill_bar" style={{ width: `${result.spd * 100 / 255}%` }}>
                                        <p>SPD</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default TrainerInfo