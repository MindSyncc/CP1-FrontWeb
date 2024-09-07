
import '../css/Footer.css'; // Importa o CSS específico para o footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Sobre Nós</h2>
                    <p>Somos apaixonados por esportes e oferecemos os melhores produtos para você se manter em forma e ativo.</p>
                </div>
                <div className="footer-section">
                    <h2>Links Rápidos</h2>
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/produtos">Produtos</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Contato</h2>
                    <p>Email: contato@esportes.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                </div>
                <div className="footer-section">
                    <h2>Siga-nos</h2>
                    <div className="social-icons">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Bluesky</a>
                        <a href="#" className="social-icon">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Esportes. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
