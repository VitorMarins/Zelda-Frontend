import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import './Dungeon.css';

export default function Dungeon({ data }) {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const gamesMap = async (data) => {
            setLoading(true);
            const gamePromises = data.appearances.map(async (game) => {
                const response = await fetch(game, { method: 'GET', mode: 'cors' });
                const responseData = await response.json();
                return responseData.data.name;
            });
            const gameNames = await Promise.all(gamePromises);
            setGames(gameNames);
            setLoading(false);
        }
        gamesMap(data);
    }, [data]);

    if (loading) {
        return (
            <p>Carregando...</p>
        )
    };
    
    return (
        <li className="dungeon-container">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            {games.length !== 0 ? <p>Jogos: {games.join(', ')}</p> : null}
        </li>
    );
};

Dungeon.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        appearances: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
}; 