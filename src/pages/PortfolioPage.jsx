import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import './PortfolioPage.css';
import Contact from '../components/Contact';

// Assets principais
import portfolioHeroBg from '../assets/portfolio-hero-bg.jpg';
import funcionarioImg from '../assets/funcionario-banner.png';

// Importações das imagens do novo portfólio (img-portfolio)
import comissionamentoInstrumentos from '../assets/img-portfolio/Comissionamento instrumentos.jpg';
import montagemLamelas from '../assets/img-portfolio/Montagem Lamelas - Reator ETEI.jpg';
import montagemSubestacao from '../assets/img-portfolio/Montagem substaç!ao.jpg';
import photo1 from '../assets/img-portfolio/PHOTO-2025-10-16-11-18-46.jpg';
import photo2 from '../assets/img-portfolio/PHOTO-2025-10-28-14-20-34.jpg';
import photo3 from '../assets/img-portfolio/PHOTO-2026-02-13-07-32-54 (16).jpg';
import painelComando2 from '../assets/img-portfolio/Painel - Comando - Automação 2.jpg';
import painelComando from '../assets/img-portfolio/Painel - Comando - Automação.jpg';
import sistemaAeracao from '../assets/img-portfolio/Sistema de Aeraçao - lagoa aeraçao etei.jpg';
import sistemaEnvioEfluente from '../assets/img-portfolio/Sistema de envio de efluente para tratamento.jpg';
import soldaInoxCervejaria from '../assets/img-portfolio/Solda adequada para tubulacao de aço inox OD- PRcesso cervejaria.jpg';
import testeEstanqueidadeGLP from '../assets/img-portfolio/Teste de estanqueidade tubulaçao de ar gas GLP.jpg';
import comissionamentoCampo from '../assets/img-portfolio/comissionamento de instrumentos em campo.jpeg';
import instalacaoCombateEmergencia from '../assets/img-portfolio/instalacao sistema eletrico de combate a emergencia.jpeg';
import instalacaoMedidorOxigenio from '../assets/img-portfolio/instalacão de medidor de Oxigenio.jpeg';
import instalacaoMedidorNivel from '../assets/img-portfolio/instalaçao de instrumento - medidor de  nivel lagoa de efluente.jpg';
import instalacaoMedidorVazao from '../assets/img-portfolio/instalaçao de medidor e vazao.jpg';
import instalacaoMotoresEletricos from '../assets/img-portfolio/instalaçao motores eletricos.jpeg';
import instalacaoIoLink from '../assets/img-portfolio/instalaçao sistema de Io Link em campo.jpeg';
import instrumentacaoInstalacao from '../assets/img-portfolio/instrumentaçao - instalacao.jpeg';
import icamentoCarga from '../assets/img-portfolio/içamento de carga.png';
import ligacaoPainelPgbg from '../assets/img-portfolio/ligacao de alimentaçao de painel de comando a partir do PGBT.jpg';
import medicoesEletricas from '../assets/img-portfolio/medicoes eletricas em campo.jpeg';
import montagemBombas from '../assets/img-portfolio/montagem conjunto d e bombas.jpeg';
import montagemInfraSeca from '../assets/img-portfolio/montagem de infraestrutura seca -.jpg';
import montagemLinhaAr from '../assets/img-portfolio/montagem linha de ar comprimido.jpeg';
import montagemLinhaGLP from '../assets/img-portfolio/montagem linha gas GLP.jpg';
import montagemCentrifuga from '../assets/img-portfolio/montagem mecanica Centrifuga de efluentes.jpg';
import montagemMecanicaBombas from '../assets/img-portfolio/montagem mecanica bombas e motores eletricos.jpeg';
import montagemMecanicaGeral from '../assets/img-portfolio/montagem mecanica.jpeg';
import montagemPainelEmpilhadeiras from '../assets/img-portfolio/montagem painel central de distribuiçao de energia - alimentaçao de tomadas de empilhadeiras eletricas.jpeg';
import montagemSuporteDosadoras from '../assets/img-portfolio/montagem suporte bombas dosadoras.jpg';
import soldagemDosadorPolimero from '../assets/img-portfolio/soldagem - linha de aço inox OD - bomba de alimentaçao Dosador de Polimero  ETEI.jpg';
import spdaImagem from '../assets/img-portfolio/spda.jpeg';

const projectsData = [
    {
        id: 1,
        title: 'Comissionamento de Instrumentos de Processo',
        client: 'Cervejaria Ambev',
        category: 'Automação',
        image: comissionamentoInstrumentos,
        date: '02.2026'
    },
    {
        id: 2,
        title: 'Montagem de Lamelas do Reator da ETEI',
        client: 'Grupo Saga',
        category: 'Mecânica',
        image: montagemLamelas,
        date: '01.2026'
    },
    {
        id: 3,
        title: 'Montagem e Instalação de Subestação de Média Tensão',
        client: 'Esfera Energia',
        category: 'Elétrica',
        image: montagemSubestacao,
        date: '10.2025'
    },
    {
        id: 4,
        title: 'Instalação de Painéis de Controle e Comando',
        client: 'Mayekawa',
        category: 'Automação',
        image: photo1,
        date: '11.2025'
    },
    {
        id: 5,
        title: 'Manutenção Técnica em Infraestrutura Elétrica',
        client: 'San Martin',
        category: 'Elétrica',
        image: photo2,
        date: '12.2025'
    },
    {
        id: 6,
        title: 'Supervisão Técnica e Controle de Qualidade Industrial',
        client: 'Salmeron',
        category: 'Gestão',
        image: photo3,
        date: '03.2026'
    },
    {
        id: 7,
        title: 'Montagem de Painel de Comando e Automação Industrial',
        client: 'Cervejaria Ambev',
        category: 'Automação',
        image: painelComando2,
        date: '02.2026'
    },

    {
        id: 9,
        title: 'Implantação de Sistema de Aeração na Lagoa da ETEI',
        client: 'Tecnale',
        category: 'Mecânica',
        image: sistemaAeracao,
        date: '08.2025'
    },
    {
        id: 10,
        title: 'Montagem do Sistema de Envio de Efluentes para Tratamento',
        client: 'Salmeron',
        category: 'Mecânica',
        image: sistemaEnvioEfluente,
        date: '09.2025'
    },
    {
        id: 11,
        title: 'Soldagem Especializada de Tubulação em Aço Inox OD',
        client: 'Cervejaria Artus',
        category: 'Mecânica',
        image: soldaInoxCervejaria,
        date: '03.2026'
    },
    {
        id: 12,
        title: 'Teste de Estanqueidade em Tubulação de Ar e Gás GLP',
        client: 'Equinox Gold',
        category: 'Mecânica',
        image: testeEstanqueidadeGLP,
        date: '12.2025'
    },
    {
        id: 13,
        title: 'Comissionamento de Instrumentação Industrial em Campo',
        client: 'S.A. Cavalcante',
        category: 'Automação',
        image: comissionamentoCampo,
        date: '11.2025'
    },
    {
        id: 14,
        title: 'Instalação do Sistema Elétrico de Combate a Emergência',
        client: 'Grupo Saga',
        category: 'Elétrica',
        image: instalacaoCombateEmergencia,
        date: '01.2026'
    },
    {
        id: 15,
        title: 'Instalação de Medidor de Oxigênio Industrial',
        client: 'Mayekawa',
        category: 'Automação',
        image: instalacaoMedidorOxigenio,
        date: '11.2025'
    },
    {
        id: 16,
        title: 'Instalação de Medidor de Nível na Lagoa de Efluentes',
        client: 'Esfera Energia',
        category: 'Automação',
        image: instalacaoMedidorNivel,
        date: '09.2025'
    },
    {
        id: 17,
        title: 'Instalação e Calibração de Medidor de Vazão',
        client: 'Cervejaria Ambev',
        category: 'Automação',
        image: instalacaoMedidorVazao,
        date: '02.2026'
    },
    {
        id: 18,
        title: 'Instalação e Conexão de Motores Elétricos de Alta Potência',
        client: 'Salmeron',
        category: 'Elétrica',
        image: instalacaoMotoresEletricos,
        date: '12.2025'
    },
    {
        id: 19,
        title: 'Instalação de Sistema IO-Link de Campo para Sensores',
        client: 'Cervejaria Artus',
        category: 'Automação',
        image: instalacaoIoLink,
        date: '03.2026'
    },
    {
        id: 20,
        title: 'Instalação e Validação de Instrumentos Industriais',
        client: 'Tecnale',
        category: 'Automação',
        image: instrumentacaoInstalacao,
        date: '08.2025'
    },
    {
        id: 21,
        title: 'Operação de Içamento de Cargas de Grande Porte',
        client: 'Equinox Gold',
        category: 'Infraestrutura',
        image: icamentoCarga,
        date: '12.2025'
    },
    {
        id: 22,
        title: 'Conexão de Alimentação de QGBT para Painel de Comando',
        client: 'Artus Engenharia',
        category: 'Elétrica',
        image: ligacaoPainelPgbg,
        date: '01.2026'
    },
    {
        id: 23,
        title: 'Execução de Medições Elétricas e Termografia em Campo',
        client: 'San Martin',
        category: 'Elétrica',
        image: medicoesEletricas,
        date: '11.2025'
    },
    {
        id: 24,
        title: 'Montagem do Conjunto de Motobombas de Processo',
        client: 'Salum',
        category: 'Mecânica',
        image: montagemBombas,
        date: '02.2026'
    },
    {
        id: 25,
        title: 'Montagem de Infraestrutura Seca Industrial para Cabos',
        client: 'Cervejaria Ambev',
        category: 'Infraestrutura',
        image: montagemInfraSeca,
        date: '01.2026'
    },
    {
        id: 26,
        title: 'Montagem de Linha de Distribuição de Ar Comprimido',
        client: 'Mayekawa',
        category: 'Mecânica',
        image: montagemLinhaAr,
        date: '11.2025'
    },
    {
        id: 27,
        title: 'Montagem de Tubulação e Linha de Gás GLP',
        client: 'Esfera Energia',
        category: 'Mecânica',
        image: montagemLinhaGLP,
        date: '09.2025'
    },
    {
        id: 28,
        title: 'Montagem Mecânica de Centrífuga de Efluentes Industriais',
        client: 'Grupo Saga',
        category: 'Mecânica',
        image: montagemCentrifuga,
        date: '05.2026'
    },
    {
        id: 29,
        title: 'Montagem Mecânica de Bombas Hidráulicas e Motores Elétricos',
        client: 'Salmeron',
        category: 'Mecânica',
        image: montagemMecanicaBombas,
        date: '01.2026'
    },
    {
        id: 30,
        title: 'Montagem Mecânica Geral de Equipamentos e Acessórios',
        client: 'S.A. Cavalcante',
        category: 'Mecânica',
        image: montagemMecanicaGeral,
        date: '08.2025'
    },
    {
        id: 31,
        title: 'Montagem de Painel de Distribuição para Tomadas de Empilhadeiras',
        client: 'Cervejaria Ambev',
        category: 'Elétrica',
        image: montagemPainelEmpilhadeiras,
        date: '02.2026'
    },
    {
        id: 32,
        title: 'Montagem de Suportes de Processo para Bombas Dosadoras',
        client: 'Tecnale',
        category: 'Mecânica',
        image: montagemSuporteDosadoras,
        date: '08.2025'
    },
    {
        id: 33,
        title: 'Soldagem de Linha de Inox para Dosador de Polímero na ETEI',
        client: 'Equinox Gold',
        category: 'Mecânica',
        image: soldagemDosadorPolimero,
        date: '12.2025'
    },
    {
        id: 34,
        title: 'Adequação e Instalação de Sistema de Proteção contra Descargas (SPDA)',
        client: 'Salmeron',
        category: 'Elétrica',
        image: spdaImagem,
        date: '03.2026'
    }
];

const PROJECTS_PER_PAGE = 6;

const PortfolioPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Rolar para o topo ao carregar a página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Cálculos de paginação
    const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
    const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
    const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
    const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contato');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);
        // Rolar até o topo da grade de projetos de forma suave
        const gridSection = document.querySelector('.portfolio-grid-section');
        if (gridSection) {
            const yOffset = -100; // Compensar cabeçalho fixo
            const y = gridSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="service-page-root portfolio-page-root-redesign">
            {/* Hero Section no padrão das páginas de serviço */}
            <section className="service-hero">
                <div className="service-hero-bg">
                    <img
                        src={portfolioHeroBg}
                        alt="Portfólio de Obras"
                        className="service-hero-img"
                    />
                    <div className="service-hero-overlay"></div>
                </div>
                <div className="service-page-container">
                    <div className="service-hero-content">
                        <Link to="/" className="back-link">
                            <ArrowLeft size={18} /> Voltar para Home
                        </Link>
                        <h1 className="service-hero-title">Nosso Portfólio</h1>
                        <p className="service-hero-subtitle">
                            Conheça as obras de alta complexidade e projetos de engenharia industrial executados pela Artus Engenharia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid Section com fundo branco e cards simples */}
            <section className="portfolio-grid-section">
                <div className="service-page-container">
                    <div className="portfolio-grid-container">
                        <div className="portfolio-grid-3col">
                            {currentProjects.map((project) => (
                                <div key={project.id} className="portfolio-page-project-card">
                                    <div className="portfolio-page-card-image-wrapper">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="portfolio-page-project-img"
                                        />
                                        <div className="portfolio-page-card-overlay"></div>
                                        
                                        <div className="portfolio-page-card-content">
                                            <span className="portfolio-page-project-category">
                                                {project.category}
                                            </span>
                                            <h3 className="portfolio-page-project-title">
                                                {project.title}
                                            </h3>
                                        </div>
                                        
                                        <div className="portfolio-page-corner-accent"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Paginação conforme a foto do usuário */}
                        <div className="portfolio-pagination">
                            <ul className="pagination-list">
                                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
                                    <li key={pageNum}>
                                        <button
                                            onClick={() => handlePageChange(pageNum)}
                                            className={`pagination-num ${currentPage === pageNum ? 'active' : ''}`}
                                            aria-label={`Ir para página ${pageNum}`}
                                        >
                                            {pageNum}
                                        </button>
                                    </li>
                                ))}
                                {currentPage < totalPages && (
                                    <li>
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            className="pagination-arrow"
                                            aria-label="Próxima página"
                                        >
                                            &rarr;
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Intermediária Azul de Confiança (Conforme Foto do Usuário) */}
            <section className="portfolio-confidence-banner">
                <div 
                    className="confidence-bg-image" 
                    style={{ backgroundImage: `url(${funcionarioImg})` }}
                ></div>
                <div className="confidence-overlay"></div>
                <div className="service-page-container">
                    <div className="confidence-content">
                        <h2 className="confidence-title">
                            Tenha a certeza de que seu projeto será entregue no prazo e dentro do orçamento.
                        </h2>
                        
                        <ul className="confidence-list">
                            <li>
                                <div className="confidence-check-icon">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span>Gestão eficiente e rigorosa de projetos de engenharia</span>
                            </li>
                            <li>
                                <div className="confidence-check-icon">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span>Alinhamento total com normas técnicas e padrões de segurança</span>
                            </li>
                            <li>
                                <div className="confidence-check-icon">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span>Experiência consolidada no atendimento a indústrias de alta complexidade</span>
                            </li>
                            <li>
                                <div className="confidence-check-icon">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span>Equipe própria de engenheiros e especialistas altamente qualificados</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Formulário de Contato da Home */}
            <Contact />
        </div>
    );
};

export default PortfolioPage;
