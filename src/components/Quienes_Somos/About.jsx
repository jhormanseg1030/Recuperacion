import React from 'react';
import './AboutUs.css';
import Ajos from '../Imagenes/Ajos.jpg';

const About = () => {
  return (
    <div className="about-us-container">
      <section className="hero-section">
        <h1>Conoce Nuestra Historia</h1>
        <p>Somos más que una empresa, somos una familia comprometida con la excelencia.</p>
      </section>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Nuestra Misión</h2>
          <p>
            Conectar a los campesinos directamente con los consumidores, eliminando intermediarios 
            y garantizando precios justos para todos. ¡Frescura y calidad en cada producto!
          </p>
        </div>
        <div className="mission-image">
          <img src={Ajos} alt="Equipo trabajando" />
        </div>
      </section>

      <section className="values-section">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          {[
            { icon: '🌱', title: 'Sostenibilidad', desc: 'Trabajamos con métodos eco-amigables.' },
            { icon: '🤝', title: 'Honestidad', desc: 'Transparencia en cada transacción.' },
            { icon: '🚀', title: 'Innovación', desc: 'Tecnología al servicio del campo.' },
            { icon: '❤️', title: 'Pasión', desc: 'Amamos lo que hacemos.' }
          ].map((item, index) => (
            <div key={index} className="value-card">
              <span className="value-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Conoce al Equipo</h2>
        <div className="team-grid">
          <p className="team-cta">¡Somos un equipo de 20+ apasionados por revolucionar el agro!</p>
        </div>
      </section>

      <section className="cta-section">
        <h2>¿Quieres unirte a nuestra comunidad?</h2>
        <button className="cta-button">¡Contáctanos!</button>
      </section>
    </div>
  );
};

export default About;