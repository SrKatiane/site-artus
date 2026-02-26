import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">
                <div className="cta-card">
                    {/* Background Image with Overlay */}
                    <div className="cta-bg-image" />

                    <div className="cta-content">
                        <h2 className="cta-title">
                            Vamos construir algo <span className="cta-title-accent">grande</span> juntos?
                        </h2>
                        <p className="cta-description">
                            Conte-nos sobre o seu projeto ou necessidade técnica. Nosso time entrará em contato para propor a melhor solução.
                        </p>
                        <Link to="/contato" className="cta-button">
                            Fale com a Artus
                        </Link>
                    </div>

                    {/* Abstract Circle decoration */}
                    <div className="cta-decoration-circle" />
                </div>
            </div>
        </section>
    );
};

export default CTA;
