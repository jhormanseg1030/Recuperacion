import React from 'react';
import './estilos.css'
import Ajos from '../Imagenes/Ajos.jpg'
import Paisajes from '../Imagenes/Paisajes.jpg'
import Revicion from '../Imagenes/Revicion.jpg'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Cuidad from '../Imagenes/Cuidad.jpg'
import Cultivo from '../Imagenes/Cultivo.jpg'
import Energia from '../Imagenes/Energia.jpg'
import Mujer from '../Imagenes/Mujer.jpg'
import Rama from '../Imagenes/Rama.jpg'
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope} from 'react-icons/fa';
const Pagina = () => {
  return (
    <div>
       <header className="header">
            <div>
              <h1 className='p'>EMPRESA</h1>
              <h2 className='p1'>NOMBRE AQUI</h2>
            </div>
            <nav className="nav">
                <ul>
                    <Link to="/QuienesSomos"><li>QUIENES SOMOS</li></Link>
                    <li><a href="#home">PRODUCTOS</a></li>
                    <li><a href="#about">SERVICES</a></li>
                    <Link to="/Iniciar"> <li>INICIAR SESION</li></Link>
                </ul>
            </nav>
        </header>  
      <Image src={Paisajes} fluid />

      <CardGroup className='grupo1'>
      <Card>
        <Card.Img variant="top" src={Cultivo}  />
        <Card.Body>
          <Card.Title>lOREM ISUM</Card.Title>
          <Card.Text>
            Lorem isum dolor sit amet, comectetuer adipixiping old sed diam nonummy rebh
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={Revicion}  />
        <Card.Body>
          <Card.Title>lOREM ISUM</Card.Title>
          <Card.Text>
          Lorem isum dolor sit amet, comectetuer adipixiping old sed diam nonummy rebh
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>

      <CardGroup>
      <Card>
        <Card.Img variant="top" src={Mujer}  />
        <Card.Body>
          <Card.Title>lOREM ISUM</Card.Title>
          <Card.Text>
          Lorem isum dolor sit amet, comectetuer adipixiping old sed diam nonummy rebh
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={Rama}  />
        <Card.Body>
          <Card.Title>lOREM ISUM</Card.Title>
          <Card.Text>
          Lorem isum dolor sit amet, comectetuer adipixiping old sed diam nonummy rebh
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>
      
      <div className='Cont'>
        <h2>Productos</h2>
        <div className="image-gallery">
          <div className="gallery-row">
            <div className="gallery-item">
              <img src={Cuidad} alt="Imagen 1"/>
            </div>
            <div className="gallery-item">
              <img src={Energia} alt="Imagen 2"/>
            </div>
            <div className="gallery-item">
              <img src={Ajos} alt="Imagen 3"/>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
          <div className="footer-content">
            <div className="footer-section contact-section">
              <h3>Contacto</h3>
              <ul>
                <li><i><FaMapMarkerAlt /></i> Dirección</li>
                <li><i><FaPhone /></i> Teléfono</li>
                <li><i><FaEnvelope /></i> Correo electrónico</li>
              </ul>
            </div>
              <div className="footer-section info-section">
                <p>Texto de información adicional</p>
              </div>
                  </div>
            <div className="footer-bottom">
              <p>&copy; 2023 Nombre de la Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    </div>
  );
}

export default Pagina;
