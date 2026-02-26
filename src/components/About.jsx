import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import workersImage from '../assets/funcionario.png';

const differentials = [
    {
        id: 1,
        title: 'Engenharia com responsabilidade técnica',
        description: 'Acompanhamento especializado em todas as etapas, com emissão de laudos e total conformidade técnica.'
    },
    {
        id: 2,
        title: 'Do projeto à operação',
        description: 'Gestão completa de ponta a ponta, eliminando falhas e custos ocultos da obra à operação.'
    },
    {
        id: 3,
        title: 'Segurança como valor inegociável',
        description: 'Segurança rigorosa com treinamentos, processos específicos e fiscalização constante em campo.'
    },
    {
        id: 4,
        title: 'Experiência industrial comprovada',
        description: 'Expertise em ambientes industriais complexos com entregas ágeis e alta precisão técnica.'
    }
];

const About = () => {
    return (
        <section className="about-section" id="sobre">
            <div className="about-bg-grid"></div>
            <div className="about-bg-glow"></div>
            <div className="about-container">
                <div className="about-image-column">
                    <div className="image-relative-container">
                        <div className="main-image-wrapper">
                            <img src={workersImage} alt="Time Artus em campo" className="about-main-img" />
                        </div>
                        {/* Stats box - positioned bottom-right with negative offset */}
                        <div className="stats-box">
                            <div className="stats-number">10+</div>
                            <div className="stats-label">Anos de Experiência</div>
                        </div>
                    </div>
                    {/* Background Decor */}
                    <div className="image-bg-decor"></div>
                </div>

                <div className="about-content-column">
                    <div className="about-tag">Sobre a Artus</div>
                    <h2 className="about-section-title">
                        Quem é a Artus Engenharia
                    </h2>

                    <div className="about-description-text">
                        <p>
                            A Artus é uma empresa de engenharia e soluções integradas,
                            com atuação sólida no setor industrial e foco em eficiência operacional,
                            segurança e excelência técnica. Desenvolvemos e executamos projetos elétricos,
                            automação, subestações e infraestrutura industrial, sempre com responsabilidade
                            técnica e compromisso com o funcionamento real da operação.
                        </p>
                        <p className="highlight-tagline">
                            Não entregamos apenas projetos. Entregamos sistemas prontos para operar com segurança, desempenho e confiabilidade.
                        </p>
                    </div>

                    <div className="differentials-list-grid">
                        {differentials.map((item) => (
                            <div key={item.id} className="differential-item-card">
                                <div className="differential-icon-box">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <div className="differential-item-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="about-cta-wrapper">
                        <Link to="/sobre" className="btn btn-cta about-action-btn" style={{ textDecoration: 'none' }}>
                            Saiba mais sobre a Artus
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
