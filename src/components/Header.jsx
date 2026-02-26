import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Artus Engenharia" className="logo-image" />
                </Link>
            </div>

            <div className="header-right">
                <nav className="nav">
                    <ul>
                        <li><a href="/#home">Início</a></li>
                        <li><a href="/#servicos">Serviços</a></li>
                        <li><a href="/#sobre">Sobre</a></li>
                        <li><a href="/#portfolio">Portfólio</a></li>
                    </ul>
                </nav>

                <a href="/#contato" className="btn btn-cta">
                    Fale conosco
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </a>
            </div>
        </header>
    );
};

export default Header;
