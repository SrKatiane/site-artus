import React from 'react';
import './Portfolio.css';

const projects = [
    {
        title: 'Manutenção de Painéis Industriais',
        client: 'Nome do cliente',
        image: 'src/assets/port-1.png',
        category: 'Automação'
    },
    {
        title: 'Nome do Serviço',
        client: 'Nome do cliente',
        image: 'src/assets/port-2.png',
        category: 'Elétrica de Potência'
    },
    {
        title: 'Nome do Serviço',
        client: 'Nome do cliente',
        image: 'src/assets/port-3.png',
        category: 'TI & Dados'
    },
    {
        title: 'Montagem de Estruturas Metálicas',
        client: 'Nome do cliente',
        image: 'src/assets/port-4.png',
        category: 'Infraestrutura'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio-section">
            <div className="portfolio-bg-grid"></div>
            <div className="portfolio-bg-glow"></div>
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <div className="portfolio-header-text">
                        <p className="portfolio-tag">CASES DE SUCESSO</p>
                        <h2 className="portfolio-title">
                            Projetos que comprovam nossa <span className="portfolio-title-accent">excelência técnica</span>.
                        </h2>
                    </div>
                    <a href="#portfolio" className="portfolio-cta">
                        Ver portfólio completo
                    </a>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-project-card">
                            <div className="portfolio-card-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="portfolio-project-img"
                                />
                                <div className="portfolio-card-overlay"></div>

                                <div className="portfolio-card-content">
                                    <span className="portfolio-project-category">
                                        {project.category}
                                    </span>
                                    <h3 className="portfolio-project-title">{project.title}</h3>
                                    <p className="portfolio-project-client">
                                        {project.client}
                                    </p>
                                </div>

                                {/* Corner accent */}
                                <div className="portfolio-corner-accent"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
