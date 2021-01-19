const API_URL = 'https://reactmarathon-api.netlify.app/api/';


async function request(url, params) {
    const query = paramsToQuery(params);
    if (query) {
        url += '?' + query;
    }

    const response = await fetch(API_URL + url, {method: 'GET'});
    return await response.json();

}

function paramsToQuery(params) {
    return Object.keys(params).map(key => key + '=' + escape(params[key])).join('&');
}

export default {
    fetchAll: async () => request('pokemons', {}),
    findRandom: async () => request('pokemons', {random: true}),
    findByName: async (name) => request('pokemons', {name}),
    findById: async (id) => request('pokemons', {id}),
    makeDamage: async ({id: playerPokemonId}, {id: playerActionId}, {id: enemyId}) => request('fight', {
        player1id: playerPokemonId,
        attackId: playerActionId,
        player2id: enemyId
    }),
}


