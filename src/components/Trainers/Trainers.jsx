import React, { useState, useEffect } from 'react';
import './Trainers.css';

const Trainers = () => {
    const [Trainers, setTrainers] = useState([])

    const fetchTrainers = async () => {
        const data = await fetch('https://yahirmb-trainers-backend.herokuapp.com/trainers');
        const format_data = await data.json();
        setTrainers(format_data);
    }

    useEffect(() => {
        fetchTrainers();
    }, [])


    return (
        <div className="trainers_container">
            <div className="trainers_content">
                {Trainers.map((object, key) => (
                    <div className="trainer_data" key={key}>
                        <h1>{object.name}</h1>
                        <img src={object.image} alt={object.name} />
                        <h1>{object.region}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trainers