import React, {useContext} from 'react';
import MessageBig from "../../components/MessageBig";
import pokemons from "../../models/pokemons";
import s from './pokemon-choice.module.css';
import PokemonButton from "../../components/PokemonButton";
import {random} from "../../services/utils";
import Game from "../../services/game";
import GameContext from "../../context/GameContext";

const PokemonChoicePage = ({history: {push}}) => {

    const gameContext = useContext(GameContext);

    const selectPokemon = playerPokemon => {
        const enemyPokemons = pokemons().filter(pokemon => pokemon.name !== playerPokemon.name);
        const enemyPokemon = enemyPokemons[random(0, enemyPokemons.length)];
        gameContext.game = new Game(playerPokemon, enemyPokemon);
        push('/game');
    }

    return (
        <div className={s.page}>
            <div>
                <MessageBig color={'#ffc650'}>Выбери своего покемона</MessageBig>
                <div className={s.pokemons}>
                    {pokemons().map((pokemon, index) => <PokemonButton onClick={() => selectPokemon(pokemon)} key={index}
                                                                       pokemon={pokemon}>{pokemon.name}</PokemonButton>)}
                </div>
            </div>
        </div>
    )
}

export default PokemonChoicePage;
