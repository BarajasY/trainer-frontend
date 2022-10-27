import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Trainers.css';

const Trainers = () => {
    const [Trainers, setTrainers] = useState([])

    useEffect(() => {
        const fetchTrainers = async () => {
            const data = await fetch('https://yahirmb-trainers-backend.herokuapp.com/trainers');
            const format_data = await data.json();
            setTrainers(format_data);
        }
        fetchTrainers();
    }, [])


    return (
        <div className="trainers_container">
            <div className="trainers_content">
                {Trainers.map((object, key) => (
                    <Link to={object.name}>
                        <motion.div className="trainer_data" key={key} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .2, delay: key * .2 }}>
                            <Link to={object.name}>{object.name}</Link>
                            <img src={object.image} alt={object.name} />
                            <h1>{object.region}</h1>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default Trainers