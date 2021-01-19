import {Pokemon} from "./pokemon.js";
import {pokemonsData} from './pokemons-data';

const pokemons = () => {
    return pokemonsData.map((data) => new Pokemon(data));
};

export default pokemons;
