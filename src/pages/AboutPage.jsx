import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    ShieldCheck,
    Shield,
    Cpu,
    Zap,
    Settings,
    ArrowRight,
    ArrowLeft,
    Users,
    Target,
    Eye,
    Heart,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutPage.css';
import '../components/CTA.css';

const AboutPage = () => {
    // Scroll to top when page is loaded
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        { title: 'Diagnóstico técnico detalhado', desc: 'Entendimento profundo da operação, riscos, necessidades e objetivos do cliente.' },
        { title: 'Planejamento e engenharia', desc: 'Definição de soluções técnicas seguras, eficientes e viáveis, com foco em desempenho e custo-benefício.' },
        { title: 'Execução com controle e segurança', desc: 'Execução em campo com equipe qualificada, processos bem definidos e foco absoluto em segurança.' },
        { title: 'Comissionamento e entrega', desc: 'Testes, medições, validações técnicas e entrega do sistema pronto para operar.' },
        { title: 'Suporte e acompanhamento', desc: 'Acompanhamento pós-entrega, ajustes técnicos e suporte conforme a necessidade da operação.' }
    ];

    const differentials = [
        {
            icon: <ShieldCheck className="icon-accent" size={32} />,
            title: 'Engenharia com responsabilidade técnica',
            desc: 'Assumimos a responsabilidade técnica real pelos serviços executados, com emissão de laudos e conformidade normativa.'
        },
        {
            icon: <Settings className="icon-accent" size={32} />,
            title: 'Atuação do projeto à operação',
            desc: 'Entregamos soluções completas. Nosso compromisso é com o funcionamento do sistema em operação.'
        },
        {
            icon: <Zap className="icon-accent" size={32} />,
            title: 'Segurança como valor inegociável',
            desc: 'A segurança das pessoas e das operações é prioridade absoluta em todas as nossas atividades.'
        },
        {
            icon: <Cpu className="icon-accent" size={32} />,
            title: 'Experiência em ambientes complexos',
            desc: 'Atuamos em setores que exigem alto nível técnico, precisão e confiabilidade sob medida.'
        }
    ];

    return (
        <div className="about-page-root">
            <main>
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="about-hero-bg">
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
                            alt="Industrial Background"
                            className="about-hero-img"
                        />
                        <div className="about-hero-overlay"></div>
                    </div>
                    <div className="about-hero-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="about-hero-content"
                        >
                            <Link to="/" className="back-link">
                                <ArrowLeft size={18} /> Voltar para Home
                            </Link>
                            <h1 className="about-hero-title">
                                Engenharia que sustenta <span className="highlight">operações industriais</span>
                            </h1>
                            <p className="about-hero-description">
                                Conheça nossa forma de atuar, nossos valores e o compromisso técnico que aplicamos em cada projeto.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Quem Somos */}
                <section className="about-who-we-are">
                    <div className="about-page-container">
                        <div className="about-who-content">
                            <h2 className="section-tag">Quem Somos</h2>
                            <div className="about-who-text">
                                <p>
                                    A Artus é uma empresa de engenharia e soluções integradas, com atuação sólida no mercado industrial e forte presença em projetos de alta complexidade técnica. Atuamos nas áreas de elétrica, automação industrial, subestações, infraestrutura industrial e tecnologia, entregando soluções completas, do projeto à operação.
                                </p>
                                <p>
                                    Nosso trabalho é orientado por eficiência operacional, segurança e responsabilidade técnica. Cada solução é pensada para funcionar no mundo real, respeitando normas, prazos, orçamento e, principalmente, a continuidade da operação do cliente.
                                </p>
                                <p className="about-quote">
                                    Não acreditamos em soluções genéricas. Acreditamos em engenharia aplicada, bem planejada e bem executada.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nossa Atuação */}
                <section className="about-performance">
                    <div className="about-page-container">
                        <div className="about-grid-two">
                            <div className="performance-info">
                                <h2 className="section-title">Nossa atuação no setor industrial</h2>
                                <p className="section-description">
                                    A Artus atua como parceira técnica de indústrias e empresas de infraestrutura que exigem alto nível de confiabilidade, segurança e desempenho operacional.
                                </p>
                                <p className="section-description">Estamos presentes em projetos de:</p>
                                <ul className="performance-list">
                                    {[
                                        'Expansão de processos produtivos',
                                        'Modernização e adequação de sistemas existentes',
                                        'Implantação de novas plantas e linhas industriais',
                                        'Integração de sistemas elétricos, automação e tecnologia',
                                        'Projetos críticos, paradas técnicas e operações especiais'
                                    ].map((item, i) => (
                                        <li key={i} className="performance-list-item">
                                            <div className="check-icon-box">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="performance-note">
                                    Nossa atuação vai além da execução. Participamos do planejamento, da tomada de decisão técnica e da entrega final pronta para operação.
                                </p>
                            </div>
                            <div className="performance-image-box">
                                <div className="performance-img-wrapper">
                                    <img
                                        src="src/assets/img-atuação.png"
                                        alt="Industrial Facility"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Nossa Forma de Trabalhar */}
                <section className="about-methodology">
                    <div className="about-page-container">
                        <div className="methodology-header">
                            <h2 className="section-title">Nossa forma de trabalhar</h2>
                            <p className="section-description">Cada projeto da Artus segue uma metodologia clara, técnica e orientada a resultado.</p>
                        </div>

                        <div className="methodology-steps">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="methodology-card"
                                >
                                    <div className="step-number">
                                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                    </div>
                                    <div className="step-content">
                                        <h4 className="step-title">{step.title}</h4>
                                        <p className="step-desc">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Diferenciais */}
                <section className="about-differentials">
                    <div className="differentials-bg-grid"></div>
                    <div className="differentials-bg-glow"></div>
                    <div className="about-page-container">
                        <div className="differentials-header">
                            <h2 className="section-title dark">Diferenciais da Artus</h2>
                        </div>
                        <div className="differentials-grid">
                            {differentials.map((diff, i) => (
                                <div key={i} className="diff-card">
                                    <div className="diff-icon-box">{diff.icon}</div>
                                    <h4 className="diff-title">{diff.title}</h4>
                                    <p className="diff-desc">{diff.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Nosso Time */}
                <section className="about-team">
                    <div className="about-page-container">
                        <div className="about-grid-two">
                            <div className="team-image-box">
                                <div className="team-img-wrapper">
                                    <img
                                        src="src\assets\Funcionário.png"
                                        alt="Team"
                                    />
                                </div>
                            </div>
                            <div className="team-info">
                                <h2 className="section-title">Nosso Time</h2>
                                <div className="team-text">
                                    <p>
                                        Contamos com uma equipe técnica de alta performance, formada por profissionais qualificados e preparados para atuar em ambientes industriais de alta exigência.
                                    </p>
                                    <p>
                                        Nosso time é treinado continuamente, seguindo padrões técnicos, normas de segurança e boas práticas de engenharia. Valorizamos a vida, o conhecimento e a responsabilidade individual e coletiva em cada projeto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Segurança */}
                <section className="about-safety">
                    <div className="safety-bg-grid"></div>
                    <div className="safety-bg-glow"></div>
                    <div className="about-page-container">
                        <div className="safety-card">
                            {/* Blueprint/Technical Background Decor */}
                            <div className="safety-blueprint"></div>

                            <div className="safety-info">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="section-tag">SEGURANÇA & CONFIANÇA</span>
                                    <h2 className="section-title dark">Segurança em primeiro lugar</h2>
                                    <div className="safety-text">
                                        <p>
                                            Na Artus, segurança não é discurso institucional — é prática diária. O <strong>Arturito</strong>, nosso mascote, representa a força e o cuidado em cada detalhe.
                                        </p>

                                        <div className="safety-protocols">
                                            <div className="protocol-item">
                                                <div className="protocol-dot"></div>
                                                <span>EPIs de alta performance em todas as operações.</span>
                                            </div>
                                            <div className="protocol-item">
                                                <div className="protocol-dot"></div>
                                                <span>Treinamento contínuo e conformidade normativa.</span>
                                            </div>
                                            <div className="protocol-item">
                                                <div className="protocol-dot"></div>
                                                <span>Planejamento rigoroso para mitigação de riscos.</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="safety-mascot-container">
                                <motion.div
                                    className="mascot-hud-wrapper"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Tech HUD Circles */}
                                    <div className="hud-ring hud-ring-1"></div>
                                    <div className="hud-ring hud-ring-2"></div>
                                    <div className="hud-ring hud-ring-3"></div>

                                    <div className="mascot-img-box">
                                        <img
                                            src="src/assets/ARTURITO.png"
                                            alt="Arturito - Segurança Artus"
                                            className="mascot-3d-img"
                                        />
                                    </div>

                                    <div className="mascot-shield-icon">
                                        <Shield size={24} fill="currentColor" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Missão, Visão e Valores */}
                <section className="about-mvv">
                    <div className="about-page-container">
                        <div className="mvv-grid">
                            <div className="mvv-card">
                                <h3 className="mvv-title">Missão</h3>
                                <p className="mvv-desc">
                                    Promover a satisfação do cliente por meio de soluções técnicas eficientes, redução de custos e otimização de processos, agregando valor real ao negócio.
                                </p>
                            </div>

                            <div className="mvv-card">
                                <h3 className="mvv-title">Visão</h3>
                                <p className="mvv-desc">
                                    Ser referência em engenharia industrial pela excelência técnica, inovação, confiabilidade e relacionamento duradouro com clientes e parceiros.
                                </p>
                            </div>

                            <div className="mvv-card">
                                <h3 className="mvv-title">Valores</h3>
                                <ul className="mvv-values-list">
                                    {[
                                        'Integridade e responsabilidade',
                                        'Compromisso com a segurança e a vida',
                                        'Qualidade técnica e inovação',
                                        'Ética e transparência',
                                        'Responsabilidade social e ambiental'
                                    ].map((val, i) => (
                                        <li key={i} className="value-item">
                                            <ChevronRight size={16} />
                                            <span>{val}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Final */}
                <section className="cta-section">
                    <div className="cta-container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="cta-card cta-centered"
                        >
                            <div className="cta-bg-image" />
                            <div className="cta-content">
                                <h2 className="cta-title">
                                    Vamos conversar sobre o seu <span className="cta-title-accent">projeto</span>?
                                </h2>
                                <p className="cta-description">
                                    Se sua empresa precisa de uma parceira técnica para projetos industriais, fale com a Artus Engenharia. Estamos prontos para entender seu cenário e entregar soluções que funcionam.
                                </p>
                                <Link to="/contato" className="cta-button">
                                    Falar com um especialista
                                </Link>
                            </div>
                            <div className="cta-decoration-circle" />
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AboutPage;
