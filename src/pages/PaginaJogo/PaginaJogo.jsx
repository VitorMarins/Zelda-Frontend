import { useState } from 'react';
import Jogo from '../../components/JogoCard/Jogo.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

export default function PaginaJogo() {
  const [pesquisaJogos, setPesquisaJogos] = useState('');
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await fetch(`https://zelda.fanapis.com/api/games?name=${pesquisaJogos}`)
        .then(response => response.json())
        .then(data => setJogos(data.data));
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
        <h1>Pesquisar Jogos de Zelda: </h1>
        <form id='form-search'>  
          <input
            type="text"
            name="games"
            id="games"
            value={pesquisaJogos}
            onChange={(event) => setPesquisaJogos(event.target.value)}
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
          {jogos.map((jogo) => (
            <Jogo key={jogo.id} data={jogo} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  )
};
