import React from 'react';
import Button from '../Button';
import s from './pokemon-button.module.css';

const PokemonButton = ({pokemon, onClick}) => {
    return (
        <Button className={s['pokemon-btn']} onClick={onClick}>
                <span className={s.lvl}>Lv. {pokemon.level}</span>
                <img src={pokemon.image} className={s.sprite} alt={pokemon.name}/>
                <div className={s.details}>
                    <h2 className={s.name}>{pokemon.name}</h2>
                </div>
        </Button>
    );
}

export default PokemonButton;
