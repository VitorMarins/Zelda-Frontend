import { Link } from 'react-router-dom';
import './Pagina404.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Pagina404 = () => {
    return (
        <>
            <Header />
            <div className="pagina404">
                <h1>404</h1>
                <p>Pagina Não Encontrada</p>
                <Link to="/">Voltar para a pagina inicial</Link>
            </div>
            <Footer />
        </>
    );
};

export default Pagina404;