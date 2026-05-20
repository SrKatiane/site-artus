import React from 'react';
import './Partners.css';

import logoEsfera from '../assets/esfera.png';
import logoRisc from '../assets/risc.png';
import logoAmbev from '../assets/ambev.png';
import logoEquinox from '../assets/equinox.png';
import logoTecnale from '../assets/tecnale.png';
import logoDolphin from '../assets/dolphin.png';
import logoAlert from '../assets/alert-system.png';
import logoSanmartin from '../assets/sanmartin.png';
import logoMayekawa from '../assets/mayekawa.png';
import logoEngrp from '../assets/engrp.png'
import logoSalmeron from '../assets/salmeron1.png'

const logos = [
    logoEsfera,
    logoRisc,
    logoAmbev,
    logoEquinox,
    logoTecnale,
    logoDolphin,
    logoAlert,
    logoSanmartin,
    logoMayekawa,
    logoEngrp,
    logoSalmeron
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
