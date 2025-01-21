import { useState } from 'react';
import Chefe from '../../components/ChefeCard/Chefe.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const PaginaChefe = () => {
    const [pesquisa, setPesquisa] = useState('');
      const [chefes, setChefes] = useState([]);
      const [loading, setLoading] = useState(false);
    
      const handleSearch = async (event) => {
        event.preventDefault();
        try {
          setLoading(true);
          await fetch(`https://zelda.fanapis.com/api/bosses?name=${pesquisa}`)
            .then(response => response.json())
            .then(data => setChefes(data.data));
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
                <h1>Pesquisar Chefes de Zelda: </h1>
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
                    {chefes.map((chefe) => (
                        <Chefe key={chefe.id} data={chefe} />
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default PaginaChefe;