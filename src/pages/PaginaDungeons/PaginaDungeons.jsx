import { useState } from 'react';
import Dungeon from '../../components/DungeonCard/Dungeon.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const PaginaDungeons = () => {
    const [pesquisa, setPesquisa] = useState('');
      const [dungeons, setDungeons] = useState([]);
      const [loading, setLoading] = useState(false);
    
      const handleSearch = async (event) => {
        event.preventDefault();
        try {
          setLoading(true);
          await fetch(`https://zelda.fanapis.com/api/dungeons?name=${pesquisa}`)
            .then(response => response.json())
            .then(data => setDungeons(data.data));
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
    return (
        <>
            <Header />
            <div className="tabs">
                <h1>Pesquisar Dungeons de Zelda: </h1>
                <form id='form-search'>  
                    <input
                    type="text"
                    name="games"
                    id="games"
                    value={pesquisa}
                    onChange={(event) => setPesquisa(event.target.value)}
                    disabled={loading}
                    />
                    <button 
                    type="submit"
                    onClick={handleSearch}
                    disabled={loading}
                    >
                        Busca
                    </button>
                </form>
                {loading && <p>Carregando...</p>}
                <ul>
                    {dungeons.map((dungeon) => (
                        <Dungeon key={dungeon.id} data={dungeon} />
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default PaginaDungeons;