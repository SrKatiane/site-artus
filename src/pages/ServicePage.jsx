import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    ShieldCheck,
    Zap
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './ServicePage.css';

const ServicePage = () => {
    const { slug } = useParams();
    const service = servicesData[slug];

    // Helper to resolve Vite assets dynamically
    const getHeroImage = (heroImage) => {
        if (!heroImage) return '';
        // If it's a URL (http/https), return as is
        if (heroImage.startsWith('http')) return heroImage;
        // Otherwise, resolve from assets folder
        return new URL(`../assets/${heroImage}`, import.meta.url).href;
    };

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // If service doesn't exist, redirect to home
    if (!service) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="service-page-root">
            <main>
                {/* Hero Section */}
                <section className="service-hero">
                    <div className="service-hero-bg">
                        <img
                            src={getHeroImage(service.heroImage)}
                            alt={service.title}
                            className="service-hero-img" />
                        <div className="service-hero-overlay"></div>
                    </div>
                    <div className="service-page-container">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="service-hero-content"
                        >
                            <Link to="/" className="back-link">
                                <ArrowLeft size={18} /> Voltar para Home
                            </Link>
                            <h1 className="service-hero-title">{service.title}</h1>
                            <p className="service-hero-subtitle">{service.subtitle}</p>
                        </motion.div>
                    </div>
                </section>

                {/* Overview */}
                <section className="service-overview">
                    <div className="service-page-container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="service-description-box"
                        >
                            <span className="segment-tag">VISÃO GERAL</span>
                            {service.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Details Grid */}
                <section className="service-details-grid">
                    <div className="service-page-container">
                        <div className="details-wrapper">
                            <div className="activities-column">
                                <motion.h3
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    {service.activitiesTitle || 'O que fazemos'}
                                </motion.h3>
                                <ul className="activities-list">
                                    {service.whatWeDo.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="activity-item"
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="activity-icon">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="value-column">
                                <motion.h3
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    Onde geramos valor
                                </motion.h3>
                                <div className="value-grid">
                                    {service.valueProposition.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="value-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.15 }}
                                        >
                                            <span>{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="cta-container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="cta-card"
                        >
                            <div className="cta-bg-image" />
                            <div className="cta-content">
                                <h2 className="cta-title">
                                    Precisa de excelência em <span className="cta-title-accent">{service.title}</span>?
                                </h2>
                                <p className="cta-description">
                                    Estamos prontos para entender seu cenário e entregar soluções que funcionam com segurança e alto desempenho.
                                </p>
                                <Link to="/contato" className="cta-button">
                                    {service.ctaText}
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

export default ServicePage;
