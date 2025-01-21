import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Zelda Info</h1>
            <nav>
                <ul>
                    <li><a href="/">Jogos</a></li>
                    <li><a href="chefes">Chefes</a></li>
                    <li><a href="dungeons">Dungeons</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;