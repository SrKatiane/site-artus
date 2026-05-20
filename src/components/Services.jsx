import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import {
    BarChart3,
    Wrench,
    Factory,
    Zap,
    Network,
    CloudCog,
    ChevronLeft,
    ChevronRight,
    ArrowUpRight
} from 'lucide-react';

// Assets
import imgGestao from '../assets/gestão2.png';
import imgMontagem from '../assets/mecanica.png';
import imgFabricacao from '../assets/infraestrutura-e-fabricacao.png';
import imgEletrica from '../assets/manutencao-de-subestacoes.png';
import imgTiMonitoramento from '../assets/ti-monitoramento.png';
import imgAutomacao from '../assets/paas.png';

const services = [
    {
        id: 1,
        slug: 'engenharia-e-gestao-de-projetos',
        title: 'Engenharia e Gestão de Projetos',
        description: 'Planejamento e gestão operacional para implantação industrial, com controle de prazos, recursos, escopo e execução em campo.',
        image: imgGestao,
        icon: <BarChart3 size={24} />
    },
    {
        id: 2,
        slug: 'mecanica-caldeiraria-e-linhas-de-processo',
        title: 'Mecânica, Caldeiraria e Linhas de Processo',
        description: 'Montagem de tubulações, caldeiraria pesada e leve, soldagem especializada e linhas de processo para indústrias.',
        image: imgMontagem,
        icon: <Wrench size={24} />
    },
    {
        id: 3,
        slug: 'infraestrutura-e-fabricacao-industrial',
        title: 'Infraestrutura e Fabricação Industrial',
        description: 'Fabricação e montagem de estruturas metálicas e inox, infraestrutura seca industrial, bases, suportes e instalação de equipamentos.',
        image: imgFabricacao,
        icon: <Factory size={24} />
    },
    {
        id: 4,
        slug: 'eletrica-instrumentacao-e-subestacoes',
        title: 'Elétrica, Instrumentação e Subestações',
        description: 'Projetos e execução de sistemas elétricos de alta, média e baixa tensão, subestações, SPDA, instrumentação e comissionamento elétrico.',
        image: imgEletrica,
        icon: <Zap size={24} />
    },
    {
        id: 5,
        slug: 'ti-redes-e-monitoramento',
        title: 'TI, Redes e Monitoramento',
        description: 'Implantação de redes industriais e corporativas, fibra óptica, monitoramento e integração de infraestrutura operacional.',
        image: imgTiMonitoramento,
        icon: <Network size={24} />
    },
    {
        id: 6,
        slug: 'tcn-paas',
        title: 'Automação Industrial por Assinatura (TCN-PaaS)',
        description: 'Automação industrial por assinatura: hardware, software, manutenção e suporte em mensalidade fixa, sem altos investimentos iniciais.',
        image: imgAutomacao,
        icon: <CloudCog size={24} />
    }
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused, slidesToShow]);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            if (prev >= services.length - slidesToShow) return 0;
            return prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            if (prev <= 0) return services.length - slidesToShow;
            return prev - 1;
        });
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 70) nextSlide();
        if (touchStart - touchEnd < -70) prevSlide();
    };

    const jumpToSlide = (idx) => {
        setCurrentIndex(idx);
    };

    const paginationStops = Array.from(
        { length: services.length - slidesToShow + 1 },
        (_, i) => i
    );

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
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="carousel-overflow">
                    <div
                        className="services-carousel"
                        style={{
                            transform: `translateX(calc(-1 * ${currentIndex} * (100% + 30px) / ${slidesToShow}))`,
                            '--slides-to-show': slidesToShow
                        }}
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
                            aria-label={`Ir para seção ${stopIndex + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;