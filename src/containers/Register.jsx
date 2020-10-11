import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='registro'>
    <section className='registro__container'>
      <h2>Regístrate</h2>
      <form className='registro__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Registrarme</button>
      </form>
      <p className='registro__container--login'><a href='#'>Iniciar Sesión</a></p>
    </section>
  </section>
);

export default Register;
