// src/routes/Contato.jsx

import React from 'react';
import '../css/Contato.css'; // Importa os estilos para a página de contato

const Contato = () => {
    return (
        <div className="contato-main">
            <div className="contact-container">
                <h1>Entre em Contato Conosco</h1>
            
                <section className="contact-info">
                    <h2>Informações de Contato</h2>
                    <p><strong>Endereço:</strong> Rua dos Atletas, 123, São Paulo, SP</p>
                    <p><strong>Telefone:</strong> (11) 1234-5678</p>
                    <p><strong>Email:</strong> contato@lojaesportes.com.br</p>
            
                    {/* Aqui você pode adicionar um mapa */}
                    <div className="map">
                        <iframe
                            title="Localização da Loja"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.621859974877!2d-46.61876048495312!3d-23.548646284685452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5958d4b9b1a3%3A0xb8b45d476b601d59!2sRua%20dos%20Atletas%2C%20123%20-%20São%20Paulo%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1641510345768!5m2!1spt-BR!2sbr"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>
            
                <section className="contact-form">
                    <h2>Envie-nos uma Mensagem</h2>
                    <form>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" name="name" required />
            
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
            
                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
            
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contato;
