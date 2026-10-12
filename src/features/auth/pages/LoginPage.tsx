import { Link } from 'react-router-dom';
import { CustomLogo } from '@/shared/components/CustomLogo';
import '@/features/auth/styles/login-page.css';


export const LoginPage = () => {
  return (
    <div className='auth-card'>
      <div className='auth-header'>
        <CustomLogo subtitle='Acceso' />
        <p>Ingresa tus datos para acceder a tu cuenta.</p>
      </div>

      <form className='auth-form' onSubmit={(e) => e.preventDefault()}>
        <div className='form-group'>
          <label htmlFor='email'>Correo electrónico</label>
          <input
            type='email'
            id='email'
            placeholder='email@example.com'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            id='password'
            placeholder='••••••••'
            required
          />
        </div>

        {/* Usamos tus clases globales de Button */}
        <button type='submit' className='btn btn--primary'>
          Iniciar Sesión
        </button>
      </form>

      <div className='auth-footer'>
        <p>¿No tienes una cuenta? <Link to='/auth/register'>Regístrate aquí</Link></p>
      </div>
    </div>
  );
};
