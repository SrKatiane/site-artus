import React from 'react';
import './Partners.css';

import logoSaga from '../assets/grupo-saga.png';
import logoRisc from '../assets/risc.png';
import logoAmbev from '../assets/ambev.png';
import logoEquinox from '../assets/equinox.png';
import logoSA from '../assets/sa-cavalcante.png';
import logoSalum from '../assets/salum.png';
import logoAlert from '../assets/alert-system.png'

const logos = [
    logoSaga,
    logoRisc,
    logoAmbev,
    logoEquinox,
    logoSA,
    logoSalum,
    logoAlert,
];

const Partners = () => {
    // Duplicate the logos to create a seamless infinite loop
    const displayLogos = [...logos, ...logos, ...logos];

    return (
        <section className="partners-section">
            <h2 className="partners-title">Empresas que confiam na Artus Engenharia</h2>

            <div className="carousel-container">
                <div className="carousel-track">
                    {displayLogos.map((logo, index) => (
                        <div key={index} className="partner-logo">
                            <img src={logo} alt={`Partner logo ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
