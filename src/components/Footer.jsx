import React from 'react';
import './Footer.css';
import logo from '../assets/logo-branca.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bg-texture"></div>
            <div className="footer-container">
                <div className="footer-brand">
                    <img src={logo} alt="Artus Engenharia" className="footer-logo" />
                    <p>
                        Excelência em engenharia e soluções industriais.
                        Comprometidos com a qualidade, segurança e inovação
                        em cada projeto.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Navegação</h3>
                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#portfolio">Portfólio</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h3>Contato</h3>
                    <ul>
                        <li><a href="mailto:contato@artusengenharia.com">contato@artusengenharia.com</a></li>
                        <li><a href="tel:+55000000000">(00) 0000-0000</a></li>
                        <li>R. dos Búzios, 200 - Calhau, São Luís - MA, 65071-070, Brasil</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Artus Engenharia. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
