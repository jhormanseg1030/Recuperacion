import React from 'react';
import './estilos.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className=" Container3">
        <form className="form1">
            <h2>Inicio de sesion</h2>
            <div className="form-group1">
                <label htmlFor="name">Usuario o Correo Electronico</label><br/>
                <input type="text" id="name" required />
            </div>

            <div className="form-group1">
                <label htmlFor="password">Contraseña</label><br />
                <input type="password" id="password" required />
                <Link>¿Olvido su contraseña?</Link>
            </div>
            <div>
            <Link to="/Registro"> No tienes cuenta? </Link>
            </div>

            <button type="submit" className="submit-button1 ">Enviar</button>
        </form>
    </div>
  );
}

export default Login;

