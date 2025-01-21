import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Chefe.css';

export default function Chefe({ data }) {
    const [dungeon, setDungeon] = useState('');
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const gamesMap = async (data) => {
            const gamePromises = data.appearances.map((game) => {
                return fetch(game, { method: 'GET', mode: 'cors' })
                    .then(response => response.json())
                    .then(data => data.data.name);
            });
            const gameNames = await Promise.all(gamePromises);
            setGames(gameNames);
        }

        setLoading(true);
        fetch(data.dungeons)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setDungeon(data.data.name))
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setLoading(false);
            })
            .finally(() => setLoading(false));
        gamesMap(data);
    }, [data]);

    if (loading) {
        return <p>Carregando...</p>;
    };

    return (
        <li className="chefe-container">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            {dungeon !== '' ? <p>Dungeon: {dungeon}</p> : null}
            {games.length !== 0 ? <p>Jogos: {games.join(', ')}</p> : null}
        </li>
    );
};

Chefe.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        dungeons: PropTypes.string.isRequired,
        appearances: PropTypes.arrayOf(PropTypes.string).isRequired,
        data: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    }).isRequired,
}; 