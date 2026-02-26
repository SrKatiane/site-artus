import React, { useState } from 'react';
import './FAQ.css';
import { ChevronDown } from 'lucide-react';

const faqData = [
    {
        question: 'Quais setores a Artus Engenharia atende?',
        answer: 'Atendemos diversos setores industriais, com foco em farmacêutico, alimentício, logístico, automotivo e químico, oferecendo soluções personalizadas para cada necessidade de infraestrutura e automação.'
    },
    {
        question: 'Vocês emitem laudos técnicos e ART?',
        answer: 'Sim. Todos os nossos projetos e serviços são acompanhados por engenheiros responsáveis, com emissão de ART (Anotação de Responsabilidade Técnica), laudos de conformidade e relatórios técnicos detalhados.'
    },
    {
        question: 'Como funciona o processo de orçamento?',
        answer: 'O processo começa com uma análise técnica das necessidades do cliente, que pode envolver uma visita técnica ao local. Baseado nisso, elaboramos uma proposta comercial e técnica detalhada com prazos e escopo definidos.'
    },
    {
        question: 'Vocês realizam manutenção preventiva e corretiva?',
        answer: 'Sim, oferecemos contratos de manutenção preventiva para garantir a continuidade operacional dos seus sistemas, além de suporte para manutenções corretivas em subestações e sistemas elétricos industriais.'
    },
    {
        question: 'A Artus atende em todo o Brasil?',
        answer: 'Nossa sede está localizada estrategicamente para atender grandes polos industriais, mas executamos projetos e mobilizamos equipes para atender clientes em todo o território nacional, conforme a complexidade do projeto.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <div className="faq-header">
                    <span className="faq-tag">Dúvidas Frequentes</span>
                    <h2 className="faq-title">Como podemos ajudar você?</h2>
                    <p className="faq-subtitle">Esclareça suas principais dúvidas sobre nossa atuação e serviços.</p>
                </div>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question-btn"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="question-text">{item.question}</span>
                                <ChevronDown
                                    className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}
                                    size={20}
                                />
                            </button>
                            <div
                                className="faq-answer-wrapper"
                                style={{
                                    maxHeight: activeIndex === index ? '200px' : '0',
                                    opacity: activeIndex === index ? '1' : '0'
                                }}
                            >
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
