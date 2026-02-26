import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import {
    Zap,
    IterationCcw,
    Settings,
    BarChart3,
    ShieldCheck,
    Wrench,
    Network,
    Key,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';

// Assets
import imgInstalacao from '../assets/instalacao-eletrica.png';
import imgSubestacoes from '../assets/manutencao-de-subestacoes.png';
import imgAutomacao from '../assets/automacao.png';
import imgGestao from '../assets/gestao.png';
import imgSpda from '../assets/spda.png';
import imgMontagem from '../assets/montagem.png';
import imgTiMonitoramento from '../assets/ti-monitoramento.png';
import imgTurnkey from '../assets/turnkey.png';

const services = [
    {
        id: 1,
        slug: 'instalacao-e-manutencao-eletrica',
        title: 'Instalação e Manutenção Elétrica',
        description: 'Soluções completas em sistemas elétricos de alta, média e baixa tensão.',
        image: imgInstalacao,
        icon: <Zap size={24} />
    },
    {
        id: 2,
        slug: 'manutencao-de-subestacoes',
        title: 'Manutenção de Subestações',
        description: 'Serviços técnicos para garantir segurança e continuidade no fornecimento de energia.',
        image: imgSubestacoes,
        icon: <IterationCcw size={24} />
    },
    {
        id: 3,
        slug: 'automacao-industrial',
        title: 'Automação Industrial',
        description: 'Automação e controle de processos para mais eficiência e produtividade.',
        image: imgAutomacao,
        icon: <Settings size={24} />
    },
    {
        id: 4,
        slug: 'gestao-de-projetos',
        title: 'Gestão de Projetos',
        description: 'Gestão técnica e operacional de projetos industriais, com controle rigoroso de prazo e qualidade.',
        image: imgGestao,
        icon: <BarChart3 size={24} />
    },
    {
        id: 5,
        slug: 'spda-e-aterramento',
        title: 'SPDA e Aterramento',
        description: 'Projetos e manutenção de sistemas de proteção contra descargas atmosféricas e aterramento.',
        image: imgSpda,
        icon: <ShieldCheck size={24} />
    },
    {
        id: 6,
        slug: 'infraestrutura-e-fabricacao',
        title: 'Infraestrutura e Fabricação',
        description: 'Fabricação e montagem de estruturas metálicas, inox e painéis elétricos sob medida.',
        image: imgMontagem,
        icon: <Wrench size={24} />
    },
    {
        id: 7,
        slug: 'ti-e-monitoramento',
        title: 'TI e Monitoramento',
        description: 'Implantação de redes, cabeamento estruturado e sistemas de monitoramento integrados.',
        image: imgTiMonitoramento,
        icon: <Network size={24} />
    },
    {
        id: 8,
        slug: 'solucoes-turnkey',
        title: 'Soluções Turnkey',
        description: 'Projetos industriais completos, da engenharia à entrega pronta para operar.',
        image: imgTurnkey,
        icon: <Key size={24} />
    }
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play logic
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                if (prev >= services.length - 3) return 0;
                const next = prev + 3;
                return next > services.length - 3 ? services.length - 3 : next;
            });
        }, 3000); // 3 seconds for easier digestion since 3 cards change

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            if (prev >= services.length - 3) return 0;
            const next = prev + 3;
            return next > services.length - 3 ? services.length - 3 : next;
        });
    };

    const jumpToSlide = (idx) => {
        setCurrentIndex(idx);
    };

    // Define the logical "stops" for the 8 cards (Showing 3 at a time)
    const paginationStops = [0, 3, 5];

    return (
        <section className="services-section" id="servicos">
            <div className="services-tag">Nossos Serviços</div>
            <h2 className="services-title">Nossas soluções em engenharia industrial</h2>
            <p className="services-subtitle">
                Soluções integradas em elétrica, automação, subestações, infraestrutura industrial e tecnologia, do projeto à entrega final.
            </p>

            <div
                className="carousel-wrapper"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="carousel-overflow">
                    <div
                        className="services-carousel"
                        style={{ '--current-index': currentIndex }}
                    >
                        {services.map((service) => (
                            <div className="service-card" key={service.id}>
                                <div className="card-image">
                                    <div className="image-zoom-wrapper">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                    <div className="card-badge">
                                        <span className="badge-icon">{service.icon}</span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <Link to={`/servicos/${service.slug}`} className="btn-saiba-mais">
                                        Saiba mais <ArrowUpRight size={18} className="arrow-icon" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="carousel-dots">
                    {paginationStops.map((stopIndex) => (
                        <button
                            key={stopIndex}
                            className={`dot ${currentIndex === stopIndex ? 'active' : ''}`}
                            onClick={() => jumpToSlide(stopIndex)}
                            aria-label={`Ir para seção ${stopIndex / 3 + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
