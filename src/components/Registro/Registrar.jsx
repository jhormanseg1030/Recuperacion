import React from 'react';
import './Regis.css'
import { Link } from 'react-router-dom';

const Registrar = () => {
    return (
    <div className="registration-form-container">
      <div className="registration-form">
        <h2>Regístrate</h2>
          <form>
            <div className="form-group">
              <label for="name">Nombre:</label>
              <input type="text" id="name" name="name" required/>
            </div>
            <div className="form-group">
              <label for="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
              <label for="password">Contraseña:</label>
              <input type="password" id="password" name="password" required/>
            </div>
            <Link to="/"><button className="btn-register">Registrarse</button></Link>
          </form>
      </div>
    </div>
    );
}

export default Registrar;
