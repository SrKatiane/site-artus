import React from 'react';
import './Contact.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contato" className="contact-section">
            <div className="contact-container">
                <div className="contact-wrapper">
                    {/* Left Column: Info */}
                    <div className="contact-info-column">
                        <h2 className="contact-title">
                            Solicite um orçamento ou <span className="contact-title-accent">visita técnica</span>.
                        </h2>
                        <p className="contact-subtitle">
                            Estamos prontos para atender as demandas da sua indústria com agilidade e corpo técnico especializado.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <Phone size={20} />
                                </div>
                                <div className="contact-item-text">
                                    <p className="item-label">Telefone</p>
                                    <p className="item-value">(00) 0000-0000</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <Mail size={20} />
                                </div>
                                <div className="contact-item-text">
                                    <p className="item-label">E-mail</p>
                                    <p className="item-value">contato@artusengenharia.com.br</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon-box">
                                    <MapPin size={20} />
                                </div>
                                <div className="contact-item-text">
                                    <p className="item-label">Escritório</p>
                                    <p className="item-value">R. dos Búzios, 200 - Calhau, <br />São Luís - MA, 65071-070, Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-form-column">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Nome Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: João da Silva"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>E-mail Corporativo</label>
                                    <input
                                        type="email"
                                        placeholder="Ex: joao@empresa.com.br"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>WhatsApp / Telefone</label>
                                    <input
                                        type="tel"
                                        placeholder="(11) 99999-9999"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Assunto</label>
                                    <div className="select-wrapper">
                                        <select required defaultValue="">
                                            <option value="" disabled>Selecione um assunto</option>
                                            <option>Orçamento de Projeto</option>
                                            <option>Manutenção Preventiva</option>
                                            <option>Automação Industrial</option>
                                            <option>Outros Assuntos</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Mensagem</label>
                                <textarea
                                    rows={4}
                                    placeholder="Descreva brevemente sua necessidade..."
                                    required
                                ></textarea>
                            </div>

                            <button className="form-submit-btn" type="submit">
                                Enviar Solicitação
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
