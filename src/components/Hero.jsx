import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">
                    Engenharia que entrega <br />
                    <span className="highlight">operação</span>, segurança <br />
                    e resultado.
                </h1>

                <p className="hero-description">
                    Projetos elétricos, automação, subestações e infraestrutura industrial
                    executados com responsabilidade técnica e foco total na sua produtividade.
                </p>

                <div className="hero-actions">
                    <a href="#contato" className="btn btn-primary btn-hero">Fale com um especialista</a>
                    <a href="#servicos" className="btn btn-outline btn-hero">Conheça nossos serviços</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
