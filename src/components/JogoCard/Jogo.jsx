import PropTypes from 'prop-types';
import './Jogo.css';

export default function Jogo({ data }) {
    return (
        <li className="jogo-container">
            <h2>{data.name}</h2>
            <p>{data.released_date}</p>
            <p>{data.description}</p>
            <p>Desenvolvido por: {data.developer}</p>
            <p>Publicado por: {data.publisher}</p>
        </li>
    );
};

Jogo.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        released_date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        developer: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
    }).isRequired,
}; 