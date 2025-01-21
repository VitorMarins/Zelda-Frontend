import './Footer.css';

export default function Footer() {
    const ano = new Date().getFullYear();
    return (
        <footer>
            <p>&copy; {ano} - Zelda Info</p>
            <a 
            href="https://docs.zelda.fanapis.com/" 
            target="_blank"
            rel="noopener noreferrer"
            >
                Zelda API
            </a>
        </footer>
    );
}
