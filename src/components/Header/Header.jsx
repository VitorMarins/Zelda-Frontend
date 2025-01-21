import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Zelda Info</h1>
            <nav>
                <ul>
                    <li><Link to="/">Jogos</Link></li>
                    <li><Link to="/chefes">Chefes</Link></li>
                    <li><Link to="/dungeons">Dungeons</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;